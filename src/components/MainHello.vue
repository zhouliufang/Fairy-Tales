<template>
  <div class="pink-back">
    <div class="input-verify">
      <el-input v-model="inputVerify">
        <el-button slot="append" icon="el-icon-menu" @click="enterTask"></el-button>
      </el-input>
      <div>
        验证码：111 特工权限 <br />
        验证码：123 管理员权限 <br />
        验证码：其他  游客权限
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations} from "vuex";

export default {
  name: "verify",
  data() {
    return {
      inputVerify:'',
    };
  },
  methods:{
    ...mapMutations([
      'setRole'
    ]),
    enterTask(){
      //验证编号密码
      // 验证码：111 特工权限 
      // 验证码：123 管理员权限
      // 验证码：其他  游客权限
      if(this.inputVerify == '111'){
        this.setRole('agent');
      }else if(this.inputVerify == '123'){
        this.setRole('admin');
      }else{
        this.setRole('tourist');
      }

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
  color: white;
  .input-verify{
    width:50%;
    height:50px;
    margin:auto;
  }
}
</style>
