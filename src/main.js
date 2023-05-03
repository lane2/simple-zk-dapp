import Vue from 'vue'

import Button from 'ant-design-vue/lib/button';
import Input from 'ant-design-vue/lib/input';
import Divider from 'ant-design-vue/lib/divider';

import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Input.name, Input );
Vue.component(Divider.name, Divider );

new Vue({
  render: h => h(App),
}).$mount('#app')