<template>
    <div id="involutionTable">
            <table id="table" class="table table-bordered">
                
            </table>
    </div>
</template>

<script>


export default {
    name: 'involutionTable',
    data () {
        return {
            
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        background-color: rgb(242, 242, 242) !important
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
    #tableDetail tr>td{
        text-align: left;
        border:1px solid #ddd;
        height:35px;
    }
</style>
