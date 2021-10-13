import Vue from 'vue';
import entry from './app.vue';
import VueRouter from 'vue-router';
import routes from './archive_router';
import ArchiveHeader from './components/header';
import ArchiveFooter from './components/footer';
// import './utils/remFn';
import sticker from '../lib/element-ui.common';
import  '../lib/theme-chalk/index.css';
Vue.component('archive-header',ArchiveHeader)
Vue.component('archive-footer',ArchiveFooter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
Vue.use(sticker);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,    
    routes
  });

new Vue({
    router,
    ...entry
}).$mount('#app');