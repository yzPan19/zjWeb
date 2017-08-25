<template>
    <div id="checkTable">
        <div class="tab-pane" id="fankui">
            <table id="table2" class="table table-bordered">
               
            </table>
            
        </div>
    </div>
</template>

<script>


export default {
    name: 'checkTable',
    data () {
        return {
            
        }
    },
    mounted(){
        
        $(".confirmBtn").each(function(){
            $(this).click(function(){
                $(this).parent().children(".check").append("")
            })
            
        });
        $(".confirmBtn").on("click",function(){
            var check = $(this).parent().children(".check")
            if(check.children().length>0){
                check.children().remove();	
            }else{
                check.append("<img style='width:40%;' src='../../../static/img/check.png'>");	
            }
        })
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
        margin-right:10px;
    }
</style>
