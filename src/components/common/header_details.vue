<template>
    <div id="header">
        
        <header>
            <div id="headDiv">
                
                <div id="headerMsg">
                    
                    海西高速公路网泉夏漳市联盟路泉州段工程
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
        background-color: rgb(36, 40, 51);
        display: flex;
        justify-content: center;
    }
   
    #headDiv {
        width: 90%;
        height: 7.9vh;
        display: flex;
        align-items: center;
        justify-content: left;
        position:absolute
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
        color:rgb(0,159,255);
        font-size:1.7vw;
        font-weight:600;
    }
    
    
</style>
