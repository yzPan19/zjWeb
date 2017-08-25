

function initFreeDo () {
	this.project = null;
	this.viewer = null;
	this.selectedNode = null;
	this.container = this.container || {};    //未来保存加载的模型的容器，便于快速访问
	this.pickedModels=[];  // 选中模块
	this.clickedColor = new FreeDo.Color(1,1,1,0.9);	//模型选中颜色
	this.unClickedColor = new FreeDo.Color(1,1,1,1);	//取消选中颜色
}

initFreeDo.prototype.init = function() {
	var freedocontainer = document.getElementById("freedocontainer");
	var project = Freedo.FdApp.createProject(freedocontainer);
	this.project = project;
	this.viewer = this.project.getViewer();
	this.sceneManager = this.project.getSceneManager();
}

initFreeDo.prototype.getModelMatrix=function(lon,lat,height,heading,pitch,roll,scaleX,scaleY,scaleZ){
	var scaleCartesian3 = new FreeDo.Cartesian3(scaleX,scaleY,scaleZ); //获得三元素，直接通过数字获得
	var scaleMatrix = FreeDo.Matrix4.fromScale(scaleCartesian3);//获得缩放矩阵
	var position = FreeDo.Cartesian3.fromDegrees(lon,lat,height);//根据经纬高获得位置三元素
	var heading = FreeDo.Math.toRadians(heading);
	var pitch = FreeDo.Math.toRadians(pitch);
	var roll = FreeDo.Math.toRadians(roll);
	var hpr = new FreeDo.HeadingPitchRoll(heading,pitch,roll);
	var transform = FreeDo.Transforms.headingPitchRollToFixedFrame(position,hpr);//获得姿态矩阵
	var matrix4 = new FreeDo.Matrix4();
	FreeDo.Matrix4.multiply(transform, scaleMatrix, matrix4);
	return matrix4;
}

// 初始化双击鼠标事件
initFreeDo.prototype.initDoubleClick=function(viewer,callback){
	var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);

	screenSpaceEventHandler.setInputAction(function(movement){
		var picked = viewer.scene.pick(movement.position);
		callback.call(window,picked);
	}, FreeDo.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
}

initFreeDo.prototype.ModelObj = function(options){
	var obj = {};
	obj.id = options.id;
	obj.parentId = options.parentId;
	obj.name = options.name;
	obj.type = options.type;
	obj.url = options.url
	obj.lon = options.lon;
	obj.lat = options.lat;
	obj.height = options.height;
	obj.course = options.course;
	obj.alpha = options.alpha;
	obj.roll = options.roll;
	obj.scaleX = options.scaleX;
	obj.scaleY = options.scaleY;
	obj.scaleZ = options.scaleZ;
	var modelMatrix = viewerFree.getModelMatrix(
		options.lon,
		options.lat,
		options.height,
		options.course,
		options.alpha,
		options.roll,
		options.scaleX,
		options.scaleY,
		options.scaleZ
	);
	obj.primitive = this.viewer.scene.primitives.add(
		FreeDo.Model.fromGltf({
			id : options.id,
			url : options.url,
			// color: color,
			show : true,                     // default
			modelMatrix : modelMatrix,
	        allowPicking : true,            // not pickable
	        debugShowBoundingVolume : false, // default
	        debugWireframe : false
		})
	);
	return obj;
}

initFreeDo.prototype.GroupObj = function(id,parentId,name,type){
	var obj = {};
	obj.id = id;
	obj.parentId = parentId;
	obj.name = name;
	obj.type = type;
	obj.children = [];
	return obj;
}

