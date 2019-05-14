<template>
    <div class="layout">
        <div class="containter">
            <h4>客户话费回馈活动</h4>
            <div class="nav-contents">
                <!-- 选择集团客户 -->
                <div class="form-group">
                    <label for="">选择集团客户</label>
                    <div class="nav-tabs">
                        <span @click="tab = 1" :class="'tab-list ' + (tab == 1 ? 'active' : '')">移动集团客户</span><!-- 
                        --><span @click="tab = 0" :class="'tab-list ' + (tab == 0 ? 'active' : '')">非移动集团客户</span>
                    </div>
                </div>
                <!-- 机构代码： -->
                <div class="form-group">
                    <label for="">机构代码</label>
                    <div class="form-content">
                        <input v-model="institution_code" placeholder="请输入机构代码" type="text" class="form-control">
                        <p class="err-tip" v-if="err_tip.key == 'institution_code'">{{err_tip.tip}}</p>
                    </div>
                </div>
                <!-- 营销人员工号 -->
                <div class="form-group">
                    <label for="">营销人员工号</label>
                    <div class="form-content">
                        <input v-model="marketing_number" placeholder="请输入营销人员工号" type="text" class="form-control">
                        <p class="err-tip" v-if="err_tip.key == 'marketing_number'">{{err_tip.tip}}</p>
                    </div>
                </div>
                <!-- 身份证号 -->
                <div class="form-group">
                    <label for="">身份证号</label>
                    <div class="form-content">
                        <input v-model="id_number" placeholder="请输入身份证号" type="text" class="form-control">
                        <p class="err-tip" v-if="err_tip.key == 'id_number'">{{err_tip.tip}}</p>
                    </div>
                </div>
                <!-- 客户就职单位名称 -->
                <div class="form-group">
                    <label for="">客户就职单位名称</label>
                    <div class="form-content">
                        <input :disabled="(tab == 0) ? true: false" v-model="company_name" placeholder="请输入客户就职单位名称" type="text" class="form-control">
                        <p class="err-tip" v-if="err_tip.key == 'company_name'">{{err_tip.tip}}</p>
                    </div>
                </div>

                <div class="line"></div>

                <!-- 手机号码 -->
                <div class="form-group phone-list">
                    <label for="">请添加手机号码&nbsp;|&nbsp;<a @click="addList" href="javascript:void(0);">添加</a>&nbsp;<span class="tip">(最多可添加4个手机号)</span></label>
                    <div v-for="(item, index) in phone_list" class="form-content">
                        <input v-model="item.phone_number" placeholder="请输手机号码" type="text" class="form-control">
                        <select v-model="item.proportion" class="form-control">
                            <option value="">请分配话费比例</option>
                            <template v-if="phone_list.length === 1">
                                <option value="100">100%</option>
                            </template>
                            <template v-else>
                                <option v-for="item2 in 100" :value="item2">{{item2}}%</option>
                            </template>
                        </select>
                        <span @click="delList(index)" class="btn btn-danger">删&nbsp;除</span>
                    </div>
                </div>

                <div class="line"></div>

            </div>
            <div class="btn-group">
                <span @click="submit" class="btn btn-submit">提&nbsp;交</span>
                <span @click="refresh" class="btn btn-refresh">重&nbsp;置</span>
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
        font-weight: 300;
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
        font-weight: 400;
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
    .form-control:disabled{
        background: #eee;
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
    .phone-list .form-content{
        overflow: hidden;
        margin-bottom: 15px;
    }
    .phone-list .form-content:last-child {
        margin-bottom: 0;
    }
    .phone-list input,
    .phone-list select,
    .phone-list .btn{
        float: left;
    }
    .phone-list input {
        position: relative;
        z-index: 1;
        width: 50%;
        border-radius: 2px 0 0 2px;
    }
    .phone-list select {
        width: 30%;
        /* margin-left: -3px;
        margin-right: -3px; */
        border-radius: 0;
        padding: 0 10px;
        /* appearance:none; */
        -moz-appearance:none;
        -webkit-appearance:none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -khtml-border-radius: 0;
        border-left: 0;
        border-right: 0;
    }
    .phone-list .btn {
        position: relative;
        z-index: 1;
        width: 20%;
        line-height: 38px;
        padding: 0;
        text-align: center;
        margin: 0;
        border-radius: 0 2px 2px 0;
    }
    .err-tip{
        margin-top: 5px;
        color: #d40303;
        font-size: 12px;
        letter-spacing: 1px;
    }
</style>
<script>
import FooterComponents from './footer.vue';
export default {
    components : {FooterComponents},
    data() {
        return {
            tab: 1, // 1 -> 移动集团用户 0 -> 非移动集团用户 默认 1
            phone_list: [], // 手机号列表 { phone_number: 1556770XXXX, proportion: 100 }
            institution_code: '', // 机构代码
            marketing_number: '', //营销人员工号
            id_number: '', // 身份证号 
            company_name: '',// 公司名称
            err_tip: { key: '', tip: ''},
        }
    },
    methods: {
        refresh() {
            [this.phone_list, this.institution_code, this.marketing_number, this.id_number, this.company_name, this.err_tip.key, this.err_tip.tip]
            =
            [[], '', '', '', '', '', ''];
        },
        addList() {
            // 最多不能超过4个手机号
            if( this.phone_list.length === 4 ) {
                alert('最多可添加4个手机号!');
                return;
            }
            // 如果是第一个 默认100%比例
            if( this.phone_list.length === 0 ) {
                this.phone_list.push({ phone_number: '', proportion: '100' });
            }
            else {
                this.phone_list.push({ phone_number: '', proportion: '' });
            }
        },
        delList(index) {
            this.phone_list.splice(index, 1);
        },
        submit() {

            const {err_tip, tab, phone_list, institution_code, marketing_number, id_number, company_name} = this;

            if (!institution_code.replace(/^ +| +$/, '')){
                [err_tip.key, err_tip.tip] = ['institution_code', '请填写机构代码！'];
                alert('情填写机构代码！');
                return;
            }

            if (!marketing_number.replace(/^ +| +$/, '')){
                [err_tip.key, err_tip.tip] = ['marketing_number', '请填写营销人员工号！'];
                alert('情填写营销人员工号！');
                return;
            }

            if (!id_number.replace(/^ +| +$/, '')){
                [err_tip.key, err_tip.tip] = ['id_number', '请填写身份证号码！'];
                alert('情填写身份证号码！');
                return;
            }

            if (!company_name.replace(/^ +| +$/, '') && tab === 1){
                [err_tip.key, err_tip.tip] = ['company_name', '请填写客户就职单位名称！'];
                alert('情填写客户就职单位名称！');
                return;
            }

            if(phone_list.length === 0) {
                alert('请至少填写一个手机号！');
                return;
            }

            let total = 0;
            for(let key of phone_list) {
                total += Number(key.proportion);
                if (!key.phone_number.replace(/^ +| +$/, '')) {
                    alert('请输入正确的手机号！');
                    return;
                }
            }

            if ( total !== 100 ) {
                alert('话费比例总和需要等于100%');
                return;
            }

            console.log(JSON.stringify({
                tab,
                phone_list,
                institution_code,
                marketing_number,
                id_number,
                company_name,
            }));

            this.$.post('/')
            .then(result => console.log(result))
            .catch(err => alert('后台错误！请稍后重试……'));
        }
    },
    watch: { 
        tab() {
           this.refresh();
        },

        phone_list: {
            handler () {
                if (this.phone_list.length === 1) {
                    this.phone_list[0].proportion = '100';
                }
            },
            deep: true,
        },

    }
}
</script>

