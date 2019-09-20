<template>
    <div class="menu">
        <div class="show-menu">
            <el-button>
                打<br />开<br />菜<br />单
            </el-button>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
export default {
    
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
}
</style>