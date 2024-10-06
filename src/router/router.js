import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue"
import Orders from "@/pages/Orders.vue"

const routes =[
  {path: '/', component: Main},
  {path: '/orders', component: Orders},
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router