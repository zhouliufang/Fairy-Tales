<template>
    <div class="info">
        <div class="left-info">
            <table class="table-info">
                <tr>
                    <td>代号</td>
                    <td>海星星</td>
                    <td>照片</td>
                    <td></td>
                </tr>
                <tr>
                    <td>身高</td>
                    <td>38</td>
                    <td>体重</td>
                    <td>11</td>
                </tr>
                <tr><td>特长</td><td colspan="3"></td></tr>
                <tr><td>爱好</td><td colspan="3"></td></tr>
                <tr><td rowspan="2" colspan="4"></td></tr>
            </table>
        </div>    
        <div class="right-info">
        </div>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.info{
    display: flex;
    color:#fff;
    .left-info{
        width: 45%;
        margin-right: 10%;
        .table-info {
            background: #0000008c;
            width: 100%;
            height: 100%;
            margin-top: 10px;
            border: 1px solid #fff;
            border-collapse: collapse;
            table-layout: fixed;
            td {
                border: 1px solid #fff;
                height: 50px;
                box-sizing: border-box;
                padding: 2px;
                margin: 0;
                text-align: center;
                font-size: 14px;
                word-wrap: break-word;
                font-weight: bold;
            }
        }
    }
    .right-info{
        width: 45%;
        height: 100%;
        border: 1px solid #fff;
    }
}
</style>