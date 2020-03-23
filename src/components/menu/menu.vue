<template>
    <div class="menu">
        <div class="show-menu">
            <el-button @click="() => {drawer=true;}">
                菜<br />单
            </el-button>
        </div>
        <!-- <div class="main-content">
            <div class="content"></div>
            <div class="content"></div>
        </div> -->
        <el-drawer
            title="菜单"
            :visible.sync="drawer"
            direction="ltr"
            :before-close="handleClose">
            <div style="menu-list">
                <div v-for="item in menuList" :key="item.id" style="margin: 0 10px 20px 30px;" @click="clickMenu(item)">
                    <el-card class="menu-item" shadow="hover">
                        {{item.menuName}}
                    </el-card>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
export default {
    data() {
        const menuList = [{
            menuName: '任务界面',
            menuCode: 'task',
            path:'/MainTask',
        },{
            menuName: '个人信息',
            menuCode: 'info',
            path:'/PersonalInfo',
        },{
            menuName: '申请协助',
            menuCode: 'help',
            path:'',
        },{
            menuName: '上传报告',
            menuCode: 'report',
            path:'',
        }];
        const adminMenuList = [{
            menuName: '人员管理',
            menuCode: 'manage',
            path:'',
        },{
            menuName: '发布任务',
            menuCode: 'publish',
            path:'',
        },{
            menuName: '审核请求',
            menuCode: 'audit',
            path:'',
        }];
        return {
            drawer: false,
            menuList: [],
            adminMenuList: adminMenuList,
            agentMenuList: menuList,
        }
    },
    computed: {
        role(){
            return this.$store.state.role;
        }
    },
    methods: {
        getMenu(){//得到菜单
            this.menuList = this.role === 'agent' ? this.adminMenuList : this.agentMenuList;
        },
        clickMenu(menuItem){//点击菜单
            if(menuItem.path){
                this.$router.push({path:menuItem.path});
            }
        },
        handleClose(){//关闭菜单侧边栏
            this.drawer = false;
        }
    },
    mounted(){
        this.getMenu();
    }
}
</script>
<style lang="scss" scoped>
.menu {
    position: relative;
    height: 100%;
    .show-menu {
        position: absolute;
        top: calc(50% - 20px);
        left: 0;
        button {
            color:white;
            background:black;
            box-shadow: 2px 2px #c2bcbcab;
            border-left: 0px;
            width:80px;
            height:200px;
            font-size:20px;
            font-weight: bold;
            line-height: 26px;
        }
    }
    .menu-list {
        width: 200px;
        .menu-item {
            cursor: pointer;
        }
    }
    .main-content{
        height:100%;
        margin-left: 120px;
        .content{
            border: 1px solid #fff;
            width: 80%;
            height: 40%;
            margin-top:5%;
        }
    }
}
</style>
<style lang="scss">
.el-drawer {
    background: #000;
    color: white;
}
.el-drawer__header {
    color: #fff;
}
.el-card {
    background: #000;
    color: white;
    border: 1px dashed white;
}
</style>