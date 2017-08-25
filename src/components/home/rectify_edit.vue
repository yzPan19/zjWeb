<template>
    <div id="rectifyEdit">
            <v-headerhome></v-headerhome>
            <main>
                <ul id="myTab" class="nav nav-tabs col-md-3">
                    <li>
                        <router-link to="check">
                            <a data-toggle="tab">待确认</a>
                        </router-link>
                    </li>           
                    <li class="active">
                        <router-link to="rectify">
                            <a data-toggle="tab">待反馈</a>
                        </router-link>
                    </li>                
                    <li>
                        <router-link to="accept">
                            <a data-toggle="tab">待消缺</a>
                        </router-link>
                    </li>        
                    <li>
                        <router-link to="involution">
                            <a data-toggle="tab">未复归</a>
                        </router-link>
                    </li> 
                </ul>
                <div class="myTabContent col-md-9">
                    <div>
                        <div id="responseTable">
                            <div class="tab-pane" id="fankui">
                                <table id="tableEdit"  class="table col-md-12">
                                    
                                </table>
                                <div id="chooseTable">
                                    <div></div>
                                    <button class="btn btn-primary">确认</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </main>
    </div>
</template>

<script>
import vHeaderhome from '@/components/common/header_home.vue'


export default {
    name: 'rectifyEdit',
    data () {
        return {
            
        }
    },
    components: {
        vHeaderhome,
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    <style scoped>
    body {
        background-color: rgb(242, 242, 242) !important
    } 
    main {
        width: 65%;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        position:relative;
        top:75px
    }
    #myTab {
        border: none;
        width: 20%;
        padding: 0;
    }
    #myTab>li {
        width: 100%;
        align-items: center;
        margin-right: 0;
    }
    #myTab>li>a {
        border: none;
        width: 100%;
        margin: 0;
    }
    .myTabContent {
        width: 80%;
        height: 1000px;
        margin: 0 !important;
        flex-wrap: wrap;
        background-color: white;
    }
    .myTabContent div {
        width: 100%;
    }   
    table {
        width: 100% !important;
        margin: 5px auto;
        
    }

    tr>th {
        text-align: center;
        margin: 0;
        border:1px solid #ddd;
        height:35px;
    }
    tr>td{
        text-align: center;
        border:1px solid #ddd;
        height:35px;
    }
    textarea{
        width:90%;
        height:90%;
        margin:10px;
        border:none;
        resize:none;
        text-align:center;
    }
    #chooseTable{
        display:flex;
        justify-content: space-between;
    }
    #chooseTable div{
        margin-left:10px;
        font-size:13px;
        line-height:35px;
    }
    #chooseTable button{
        width:65px;
        height:35px;
        font-size:13px;
        margin-right:0px;
    }
</style>
