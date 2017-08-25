<template>
    <div id="fankuiTable">
        <div class="tab-pane">
            <table class="table table-bordered">
                <tr>
                    <th class="col-md-3">具体内容</th>
                    <th class="col-md-3">调度人员</th>
                    <th class="col-md-3">提示时间</th>
                    <th class="col-md-3">筛选</th>
                </tr>
                <tr>
                    <td>详细的任务内容</td>
                    <td>陈晓升</td>
                    <td>2017-5-22 17:25:11</td>
                    <td><a>编辑</a></td>
                </tr>
                <tr>
                    <td>详细的任务内容</td>
                    <td>陈晓升</td>
                    <td>2017-5-22 17:25:11</td>
                    <td><a>编辑</a></td>
                </tr>
                <tr>
                    <td>详细的任务内容</td>
                    <td>陈晓升</td>
                    <td>2017-5-22 17:25:11</td>
                    <td><a>编辑</a></td>
                </tr>
                <tr>
                    <td>详细的任务内容</td>
                    <td>陈晓升</td>
                    <td>2017-5-22 17:25:11</td>
                    <td><a>编辑</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>


export default {
  name: 'fankuiTable',
  data () {
    return {
        
    }
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
</style>
