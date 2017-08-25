<template>
    <div id="header">
        
        <header>
            <div id="headDiv">
                <div id="marginDiv"></div>
                <div id="headerMsg">
                    海西高速公路网泉夏漳市联盟路泉州段工程
                </div>
                <div id="headerUser" v-popover:popover4>
                    <el-popover id="popoverUser" ref="popover4" placement="top" width="200" trigger="click">
                        <table id="userTable">
                            <div id="uTable1"><p>张三</p></div>
                            <div id="uTable2"><p>联盟路A1标段项目经理</p></div>
                            <div id="uTable3"><p>整改负责人</p></div>
                            <div id="uTable4"><button id="loginOut" @click="loginOut">登 出</button></div> 
                        </table>
                    </el-popover>
                </div>
                
                <!--
                <div id="search">
                    <input type="text" class="form-control" placeholder=" 输入关键字">
                    <span class="input-group-btn">
                        <button id="searchBtn" class="btn btn-default" type="button">搜索</button>
                    </span>
                </div>
                -->
            </div>
        </header>
        <div id="headerLine"></div>       
    </div>
</template>

<script>


export default {
    name: 'header',
    data () {
        return {
            
        }
    },
    components: {

    },
    mounted(){
        var name = '123'
    },
    methods:{
        loginOut(){
            this.$router.push({ path: '/' })
        },
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        background-color: rgb(242, 242, 242)
    }
    #mainDiv {
        height: 23px;
        background-color: rgb(63, 104, 147);
    }
    #header{
        position:fixed;
        display:block;
        margin-top:0px;
        z-index:3000;
        width:100%;
    }
    header {
        width: 100%;
        height: 7.9vh;
        background-color: rgb(0, 72, 152);
        display: flex;
        justify-content: center;
    }
    #headerLine{
        width:100%;
        height:0.3vw;
        background-color:rgb(250,191,20);
    }
    #headDiv {
        width: 90%;
        height: 7.9vh;
        display: flex;
        align-items: center;
        justify-content: left;
        position:absolute
    }
    
    #headerLogo{
        width:2.5vw;
        height:2.5vw;
        margin-right:10px;
    }
    #headerLogo > img{
        width:2.5vw;
        height:2.5vw;
    }

    #headerTitle{
        width:13.4vw;
        height:79px;
        color:white;
        font-size:1.2vw;
        line-height:79px;
        font-weight:600;  
    }
    #marginDiv{
        width:5vh;
        height:5vh;
    }
    #headerMsg{
        width:50.7vw;
        height:5vh;
        border-radius:5px;
        margin: 0 auto;
        text-align:center;
        display:flex;
        align-items: center;
        justify-content: center;
        color:white;
        font-size:1.7vw;
        font-weight:600;
    }
    #headerUser{
        width:5vh;
        height:5vh;
        background-image:url(/static/img/login/user.png);
        background-size:contain;
        background-repeat:no-repeat;
        border-radius:50%;
        position:relative;
    }

    #userTable #uTable1{
        height:6vh;
        width:200px;
        font-size:15px;
        line-height:3vh;
        margin-left:-10px;
        margin-top:-10px;
        background-color:rgb(0,90,191);
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        display:flex;
        align-items: center; 
    }
    #uTable1 > p{
        width:180px;
        color:white;
        margin-left:10px;
        margin-right:10px;
        margin-bottom:0px;
        border-bottom:1px solid rgb(250,191,20);
    }
    #userTable #uTable2{
        width:200px;
        height:7vh; 
        font-size:13px;
        line-height:3vh;
        margin-left:-10px;
        margin-top:-0px;
        background-color:rgb(0,72,151); 
        display:flex;
        align-items: center;  
    }
    #uTable2 > p{
        width:180px;
        color:white;
        margin-left:10px;
        margin-right:10px;
        margin-bottom:0px;
        border-bottom:1px solid rgb(250,191,20);
    }
    #userTable #uTable3{
        width:200px;
        height:7vh;
        font-size:13px;
        line-height:3vh;
        margin-left:-10px;
        margin-top:-10px;
        background-color:rgb(0,72,151);
        display:flex;
        align-items: center;
    }
    #uTable3 > p{
        width:180px;
        color:white;
        margin-left:10px;
        margin-right:10px;
        margin-bottom:0px;
        border-bottom:1px solid rgb(250,191,20);
    }
    #uTable4{
        width:200px;
        height:6vh;
        line-height:5vh;
        margin-left:-10px;
        margin-bottom:-10px;
        background-color:rgb(0,72,151);
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;   
    }
    #uTable4 > button{
        margin-left:10px;
        margin-right:10px;
    }
    #loginOut{
        width:3.8vw;
        height:1.8vw;
        color:white;
        font-size:1.1vw;
        font-weight:300;
        line-height:1.5vw;
        border:none;
        border-radius:5px;
        background-color:rgb(0,160,217);
        float:right;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    
</style>
