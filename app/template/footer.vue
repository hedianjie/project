<template>
    <div class="footer">
        <div class="footer-containter">
            <div class="footer-layout">
                <div class="logo"><img :src="logo" alt=""></div>
            </div>
            <div class="footer-layout">
                <p>www.spdb.com.cn</p>
                <p>服务热线：95528</p>	
            </div>
            <div class="footer-layout">
                <p>
                    <a href="https://www.spdb.com.cn/ebankinfo/law/">法律声明</a>&nbsp;|&nbsp;
                    <a href="https://www.spdb.com.cn/website_navigation/">网站导航</a>&nbsp;|&nbsp;
                    <a class="hs_a" href="https://www.spdb.com.cn/ebankinfo/link/">友情链接</a>
                </p>
                <p>沪ICP备05022859</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .footer{
        margin-top: 20px;
        height: 70px;
        background: #252B3A;
    }
    .footer-containter{
        overflow: hidden;
        width: 980px;
        height: 100%;
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 11px 0;
    }
    .footer-layout{
        float: left;
        width: 33.333333333%;
        height: 100%;
        font-size: 12px;
        color: #C3C5C6;
        line-height: 20px;
    }
    .footer-layout a{
        color: #999;
        cursor: pointer;
        text-decoration: none;
    }
    .logo{
        height: 100%;
    }
    .logo img{
        display: block;
        width: auto;
        height: 100%;
    }
</style>
<script>
    export default {
        data() {
            return { logo: './app/image/logobg.png' }
        }
    }
</script>