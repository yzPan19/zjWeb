<template>
    <div id="mine">
        <div id="hDiv">
            <main id="mainT">
                <ul id="myTab" class="nav nav-tabs col-md-3">
                    <li class="active">
                        <a id="a1" href="#detail" data-toggle="tab">个人信息</a>
                    </li>           
                    <li>
                        <a id="a2" href="#record" data-toggle="tab">消缺记录</a>
                    </li>                 
                </ul>
                <div class="myTabContent col-md-9">
                    
                </div>
            </main>
        </div>   
    </div>
</template>

<script>

import vDetail from '../components/mine/detail_table'
import vRecord from '../components/mine/record_table'


export default {
    name: 'mine',
    data () {
        return {

        }
    },
    components: {
        vDetail,
        vRecord
      
    },
    methods:{
        liDetail(){
            $("#detail").css('display','block')
            $("#record").css('display','none')
        },
        liRecord(){
            $("#detail").css('display','none')
            $("#record").css('display','block')
        },
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    body {
        
    }
    main {
        width: 65%;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
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
</style>