initFreeDo.prototype.initModels = function(callback){
	var that = this;
	$.ajax({
		url:"http://182.92.7.32:9510/ProjectManage/pm/selectAll",
		dataType:"JSON",
		success:function(content){
			var bufferData = {}; // 树结构数据
			var treeNode = null;
			var modelNode = null;
			var treeParentNode = null;// 树中的父节点
			var modelParentNode = null;// 模型缓存中的父节点
			var container= that.container;
			var i = 0;

			//拼凑树节点和缓存容器
			for(;i<content.length;i++){
				treeNode = content[i]; //当前节点
				
				treeParentNode = bufferData[treeNode.parentId]; //树父节点
				modelParentNode = container[treeNode.parentId]; //缓存容器父节点
				
				if(treeParentNode == undefined){ //如果在树结构数据中不存在父节点则创建一个代替者，用来临时保存遍历到的子节点
					treeParentNode = bufferData[treeNode.parentId] = {children:[]};
					modelParentNode = container[treeNode.parentId] = {children:[]};
				}

				// 非叶子节点
				if(treeNode.leaf == 0){
					modelNode = that.GroupObj(treeNode.id,treeNode.parentId,treeNode.text,treeNode.type); //创建管理节点
					
					if(bufferData[treeNode.id] == undefined) //如果自己的位置上没有代替者则增加一个未来装载子节点的容器
						treeNode.children = [];				//只有分支节点才可能存在代理节点
					else{
						treeNode.children = bufferData[treeNode.id].children;   //如果有代理者证明有子节点在自身之前被遍历，将代理者搜集的内容拷贝过来
						modelNode.children = container[treeNode.id].children;
					}
					bufferData[treeNode.id] = treeNode; //剔除代理者
					
				}else{
					var parameter = JSON.parse(treeNode.attributes.parameter);
					modelNode = that.ModelObj({
						id: treeNode.id, 
						parentId: treeNode.parentId,
						name: treeNode.text,
						type: treeNode.type,
						url: 'http://182.92.7.32:9510/ProjectManage/models/' + parameter.filePath,
						lon: parameter.lon,
						lat: parameter.lat,
						height: parameter.height,
						course: parameter.course,
						alpha: parameter.alpha,
						roll: parameter.roll,
						scaleX: parameter.scaleX,
						scaleY: parameter.scaleY,
						scaleZ: parameter.scaleZ
					});
				}
				
				container[treeNode.id] = modelNode;
				
				treeParentNode.children.push(treeNode);
				modelParentNode.children.push(modelNode.id);
				
			}
			callback.call(window,bufferData[-1].children);
			
		},
		error:function(xhr,text,ex){
			alert('读取数据失败');
		},
		beforeSend:function(){
			$("#ajaxModal").show();
		},
		complete:function(){
			$("#ajaxModal").hide();
		}
	  });
}

// 双击场景中的模型，定位树对应的节点
initFreeDo.prototype.initModelLeftDoubleClick=function(nodeId){
	if(nodeId==undefined)
		return ;
	var node=$("#pmTree").tree("find",nodeId);
	$("#pmTree").tree("collapseAll");
	$("#pmTree").tree("expandTo",node.target);
	$("#pmTree").tree("scrollTo",node.target);
	$("#pmTree").tree("select",node.target);
}

initFreeDo.prototype.lonLatHeightMinMax=function(positions){
	//计算最大最小值
	var min={},max={};
	var minLon = minLat = minHeight = Number.MAX_VALUE;
	var maxLon = maxLat = maxHeight = Number.MIN_VALUE;
	var position=null;

	for(var i=0;i<positions.length;i++){
		position=positions[i];

		if(position.lon<minLon)
			minLon=position.lon;
		if(position.lat<minLat)
			minLat=position.lat;
		if(position.height<minHeight)
			minHeight=position.height;

		if(position.lon>maxLon)
			maxLon=position.lon;
		if(position.lat>maxLat)
			maxLat=position.lat;
		if(position.height>maxHeight)
			maxHeight=position.height;
	}

	return minMax= {
		minLon:minLon,
		minLat:minLat,
		minHeight:minHeight,
		maxLon:maxLon,
		maxLat:maxLat,
		maxHeight:maxHeight
	}
}

initFreeDo.prototype.doubleCartesian3Distance=function(cartesian3A,cartesian3B){
	return Math.sqrt(Math.pow(cartesian3A.x-cartesian3B.x,2)+Math.pow(cartesian3A.y-cartesian3B.y,2)+Math.pow(cartesian3A.z-cartesian3B.z,2));
}

initFreeDo.prototype.fly=function(camera,model){
	var center=new FreeDo.Cartesian3();
	FreeDo.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center,center);

	var boundingSphere=new FreeDo.BoundingSphere(center,model.boundingSphere.radius);

	camera.flyToBoundingSphere(boundingSphere,
	{
		duration:1,
		offset:new FreeDo.HeadingPitchRange(camera.heading,camera.pitch)
	});

}

initFreeDo.prototype.flys = function(camera,positions){
 	
 	var minMax = this.lonLatHeightMinMax(positions);
 	// 得到几何平均值
 	var avgPosition = {
 		lon:(minMax.minLon+minMax.maxLon)/2,
 		lat:(minMax.minLat+minMax.maxLat)/2,
 		height:(minMax.minHeight+minMax.maxHeight)/2
 	}

 	// 转换成对应的向量
 	var maxCartesian3=FreeDo.Cartesian3.fromDegrees(minMax.maxLon,minMax.maxLat,minMax.maxHeight);
 	var avgCartesian3=FreeDo.Cartesian3.fromDegrees(avgPosition.lon,avgPosition.lat,avgPosition.height);

 	// 计算向量距离
 	var distance = this.doubleCartesian3Distance(maxCartesian3,avgCartesian3);

 	// 计算包围球
 	var boundingSphere = new FreeDo.BoundingSphere(avgCartesian3,distance);

 	// 飞
 	camera.flyToBoundingSphere(boundingSphere, {
 		duration:1,
 		offset:new FreeDo.HeadingPitchRange(camera.heading,camera.pitch)
 	});
}

