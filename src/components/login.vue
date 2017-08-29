<template>
    <div id="login">
        <div id="main">
            <div id="main2">
                <input id="user" type="text" placeholder="   请输入手机号">
                <div id="main2Div">
                    <input id="psw" type="text" placeholder="   请输入验证码"> <button @click="sendMsg" id="phoneText">获取验证码</button>
                </div>
                <p id="inputP">在 <span id="secSpan"></span>秒后重新获取验证码&#X3000;&#X3000;&#X3000;</p>
                <button id="subBtn" @click="submit">进入系统</button>
                <div id="wechat">
                    <div></div>
                    <div @click="wechatLogin"></div>
                </div>
                <p id="checkText"></p>
            </div>
            <br>
            <br>
            <br>
            <br>
            
        </div>
    </div>
</template>

<script>
import Bus from '../bus'

export default {
    name: 'login',
    data () {
        return {
            message:'',
            checked: false,
            msg:'123'
        }
    },
    components: {

    },
    mounted(){
        $(document).ready(function(){
            var strName = localStorage.getItem('keyName');
            var strPass = localStorage.getItem('keyPass');
            if(strName){
                $('#user').val(strName);
            }if(strPass){
                $('#psw').val(strPass);
            }
        });
        $("#inputP").css("display","none")
        $("#subBtn").css("margin-top","15px")        
    },
    methods:{
        submit(){

            Bus.$emit('customEvent', this.msg)

            var strName = $('#user').val();
            var strPass = $('#psw').val();
            localStorage.setItem('keyName',strName);
            if($('#remember').is(':checked')){
                localStorage.setItem('keyPass',strPass);
            }else{
                localStorage.removeItem('keyPass');
            }

            var userId = $("#user").val()
            var psw = $("#psw").val()
            if(userId =="admin" && psw == "admin"){
                // alert("登陆成功")
                this.$router.push({ path: '/home/involution' })
            }else{
                $("#checkText").text('身份验证失败')
            }
            
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
        },
        sendMsg(){
            
            var phone = $("#user").val();
            $("#phoneText").attr("disabled", "true");
            $("#phoneText").css("background-color", "gray");
            
            var sec = 30;
             var secTime = setInterval(function(){
                 sec--;
                 $("#secSpan").text(sec)
                 $("#phoneText").attr("disabled", "true");
                 $("#phoneText").css("background-color", "gray");
                 $("#inputP").css("display","block")
                 $("#subBtn").css("margin-top","5px")
                if(sec == 0){
                    $("#inputP").css("display","none")
                    $("#phoneText").removeAttr("disabled");
                    $("#phoneText").css("background-color", "rgb(1,150,204)");
                    clearInterval(secTime);
                }
            },1000);
        },
        wechatLogin(){
            this.$router.push({ path: '/login2' })      
        }
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
    #main2{
        width:22%;
        height:25%;
        display:flex;
        position:relative;
        top:13%;
        align-items: center;
        flex-direction: column;
    }
    #main2 #main2Div{
        width:100%;
        height:40px;
        
        text-align:center;
        line-height:40px;
    }
    #user{
        width:75%;
        height:4.3vh;
        margin-top:4px;
        border-radius:3px;
        border:none;
        background-color:white;
        font-size:10px;
    }
    #main2Div{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top:1vh;
    }
    #psw{
        width:47%;
        height:4.3vh;
        margin-top:5px;
        margin-bottom:4px;
        border-radius:3px;
        border:none;
        background-color:white;
        font-size:10px;
    }
    #phoneText{
        width:27%;
        height:4.3vh;
        margin-left:1%;
        border:none;
        border-radius:2px;
        font-size:1.2vh;
        line-height:100%;
        color:white;
        background-color:rgb(1,150,204);
    }
    #inputP{
        color:white;
        margin-bottom:4px;
    }
    #remember{
        margin-top:4px;      
    }
    
    #subBtn{
        width:75%;
        height:19%;
        border-radius:4px;
        background-color:rgb(247,190,18);
        border:none;
        color:black;
        font-weight:400;
        font-size:19px;
        margin-bottom:4px;
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
