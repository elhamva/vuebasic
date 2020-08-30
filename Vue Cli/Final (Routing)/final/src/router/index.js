import { createRouter, createWebHistory } from 'vue-router'
import addBlog from '../views/addBlog.vue'
import showBlog from '../views/showBlog.vue'
import listBlog from '../views/listBlog.vue'

const routes = [{
        path: '/',
        name: 'addBlog',
        component: addBlog
    },
    {
        path: '/showBlog',
        name: 'showBlog',
        component: showBlog
    },
    {
        path: '/listBlog',
        name: 'listBlog',
        component: listBlog
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router