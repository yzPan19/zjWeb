<template>
    <div id="home">
        <main>
            <ul id="myTab" class="nav nav-tabs col-md-3">
                <li class="active">
                    <router-link to="home/check">
                        <a data-toggle="tab">待审核</a>
                    </router-link>
                </li>           
                <li>
                    <router-link to="home/reponese">
                        <a data-toggle="tab">待整改</a>
                    </router-link>
                </li>                
                <li>
                    <router-link to="home/accept">
                        <a data-toggle="tab">待验收</a>
                    </router-link>
                </li>        
                <li>
                    <router-link to="home/involution">
                        <a data-toggle="tab">未复归</a>
                    </router-link>
                </li> 
            </ul>
            <div class="myTabContent col-md-9">
                <div class="tab-pane fade in active" id="confirm">
                    <v-check></v-check>
                </div>
            </div>
        </main>
    </div>
</template>

<script>

import vCheck from '../components/home/check_table'


export default {
    name: 'home',
    data () {
        return {

        }
    },
    components: {
        vConfirm,
    },
    methods:{
        
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
