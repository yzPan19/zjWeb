<template>
    <div id="detailt2">
		<table id="table2" class="table table-bordered">
			<thead id="table2th">
				<tr>
					<th>发表内容</th>
					<th>发表人</th>
					<th>发表时间</th>                                  
				</tr>
			</thead>
			
			<tbody id="table2tb">
				<tr>
					<td>问题发起</td>
					<td>匿名用户</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>问题已确认，发至XXX整改</td>
					<td>张大帅</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>操作内容</td>
					<td>李小丑</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>操作内容</td>
					<td>王中军</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>操作内容</td>
					<td>操作人</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>操作内容</td>
					<td>操作人</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
				<tr>
					<td>操作内容</td>
					<td>操作人</td>
					<td>2017-08-23  8:30:36</td>
				</tr>
			</tbody>
		</table>
        
               
    </div>
</template>

<script>


export default {
    name: 'detailt2',
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
    #table2{
        width:100%;
        height:100%;
        background-color:rgb(49,59,69);
        color:white;
        border:1px solid rgb(36, 40, 51) !important; 
    }
    th{
        border:1px solid rgb(36, 40, 51) !important;   
		text-align:center;
    }
    td{
        border:1px solid rgb(36, 40, 51) !important;   
    }
    #table2th{
        background-color:rgb(55,61,77)
    }
    #table2th > tr{
        width:100%;
        height:5vh;
    }
    #tbdiv{
        width:100%;
        height:5vh;
        display:block;
    }
    
    
</style>
