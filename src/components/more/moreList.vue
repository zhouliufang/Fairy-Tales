<template>
    <div>
        <div class="top">
             <el-button  class="top_btn" >Detail</el-button>
             <el-button  class="top_btn" >Detail</el-button>
             <el-button  class="top_btn" style="margin-right: 0;">Detail</el-button>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Daughter of the Sea</span>
                <el-button style="float: right; padding: 3px 0;color:#fff;" type="text">Detail</el-button>
            </div> 
            <div  class="text item">
                <p>... ...</p>
            </div>
        </el-card>
    </div>
    
</template>
<script>

export default {
    data(){
        return{
            storyList:[],
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .top{
        margin-bottom: 20px;
        text-align:left;
        .top_btn{
            background: #1b98d6;
            color:#fff;
            margin-right: 270px;
        }
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 800px;
        background: #1b98d6;
        color: #fff;
    }
</style>

