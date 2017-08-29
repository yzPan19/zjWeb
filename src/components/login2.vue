<template>
    <div id="login">
        <div id="main">
            <div id="main22">
                <img id="codeimg" src="" alt="">
                <p>请使用微信登陆</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'login',
    data () {
        return {
            message:'',
            checked: false
        }
    },
    components: {

    },
    mounted(){ 
			
		
			$.ajax({
                type: "get",     
                dataType: "json",   
                url: "http://192.168.3.102:8080/dlxc/login/getAccessToken.do",  
                success: function (res) {
                    console.log(res)	
                }
			});
			
		
		// alert("获取accesstoken成功")
					// window.location.href='http://localhost:8080/#/home/confirm'
					// console.log(res)
					
					// console.log(accesstoken)
					var gettime=new Date().getTime();
					var number = parseInt(Math.random()*100)
					// console.log(number)
					// $.ajax({
					// 	type: "POST",     
					// 	dataType: "json",    
					// 	url: "https://api.weixin.q.com/cgi-bin/qrcode/create?access_token=cCQiNuWMy-gCqUkUc-uHX_DtY_jEKU8rVSdxszTmzb_v9UOlPSEcC_--HMHq59B1oFT6Dr-Dxt2l_bVkwZCXR4OJi-P4us1rXHjOI51quaQAS3mDEFZKScMe6JpmYCdpGYCfAJAVNR", 
					// 	data:{
					// 		"expire_seconds":604800,
					// 		"action_name":"QR_STR_SCENE",
					// 		"action_info":{"scene":{"scene_str":"LOGIN_" + gettime + number}}
					// 	}, 
					// 	success: function (res) {
							
					// 			// alert("登陆成功")
					// 			// $("#codeimg").url = res.data.url + accesstoken
					// 			console.log(res)
							
					// 	},
					// 	error:function(err){
					// 		console.log(err)
					// 	}
					// });

			
		 
		// var timeCode = new Date().getTime()
        // console.log(timeCode)

		// var loginId =  setInterval(function(){
		// 	$.ajax({
		// 		type: "POST",     
		// 		dataType: "json",    
		// 		url: "",  
		// 		success: function (res) {
		// 			if(res.result == true) {
		// 				// alert("登陆成功")
		// 				clearInterval(loginId);
		// 				this.$router.push({ path: '/home/involution' })
		// 			}
		// 		},
		// 		error: function(err){
		// 			clearInterval(loginId);
		// 		},
		// 	});
		// },1000);      
    },
    methods:{
        
            
            // $.ajax({
            //     type: "POST",     
            //     dataType: "json",    
            //     url: "http://218.56.32.4:5173/mb/login.do",
            //     data: {
            //         username : userId,
            //         password : psw
            //     },    
            //     success: function (res) {
            //         if(res.result == 0) {
            //             // alert("登陆成功")
            //             window.location.href='http://localhost:8080/#/home/confirm'
            //         }else if(res.result == -1){
            //             alert('用户名不存在');
            //         }else if(res.result == -2){
            //             alert("密码错误")
            //         }
            //     }
			// });
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        
    }
    #main{
        width:100%;
        height:100vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image:url(../../static/img/login/bg1.png);
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #main22{
        width:20%;
        height:20%;
        display:flex;
        position:relative;
        top:2vh;
        align-items: center;
        flex-direction: column;
    }
    #main22 img{
        width:13vw;
    }
    #main22 p{
        color:white;
        margin-top:1vh;
    }
   
    #wechat{
        width:75%;
        height:2vw;
        display:flex;
        justify-content:space-between;
    }
    #wechat div{
        width:2vw;
        height:2vw;
    }
    #wechat div:nth-of-type(2){
        background-image:url(../../static/img/login/wechat.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    #checkText{
        width:75%;
        text-align:left;
        color:red;
    }
    
</style>
