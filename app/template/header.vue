<template>
    <div class="header">
        <div class="logo"><img :src="logo" alt=""></div>
    </div>
</template>
<style scoped>
    .header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #252B3A;
        height: 60px;
        padding: 0 30px;
        border-bottom: 1px solid #000;
        box-shadow: 0 0 8px #252B3A;
        z-index: 2;
    }
    .header .logo{
        height: 38px;
        margin-top: 11px;
    }
    .header .logo img{
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