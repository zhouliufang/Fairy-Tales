<!-- 游客界面 -->
<template>
    <div class="guest">
        <div class="head">
            <el-tooltip content="退出" placement="top">
                <i style="font-size:24px;" class="el-icon-lollipop" @click="logOut"></i>
            </el-tooltip>
        </div>


        <h2>欢迎来到美丽的比奇堡</h2>
        <div class="tip">
            游玩指南：<br />
                著名景点： 水母田 <br />

                美味餐厅： 蟹黄堡 <br />

        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {}
    },
    methods: {
        ...mapActions([
            "setRoleAction",
        ]),
        logOut(){
            this.setRoleAction('');
            this.$router.push({path:'/MainHello'});
        }
    }

}
</script>
<style lang="scss" scoped>
.guest{
    color: white;
    position: relative;
    height : 100%;
    //background: 
    .head{
        display: flex;
        position: absolute;
        right: 20px;
    }
    .tip{

    }
}
</style>