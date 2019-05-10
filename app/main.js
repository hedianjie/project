import './style/reset.css';
import './style/global.css';

import Vue from 'vue';
import HeaderComponents from './template/header.vue';
import ContainterComponents from './template/containter.vue';

new Vue({
    el: '#app',
    components: { HeaderComponents, ContainterComponents }
})
