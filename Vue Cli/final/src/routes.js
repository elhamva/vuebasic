import addBlog from './component/addBlog.vue';
import showBlogs from './component/ShowBlog.vue';
import singleBlog from './component/singleBlog.vue';

export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    { path: '/blog/:id', component: singleBlog }
]