initFreeDo.prototype.flyToModel = function(nodeId){
	
	if(this.container[nodeId]==undefined||this.container[nodeId].primitive==undefined)
		return ;
	
	this.fly(this.viewer.camera, this.container[nodeId].primitive);
	
	//模型点选变色效果
	if(this.pickedModels.length!=0){
		
		for(var i=0;i<this.pickedModels.length;i++)
			this.pickedModels[i].primitive.color = this.unClickedColor;
		
		this.pickedModels=[];
	}
	
	this.pickedModels.push({primitive:this.container[nodeId].primitive});
	
	this.pickedModels[0].primitive.color=this.clickedColor;
}

initFreeDo.prototype.flyToModels = function(nodeIds){
	
	if(nodeIds.length==0)
		return;
	var positions = [];
	var node = null;
	
	if(this.pickedModels.length != 0){	//清空存储所选模型的容器
		
		for(var i=0;i<this.pickedModels.length;i++)
			this.pickedModels[i].primitive.color=this.unClickedColor;
		
		this.pickedModels = [];
	}
	
	for(var i=0;i<nodeIds.length;i++){	//设置多模型颜色
		
		node = this.container[nodeIds[i]];
		
		positions.push({lon:node.lon,lat:node.lat,height:node.height});
		//设置模型颜色
		this.pickedModels.push({primitive:node.primitive});
		node.primitive.color=this.clickedColor;
	}
	
	this.flys(this.viewer.camera, positions);
}


// 初始化操作树
initFreeDo.prototype.InitTree = function(treeData){
	//初始化树
	$("#pmTree").tree({
		data:treeData,
		checkbox:true,
		onContextMenu:function(e,node){
			e.preventDefault();//取消默认右键事件
			$("#pmTree").tree("select",node.target);
			
			viewerFree.checkedNodes = $("#pmTree").tree("getChecked");
			
			if(viewerFree.checkedNodes.length==0){
				$("#pmTreeContextMenu .nodeChecked").hide();
			}else{
				$("#pmTreeContextMenu .nodeChecked").show();
			}
			
			if(node.type==2)
				$("#addPm").hide();
			else
				$("#addPm").show();
				
			
			$("#pmTreeContextMenu").menu("show",{left:e.pageX,top:e.pageY})
		},
		onSelect:function(node){
			viewerFree.selectedNode = node;
			if(node.type == 2)
				viewerFree.flyToModel(node.id);
			else{
				var subNodes=$("#pmTree").tree("getChildren",node.target);
				var nodeIds=[];
				for(var i=0;i<subNodes.length;i++){
					if(subNodes[i].type == 2)
						nodeIds.push(subNodes[i].id);
				}
				// 当前选中之后获取的ID值，可以进行数据查询
				viewerFree.flyToModels(nodeIds);
			}
		}
	});
}

initFreeDo.prototype.initLeftDoubleClick=function(callback){
	var that = this;
	that.initDoubleClick(that.viewer, function(picked){
		if(picked == undefined){	//如果picked为空则表示点击无模型处，使之前点变色的模型重置颜色并清空所选模型容器
			for(var i=0;i<that.pickedModels.length;i++)
				that.pickedModels[i].primitive.color = that.unClickedColor;
			that.pickedModels=[];
			callback.call(window,undefined);	//回调注入空值
			return ;
		}
		
		if(that.pickedModels.length!=0){	//使之前点变色的模型重置颜色并清空所选模型容器
			for(var i=0;i<that.pickedModels.length;i++)
				that.pickedModels[i].primitive.color = that.unClickedColor;
			that.pickedModels = [];
		}
		
		that.pickedModels.push(picked);	//缓存点选模型
		
		that.pickedModels[0].primitive.color = that.clickedColor; //变色
		
		// id是获取到的节点 可以进行数据查询等操作
		callback.call(window, picked.id);	//回调 注入模型ID
	})
}


var viewerFree = new initFreeDo();
var treeData=null;

viewerFree.init();

//传入回调函数获得树的初始化数据
viewerFree.initModels(viewerFree.InitTree);

viewerFree.initLeftDoubleClick(viewerFree.initModelLeftDoubleClick);






