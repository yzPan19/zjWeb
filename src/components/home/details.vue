<template>
    <div id="details">
            <v-headerdetails></v-headerdetails>
            <main id="main">
                <div id="picDiv">
                    <div class="picBox">
                        <div id="detailPic"></div>
                    </div>
                    <div class="picBox2">
                        <div id="detailPic2"></div>
                    </div>
                    <div class="picBox">
                        <div id="detailMap"></div>
                    </div>
                </div>

                <div id="audioBorder">
                    <div id="audioDiv">
                        <div id="audioImg"></div>
                    </div>
                </div>

                <div id="tableDiv">
                    <div id="table1Div">
                        <v-detailt1></v-detailt1>
                    </div>
                    <div id="table2Div">
                        <v-detailt2></v-detailt2>
                    </div>
                </div>
            </main>
    </div>
</template>

<script>

import vHeaderdetails from '@/components/common/header_details.vue'
import vDetailt1 from '@/components/common/detail_table1.vue'
import vDetailt2 from '@/components/common/detail_table2.vue'


export default {
    name: 'details',
    data () {
        return {
            tableData: [{
                text: '问题发起',
                value: '发起',
                name: '王小虎',
                time: '2017-08-23'
            }]
        }
    },
    mounted(){
        
    },
    components: {
        vHeaderdetails,
        vDetailt1,
        vDetailt2,
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #details {
        background-color: rgb(36, 40, 51);
        height:100vh;
    }
    #main{
        position:relative;
        top:8.2vh;
    } 
    main {
        width: 85%;
        margin: 0 auto;
        display: flex;
        flex-wrap:wrap;
    }
    
    #picDiv{
        width:100%;
        height:46vh;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    .picBox{
        width:31vw;
        height:100%;
        padding:6px;
        border:1px solid rgb(10,170,215);
        background-color:rgb(29,89,133);
    }
    #detailPic{
        width:100%;
        height:100%;
        margin: 0 auto;
        background-image:url(/static/img/details/pic1.png)
    }
    .picBox2{
        width:28vw;
        height:100%;
        margin: auto 0.3vw;
        padding:6px;
        border:1px solid rgb(10,170,215);
        background-color:rgb(29,89,133);
    }
    #detailPic2{
        width:100%;
        height:100%;
        margin: 0 auto;
        background-image:url(/static/img/details/pic2.png)        
    }
    
    #detailMap{
        width:100%;
        height:100%;
        margin: 0 auto;
        background-image:url(/static/img/details/map.png)
    }
    #audioBorder{
        width:100%;
        height:5vh;
        border:1px solid rgb(10,170,215);
        margin-top:0.3vw;
    }
    #audioDiv{
        width:100%;
        height:100%;
        border:4px solid rgb(29,89,133);
        
        padding:0.15vw;
        background-color:rgb(55,61,77);
    }
    #audioImg{
        width:100%;
        height:100%;
        
        background-image:url(/static/img/details/audio.png);
        background-size:100% 100%;
        background-repeat:no-repeat;
    }

    #tableDiv{
        width:100%;
        height:35vh;
        margin-top:0.3vw;
        display:flex;
    }
    #table1Div{
        width:53vw;
        height:100%;
        overflow:scroll;
        overflow-x:hidden;
        margin-right:0.5vw;        
    }
   
    #table2Div{
        width:35vw;
        height:100%;
        overflow:scroll;
        overflow-x:hidden;
        overflow-y:visible;
        margin-left:0.5vw;
    }
    
    
</style>
