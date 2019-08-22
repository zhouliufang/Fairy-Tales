<template>
  <div class="main-task">
    <div class="head-task">
      您有两个新任务待查收
      <el-tooltip content="历史任务" placement="top">
        <i class="el-icon-tickets" @click="toHistory"
          style="position:absolute;right:20px;top:10px;"></i>
      </el-tooltip>
    </div>
    <div class="task-list">
      <div class="task-content" v-for="task in taskList" :key="task.id" @click="toTarget(task.id)">
        {{task.typeName}} 任务目标：{{task.target}}
        <img :src="task.img" style="display:block;height:80%;margin:15px auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "verify",
  data() {
    return {
      inputVerify: "",
      taskList:[{
        id:111,
        taskType:'investigate',
        typeName:'击杀',
        target:'海绵宝宝',
        status:'new',
        img:'../../../static/img/SpongeBob.jpg'
      },{
        id:222,
        taskType:'kill',
        typeName:'调查',
        target:'派大星',
        status:'new',
        img:'../../../static/img/pai.jpg'
      }],
    };
  },
  methods: {
    toHistory() {
      this.$router.push({path:'/HistoryTask'});
    },
    toTarget(target){
      this.$router.push({path:'/TaskDetail',query:{target:target}});
    }
  }
};
</script>

<style lang="scss" scoped>
.main-task {
  .head-task {
    width: calc(100% - 40px);
    margin: 20px;
    border: 1px solid #fff;
    border-radius: 20px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    padding: 5px 0;
    position: relative;
  }
  .task-list {
    display: flex;
    .task-content {
      width: calc(50% - 40px);
      margin: 20px;
      border: 1px solid #fff;
      border-radius: 20px;
      height: 400px;
      color: rgb(75, 8, 8);
      text-shadow: 0 0 2px rgb(75, 8, 8);
      font-size: 20px;
      padding: 5px 0;
      position: relative;
      background: rgba($color: #fff, $alpha: 0.8)
    }
  }
}
</style>
