<template>
    <div class="layout">
        <div class="containter">
            <h4>客户话费回馈活动</h4>
            <div class="nav-contents">
                <!-- 选择集团客户 -->
                <div class="form-group">
                    <label for="">选择集团客户</label>
                    <div class="nav-tabs">
                        <span class="tab-list active">移动集团客户</span><!-- 
                        --><span class="tab-list">非移动集团客户</span>
                    </div>
                </div>
                <!-- 机构代码： -->
                <div class="form-group">
                    <label for="">机构代码</label>
                    <div class="form-content">
                        <input placeholder="请输入机构代码" type="text" class="form-control">
                    </div>
                </div>
                <!-- 营销人员工号 -->
                <div class="form-group">
                    <label for="">营销人员工号</label>
                    <div class="form-content">
                        <input placeholder="请输入营销人员工号" type="text" class="form-control">
                    </div>
                </div>
                <!-- 身份证号 -->
                <div class="form-group">
                    <label for="">身份证号</label>
                    <div class="form-content">
                        <input placeholder="请输入身份证号" type="text" class="form-control">
                    </div>
                </div>
                <!-- 客户就职单位名称 -->
                <div class="form-group">
                    <label for="">客户就职单位名称</label>
                    <div class="form-content">
                        <input placeholder="请输入客户就职单位名称" type="text" class="form-control">
                    </div>
                </div>

                <div class="line"></div>

                <!-- 手机号码 -->
                <div class="form-group phone-list">
                    <label for="">请添加手机号码&nbsp;|&nbsp;<a href="javascript:void(0);">添加</a>&nbsp;<span class="tip">(最多可添加4个手机号)</span></label>
                    <div class="form-content">
                        <input placeholder="请输手机号码" type="text" class="form-control">
                        <select class="form-control">
                            <option value="">请分配话费比例</option>
                        </select>
                        <span class="btn btn-danger">删&nbsp;除</span>
                    </div>
                </div>

                <div class="line"></div>

            </div>
            <div class="btn-group">
                <span class="btn btn-submit">提&nbsp;交</span>
                <span class="btn btn-refresh">重&nbsp;置</span>
            </div>
        </div>
        <footer-components></footer-components>
    </div>
</template>
<style scoped>
    h4{
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
        font-size: 26px;
    }
    .layout{
        position: relative;
        padding-top: 170px;
        height: 100%;
        background: url(../image/authbackground.jpg) 0 0 no-repeat;
        background-size: 100% 100%;
        /* margin-top: -90px; */
    }
    .layout .containter{
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
        padding: 50px 300px;
        width: 980px;
        background: #fff;
        box-shadow: 0 0 8px #ddd;
        border-radius: 4px;
        min-height: 100%;
        margin-top: -90px;
    }
    .nav-tabs .tab-list{
        display: inline-block;
        height: 32px;
        line-height: 30px;
        padding: 0 16px;
        font-size: 14px;
        color: #495060;
        transition: all .2s ease-in-out;
        cursor: pointer;
        border: 1px solid #dddee1;
        background: #fff;
        position: relative;
        margin-right: -1px;
    }
    .nav-tabs .tab-list.active {
        border: 1px solid #2d8cf0;
        color: #2d8cf0;
        z-index: 1;
    }

    .form-group{
        margin-bottom: 25px;
    }
    .form-group label{
        position: relative;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        display: inline-block;
        font-weight: 100;
        padding-left: 10px;
        letter-spacing: 1px;
    }
    .form-group label::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0px;
        background: #2d8cf0;
        width: 3px;
        height: 15px;
    }
    .form-group label a{
        color: #2d8cf0;
        text-decoration: none;
    }
    .form-group label a:hover{
        text-decoration: underline;
    }

    .form-control{
        box-shadow: 0 1px 1px 0 #f6f6f6 inset;
        border: 1px solid #ccc;
        background-color: #fff;
        padding: 0 10px;
        outline: none;
        vertical-align: middle;
        border-radius: 2px;
        height: 40px;
        width: 100%;
    }
    .btn-group{
        text-align: center;
        margin-top: 20px;
    }
    .btn{
        padding: 0 24px;
        line-height: 34px;
        display: inline-block;
        color: #fff;
        margin: 0 3px;
        border-radius: 3px;
        cursor: pointer;
    }
    .btn-submit{
        background: #2d8cf0;
        border: #0063ce;
    }
    .btn-submit:hover{
        background: #0a79f0;
    }

    .btn-refresh{
        background: #caa755;
        border: #c28800;
    }
    .btn-refresh:hover{
        background: #ce9c28;
    }
    .btn-danger{
        background: #F3565D;
        border: 1px solid #f13e46;
    }
    .btn-danger:hover{
        background: #f1353d;
        border: 1px solid #ec111b;
    }


    .line{
        margin-bottom: 25px;
        border-top: 1px dashed #ccc;
    }

    .tip{
        font-size: 12px; 
        color: #999;
    }
    .phone-list{
        overflow: hidden;
    }
    .phone-list input,
    .phone-list select,
    .phone-list .btn{
        float: left;
    }
    .phone-list input {
        width: 40%;
        border-radius: 2px 0 0 2px;
    }
    .phone-list select {
        width: 40%;
        border-radius: 0;
        border-left: 0;
        border-right: 0;
    }
    .phone-list .btn {
        width: 20%;
        line-height: 38px;
        padding: 0;
        text-align: center;
        margin: 0;
        border-radius: 0 2px 2px 0;
    }
</style>
<script>
import FooterComponents from './footer.vue';
export default {
    components : {FooterComponents}
}
</script>

