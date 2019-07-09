<template>
  <div class="pink_back">
    <div class="top">
      <div class="top_btn">
        <el-button type="primary" @click="log"> Log in</el-button>
        <el-button type="primary"  icon="el-icon-setting" @click="toSet"></el-button>
      </div>
    </div>
    <h1>Welcome to Fairy Kingdom</h1>
    <div class="content">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in storyList" :key="item.name">
          <h3>{{ item.name }}</h3>
          <div style="height:250px">
            <img :src="item.imgPath" style="width:300px;height:250px;opacity:0.7;">
          </div>
        </el-carousel-item>
      </el-carousel>
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
export default {
  name: 'MainHello',
  data () {
    return {
      storyList:[
        {name:"Daughter of the Sea",imgPath:"/static/img/seaDaughter.jpeg"},
        {name:"The Brave Tin Soldier",imgPath:"/static/img/soldier.jpg"},
        {name:"Thumbelina",imgPath:"/static/img/thumbelina.jpeg"},
        {name:"The Nightingale",imgPath:"/static/img/nightingale.jpg"},
        {name:"The Red Shoes",imgPath:"/static/img/redShoes.jpg"},
      ],
      dialogVisible:false,
      logForm:{},
      isLoginIn:false,
    }
  },
  methods:{
    toDetail(){
      this.$router.push({path:'/moreList'});
    },
    toSet(){
      this.$router.push({path:'/setUserInfo'});
    },
    log(){//点击登录按钮，跳出弹窗
      this.dialogVisible = true;
    },
    submitForm(form){
      this.$refs[form].validate((valid) =>{
        if(valid){
          this.isLoginIn = true;
          this.dialogVisible = false;
        }else{

        }
      });
    },
    cancel(form){
       this.$refs[form].resetFields();
       this.dialogVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.pink_back{
  width: 100%;
  height:calc(100% - 160px);
  padding-top: 40px;
  .top{
    height: 80px;
    position: relative;
    .top_btn{
      position: absolute;
      right: 150px;
      width:80px;
      display: flex;
      button {
        background:#553f2a;
        color:#fff;
        border:0;
      }
    }
  }
  .content{
    width: 600px;
    height: 400px;
    margin:20px auto;
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
