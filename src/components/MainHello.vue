<template>
  <div class="pink-back">
    <div class="input-verify">
      <el-input v-model="inputVerify">
        <el-button slot="append" icon="el-icon-menu" @click="enterTask"></el-button>
      </el-input>
    </div>
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
      this.$router.push({path:'/MainTask'});
    },
  }
};
</script>

<style lang="scss" scoped>
.pink-back {
  width: 100%;
  height: 100%;
  display: flex;
  .input-verify{
    width:50%;
    height:50px;
    margin:auto;
  }
}
</style>
