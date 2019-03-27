<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">Detail</el-button>
            </div>
            <div  class="text item">
                
            </div>
        </el-card>
    </div>
    
</template>
<script>

export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
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
    }
</style>

