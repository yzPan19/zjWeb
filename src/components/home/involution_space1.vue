<template>
    <div id="involution">
		<div id="spaceArea">
			<div id="top">
				<div id="section">A1标段</div>
			</div>
			<div id="Bim">
        
            </div>
		</div>
    </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script>




export default {
    name: 'involution',
    data () {
        return {
           
        }
    },
    mounted(){
       
    },
    methods:{
        
    },
    components: {
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #spaceArea{
		width:18vw;
		height:10.08vw;
	}
	#top{
		width:100%;
		height:3.1vh;
		background-color:rgb(0,72,151);
		display:flex;
		justify-content:center;
	}
	#section{
		width:31%;
		height:3.1vh;
		background-color:rgb(249,191,17);
		text-align:center;
		line-height:3.1vh;
	}
	#Bim{
        width:100%;
        height:16.8vh;
		border:1px solid rgb(3,160,214);
        background-color:gray;
    }
</style>
