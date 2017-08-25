<template>
    <div id="footer">
		
        <div id="footerDiv">
			<p id="footerText">©️中交(厦门)信息有限公司 版权所有</p>
		</div>
               
    </div>
</template>

<script>


export default {
    name: 'footer',
    data () {
        return {
            
        }
    },
    components: {

    },
    mounted(){
        
    },
    methods:{
        
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #footerDiv{
		width:100%;
		height:4.3vh;
		background-color:rgb(61,94,108);
		position:fixed;
		bottom:0px;
	}
    #footerText{
		color:white;
		line-height:4.3vh;
	}
    
</style>
