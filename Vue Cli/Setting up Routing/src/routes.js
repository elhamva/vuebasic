import listBlog from './component/listBlog.vue';
import showBlog from './component/ShowBlog.vue';

export default [
    { path: '/', component: showBlog },
    { path: '/list', component: listBlog }
]