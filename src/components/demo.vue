<template>
    <div class="sum-list">
        <div class="auto-move">
            <div class="inner-text">
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.sum-list {
    .auto-move {//消息轮播效果
        height: 20px;
        width: 100px;
        overflow: hidden;
        position: relative;
        .inner-text {
            height:170px;
            position: absolute;
            animation: upto 10s infinite;
            left: 0px;
            top: 0px;
        }
    }
    @-webkit-keyframes upto {
        0% {
            top: 0px;
        }
        100% {
            top: -170px;
        }
    }
    @keyframes upto {
        0% {
            top: 0px;
        }
        100% {
            top: -170px;
        }
    }
}
</style>