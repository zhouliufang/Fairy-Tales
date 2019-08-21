<template>
  <div class="main-task">
    <div class="head-task">
        您有一个新任务待查收
        <el-tooltip content="历史任务" placement="top">
            <i class="el-icon-tickets" style="position:absolute;right:20px;top:10px;"></i>
        </el-tooltip>
    </div>
    <div class="task-list"></div>
  </div>
</template>

<script>
export default {
  name: "verify",
  data() {
    return {
      inputVerify:'',
    };
  },
  methods:{
    enterTask(){
      //验证编号密码

      //通过进入主页
    },
  }
};
</script>

<style lang="scss" scoped>
.main-task{
    .head-task{
        width: calc(100% - 40px);
        margin: 20px;
        border: 1px solid #fff;
        border-radius: 20px;
        height:30px;
        color: #fff;
        font-size: 20px;
        padding: 5px 0;
        position: relative;
    }
    .task-list{
        
    }
}
</style>
