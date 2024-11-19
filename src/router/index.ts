import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import('@/views/inicio_sesion.vue')
  },
  {
    path: "/folder/addCount",
    component: () => import('@/views/agregar_cuentas.vue')
  },
  {
    path: "/folder/mainAccount",
    component: () => import('@/views/cuenta_principal.vue')
  },
  {
    path: "/folder/transfer",
    component: () => import('@/views/nueva_transaccion.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
