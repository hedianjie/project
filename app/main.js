import './style/reset.css';
import './style/global.css';

import Vue from 'vue';
import axios from 'axios';
import HeaderComponents from './template/header.vue';
import ContainterComponents from './template/containter.vue';

Vue.prototype.$ = axios;

new Vue({
    el: '#app',
    components: { HeaderComponents, ContainterComponents }
})
