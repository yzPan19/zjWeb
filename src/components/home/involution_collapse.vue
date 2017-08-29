<template>
    <div id="involution">
		<div id="collapse1"> 
			<div class="panel-group" id="accordion">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" 
							href="#collapseOne">
								问题1
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse in">
						<div class="panel-body">
							<div id="collapseDiv">
								<div class="collapseDiv1">
									<p>影像预览</p>
									<img src="../../../static/img/main/questionImg1.png" alt="">
									<p>提交人:张大帅</p>
								</div>
								<div class="collapseDiv1">
									<p>位置预览</p>
									<img src="../../../static/img/main/questionImg2.png" alt="">
									<p>流程:中心审核</p>
								</div>
							</div>
							<button class="detailBtn">查看详情</button>
						</div>
						
					</div>
					
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" 
							href="#collapseTwo">
								问题2
							</a>
						</h4>
					</div>
					<div id="collapseTwo" class="panel-collapse collapse">
						<div class="panel-body">
							<div id="collapseDiv">
								<div class="collapseDiv1">
									<p>影像预览</p>
									<img src="../../../static/img/main/questionImg1.png" alt="">
									<p>提交人:张大帅</p>
								</div>
								<div class="collapseDiv1">
									<p>位置预览</p>
									<img src="../../../static/img/main/questionImg2.png" alt="">
									<p>流程:中心审核</p>
								</div>
							</div>
							<button class="detailBtn">查看详情</button>
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" 
							href="#collapseThree">
								问题3
							</a>
						</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse">
						<div class="panel-body">
							<div id="collapseDiv">
								<div class="collapseDiv1">
									<p>影像预览</p>
									<img src="../../../static/img/main/questionImg1.png" alt="">
									<p>提交人:张大帅</p>
								</div>
								<div class="collapseDiv1">
									<p>位置预览</p>
									<img src="../../../static/img/main/questionImg2.png" alt="">
									<p>流程:中心审核</p>
								</div>
							</div>
							<button class="detailBtn">查看详情</button>
						</div>
					</div>
				</div>
			</div>
		</div>		
    </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script>




export default {
    name: 'involution',
    data () {
        return {
           
        }
    },
    mounted(){
       
    },
    methods:{
        
    },
    components: {
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    #collapse1{
        width:23vw;
        height:32vw;
		position:absolute;
        margin-top:10vh;
		left:3vw;
    }
	.panel{
		margin-bottom:-0.9vh;
	}
	.panel-heading{
		background-color:rgb(0,72,151);
	}
	.panel-title{
		background-color:rgb(0,72,151);
		color:rgb(217,171,59);
	}
	.panel-body{
		background-color:rgb(51,109,173);
	}
	.detailBtn{
		width:7vw;
		border:none;
		border-radius:6px;
		background-color:rgb(249,191,17);
	}
    #collapseDiv{
        width:100%;
        height:13vw;
        display:flex;
    }
    .collapseDiv1{
        width:50%;
        height:100%;
        margin:auto 0.1vw;
        box-sizing:border-box;
    }
	
    .collapseDiv1 p:nth-of-type(1){
        width:100%;
        height:2vw;
        line-height:2vw;
        margin:0 auto;
        color:white;
        box-sizing:border-box;
    }
    .collapseDiv1 img{
        width:100%;
        height:55%;
        box-sizing:border-box;
    }
    .collapseDiv1 p:nth-of-type(2){
        width:100%;
        height:2vw;
        line-height:2vw;
        text-align:left;
        margin:0;
        color:white;
        box-sizing:border-box;
    }
</style>
