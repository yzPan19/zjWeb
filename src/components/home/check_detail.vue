<template>
    <div id="checkDetail">
            <v-headerh></v-headerh>
            <main>
                <ul id="myTab" class="nav nav-tabs col-md-3">
                    <li class="active">
                        <router-link to="check">
                            <a data-toggle="tab">待审核</a>
                        </router-link>
                    </li>           
                    <li>
                        <router-link to="rectify">
                            <a data-toggle="tab">待整改</a>
                        </router-link>
                    </li>                
                    <li>
                        <router-link to="accept">
                            <a data-toggle="tab">待验收</a>
                        </router-link>
                    </li>        
                    <li>
                        <router-link to="involution">
                            <a data-toggle="tab">未复归</a>
                        </router-link>
                    </li> 
                </ul>
                <div class="myTabContent col-md-9">
                    <div>
                        <div id="involutionDetail"> 
                            <td class="col-md-12">
                                <el-row>
                                    <el-col :span="8" :key="o" :offset="index > 0 ? 2 : 0">
                                        <el-card :body-style="{ padding: '0px' }">
                                        <img src="/../static/img/test1.jpeg" class="image">
                                        <div style="padding: 14px;">
                                            <p class="message">描述详情:</p>
                                            <br>
                                            <div class="bottom clearfix">
                                                <p class="time">上传时间：</p>
                                                <el-button type="text" @click="dialogFormVisible = true" class="button">操作按钮</el-button>
                                            </div>    
                                        </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </td>   
                        </div>
                    </div>  
                </div>
                
            </main>
            <el-dialog title="审核反馈" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="处理方式:" :label-width="formLabelWidth">
                            <el-select id="selectInput" v-model="form.region" placeholder="请选择处理方式">
                                <el-option label="关闭问题" value="close"></el-option>
                                <el-option label="问题探讨" value="discuss"></el-option>
                                <el-option label="发起整改" value="rectify"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item id="textInput" label="审核备注:" :label-width="formLabelWidth">
                            <el-input v-model="form.text" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
            </el-dialog>
    </div>
</template>

<script>

import vHeaderh from '@/components/common/header_home.vue'
// import vInvolutionD from '@/components/home/involution_detail'

export default {
    name: 'checkDetail',
    data () {
        return {
            dialogFormVisible: false,
            form: {
                text: '',
                region: '',
                date1: '',
                date2: '',
                date3: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    
    mounted(){
        
    },
    methods:{

    },
    components: {
        vHeaderh,
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
        text-align: left;
        border:1px solid #ddd;
        height:35px;
    }


    #selectInput{
        float:left;
        width:100%;
    }
    #textInput{
        width:100%;
    }


    #involutionDetail{
        margin:0 auto;
        margin-top:25px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .message{
        float:left;
    }
    .time {
        font-size: 13px;
        color: #999;
        float:left
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    
    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>