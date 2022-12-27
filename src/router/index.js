import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/blockly",
      name: "blockly",
      component: () => import("@/views/BlocklyView.vue"),
    },
    {
      path: "/python",
      name: "python",
      component: () => import("@/views/PythonView.vue"),
    },
    {
      path: "/",
      redirect: "/blockly",
    },
  ]
})

export default router
