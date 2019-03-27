<template>
  <div class="pink_back">
    <div class="top">
      <el-button type="primary" class="top_btn" icon="el-icon-more" @click="toSet"></el-button>
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
    }
  },
  methods:{
    toDetail(){
      this.$router.push({path:'/moreList'});
    },
    toSet(){
      this.$router.push({path:'/setUserInfo'});
    },
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
      right: 80px;
      width:80px;
      background:#553f2a;
      color:#fff;
      border:0;
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
