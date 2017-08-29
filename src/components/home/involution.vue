<template>
    <div id="involution">
            <v-headerh></v-headerh>
            <main id="main">
                <el-button @click="menu" id="dropdownBtn" type="primary" >
                    更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <v-collapse id="collapse"></v-collapse>
                
                <div id="Bim">

                </div>
            </main>
            <div id="spaceArea">
                <v-space1 class="space"></v-space1>
                <div class="wrap"></div>
                <v-space2 class="space"></v-space2>
                <div class="wrap"></div>
                <v-space3 class="space"></v-space3>
                <div class="wrap"></div>                
                <v-space4 class="space"></v-space4>
            </div>
            <v-footer></v-footer>
            
    </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script>


import vHeaderh from '@/components/common/header_home.vue'
import vFooter from '@/components/common/footer.vue'
import vInvolution from '@/components/home/involution_table'


import vCollapse from '@/components/home/involution_collapse'
import vSpace1 from '@/components/home/involution_space1'
import vSpace2 from '@/components/home/involution_space2'
import vSpace3 from '@/components/home/involution_space3'
import vSpace4 from '@/components/home/involution_space4'

export default {
    name: 'involution',
    data () {
        return {
           
        }
    },
    mounted(){
        $("#involutionD").css('display','none')
        $("#collapse").css("display","none")
        // $(function() {
        //     $( "#accordion" ).accordion();
        // });
    },
    methods:{
        pathdetails(){
            // this.$router.push({ path: '/home/details' })
            window.open(window.location.origin + '/#/home/details')
        },
        menu(){
            $("#collapse").css("display","block")
        }
    },
    components: {
        vHeaderh,
        vFooter,
        vInvolution,
        vCollapse,
        vSpace1,
        vSpace2,
        vSpace3,
        vSpace4
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        background-color: rgb(242, 242, 242) !important
    } 
    main {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        flex-direction:column;
        position:absolute;
        top:75px
    }
    #dropdownBtn{
        width:9vw;
        position:absolute;
        margin-top:3vh;
        left:3vw;
    } 
    #spaceArea{
        display:flex;
        flex-direction:column;
        align-items:flex-end; 
        position:absolute;
        margin-top:9vh; 
        right:3vw;      
    }
    .space{
        float:right;
        margin-top:1vh;
    }
    .wrap{
        height:2vh;
    }
</style>
