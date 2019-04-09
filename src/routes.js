import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'

export default [
    {
        path:'/',
        component:ShowBlogs
    },
    {
        path:'/add',
        component:AddBlog
    },
    {
        path:'/blog/:id', //后面的是路由参数
        component: SingleBlog
    },
    {
        path:'/edit/:id', //后面的是路由参数
        component: EditBlog
    }
]