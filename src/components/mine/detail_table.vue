<template>
    <div id="detailTable">
        <!--
        <div class="tab-pane">
            <table class="table table-bordered">
                <tr>
                    <th class="col-md-3">姓名</th>
                    <th class="col-md-3">性别</th>
                    <th class="col-md-3">所在部门</th>
                    <th class="col-md-3">&nbsp;</th>
                </tr>
                <tr>
                    <td>陈晓升</td>
                    <td>男</td>
                    <td>技术部</td>
                    <td><a>修改</a></td>
                </tr>
            </table>
        </div>
        -->


        <div class="easyui-layout" data-options="fit:true">
            

            <div id="treeWrapDiv" data-options="region:'west',split:true,minWidth:260,collapsible:false" style="width: 260px;">
                <div id="pmTree"></div>
                <div id="treeModal"></div>
            </div>

            <div id="earthWrapDiv" data-options="region:'center'">
                <div id="freedocontainer" style="height: 100%;"></div>
            </div>

            <div id="ajaxModal">
                <div class="wrap-wait">
                    <div>数据装载中，请稍后 <img src="http://182.92.7.32:9510/ProjectManage/resources/common/img/wait.gif" style="display:inline-block;width:20px;height:20px;"></div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<link rel="stylesheet" type="text/css" href="http://182.92.7.32:9510/ProjectManage/resources/common/js/jquery-easyui-1.4.5/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="http://182.92.7.32:9510/ProjectManage/resources/common/js/jquery-easyui-1.4.5/themes/icon.css" />

<link rel="stylesheet" type="text/css" href="http://182.92.7.32:9510/ProjectManage/resources/common/css/FreeDoBase.css"/>
<link rel="stylesheet" type="text/css" href="../../assets/css/pm.css/">

<link href="http://gbim360.com:9999/projects/FreedoGBIM360/1.0.0-alpha.170626/FreeDo/Widgets/widgets.css" rel="stylesheet">
<script src="http://gbim360.com:9999/projects/FreedoGBIM360/1.0.0-alpha.170626/FreeDo/FreeDo.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/lodash.js/4.17.4/lodash.min.js"></script>
<script src="http://gbim360.com:9999/projects/FreedoGBIM360/1.2.0-beta.170808/API/FreedoX.js"></script>

<script type="text/javascript" src="http://182.92.7.32:9510/ProjectManage/resources/common/js/jquery-easyui-1.4.5/jquery.min.js"></script>
<script type="text/javascript" src="http://182.92.7.32:9510/ProjectManage/resources/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script type="text/javascript" src="http://182.92.7.32:9510/ProjectManage/resources/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="../../assets/js/init.js"></script>


<script>


export default {
  name: 'detailTable',
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
