<template>
    <div id="involution">
            <v-headerh></v-headerh>
            <main id="main">
                <button id="goDetails" @click="pathdetails">goToDetails</button>
            </main>
            
            <v-footer></v-footer>
            
    </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script>


import vHeaderh from '@/components/common/header_home.vue'
import vFooter from '@/components/common/footer.vue'
import vInvolution from '@/components/home/involution_table'
import vInvolutionD from '@/components/home/involution_detail'

export default {
    name: 'involution',
    data () {
        return {
            
        }
    },
    mounted(){
        $("#involutionD").css('display','none')
    },
    methods:{
        pathdetails(){
            // this.$router.push({ path: '/home/details' })
            window.open(window.location.origin + '/#/home/details')
        }
    },
    components: {
        vHeaderh,
        vFooter,
        vInvolution,
        vInvolutionD
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

    #goDetails{
        width:9vw;
        height:5vh;
        border:1px solid gray;
        margin-top:5vh;
    }
</style>
