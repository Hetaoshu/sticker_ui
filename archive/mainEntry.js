import Vue from 'vue';
import entry from './app.vue';
import VueRouter from 'vue-router';
import routes from './archive_router';
import ArchiveHeader from './components/header';
import ArchiveFooter from './components/footer';
Vue.component('archive-header',ArchiveHeader)
Vue.component('archive-footer',ArchiveFooter)

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,    
    routes
  });
new Vue({
    router,
    ...entry
}).$mount('#app');