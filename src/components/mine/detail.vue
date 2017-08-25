<template>
    <div id="detail">
            <v-headermine></v-headermine>
            <main id="mainT">
                <ul id="myTab" class="nav nav-tabs col-md-3">
                    <li class="active">
                        <router-link to="detail">
                            <a data-toggle="tab">模型demo</a>
                        </router-link>
                    </li>           
                    <li>
                        <router-link to="record">
                            <a data-toggle="tab">模型demo2</a>
                        </router-link>
                    </li>                 
                </ul>
                <div class="myTabContent col-md-9">
                    <div>
                        <v-detail></v-detail>
                    </div>
                </div>
            </main>
    </div>
</template>

<script>

import vHeadermine from '@/components/common/header_mine.vue'
import vDetail from '@/components/mine/detail_table'

export default {
  name: 'detail',
  data () {
    return {
        
    }
  },
  components: {
      vHeadermine,
      vDetail
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
