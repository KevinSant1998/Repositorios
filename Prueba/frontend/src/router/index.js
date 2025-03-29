import { createRouter, createWebHistory } from 'vue-router'
import ServiceList from '@/views/ServiceList.vue'
import ServiceForm from '@/views/ServiceForm.vue'

const routes = [
  { path: '/', name: 'Inicio', component: ServiceList },
  { path: '/nuevo', name: 'Nuevo', component: ServiceForm },
  { path: '/editar/:id', name: 'Editar', component: ServiceForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
