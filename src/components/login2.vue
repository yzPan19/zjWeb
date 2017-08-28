<template>
    <div id="login">
        <div id="main">
            <div id="main22">
                <img id="codeimg" src="../../static/img/login/loginCode.png" alt="">
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
		var loginCode = setInterval(function(){
			$.ajax({
				type: "POST",     
				dataType: "json",    
				url: "",  
				success: function (res) {
					if(res.data == true) {
						// alert("登陆成功")
						$("#codeimg").url = res.data
					}
				},
				error: function(err){
					clearInterval(loginCode);
				},
			});
		},20000); 
		// var timeCode = new Date().getTime()
        // console.log(timeCode)

		var loginId =  setInterval(function(){
			$.ajax({
				type: "POST",     
				dataType: "json",    
				url: "",  
				success: function (res) {
					if(res.result == true) {
						// alert("登陆成功")
						clearInterval(loginId);
						this.$router.push({ path: '/home/involution' })
					}
				},
				error: function(err){
					clearInterval(loginId);
				},
			});
		},1000);      
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
