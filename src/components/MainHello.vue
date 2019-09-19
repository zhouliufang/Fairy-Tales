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
    <el-button style="width:600px;background:#553f2a;color:#fff;border:0;font-size:18px;" @click="toDetail">
       More
    </el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <el-form label-position="left"  ref="logForm" label-width="100px" :model="logForm">
        <el-form-item label="User name:" prop="name" required>
          <el-input size="small" v-model="logForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Password:" prop="password" required>
          <el-input  size="small" v-model="logForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel('logForm')" size="small">Cancel</el-button>
        <el-button type="primary" @click="submitForm('logForm')" size="small">OK</el-button>
      </span>
    </el-dialog>
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
.el-carousel__item{
   background-color: rgba($color: #fff, $alpha: 1);
  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
} 


</style>
