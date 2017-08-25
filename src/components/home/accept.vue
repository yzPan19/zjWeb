<template>
    <div id="accept">
            <v-headerhome></v-headerhome>
            <main>
                <ul id="myTab" class="nav nav-tabs col-md-3">
                    <li>
                        <router-link to="check">
                            <a data-toggle="tab">待审核</a>
                        </router-link>
                    </li>           
                    <li>
                        <router-link to="rectify">
                            <a data-toggle="tab">待整改</a>
                        </router-link>
                    </li>                
                    <li class="active">
                        <router-link to="accept">
                            <a data-toggle="tab">待验收</a>
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
                        <v-accept></v-accept>
                    </div>
                    
                </div>
            </main>
    </div>
</template>

<script>

import vHeaderhome from '@/components/common/header_home.vue'
import vAccept from '@/components/home/accept_table'

export default {
    name: 'accept',
    data () {
        return {
            
        }
    },
    components: {
        vHeaderhome,
        vAccept
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
