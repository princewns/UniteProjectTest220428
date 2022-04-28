import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '../views/MemoList.vue'
import Write from '../views/WriteForm.vue'
import ListPage from '../views/PageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MemoList',
    component : MemoList
  },
  {
    path : '/write',
    name : 'write',
    component : Write
  },
  {
    path : '/list/:id',
    name : 'listPage',
    component : ListPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
