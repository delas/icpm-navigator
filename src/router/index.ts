import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/TabHome.vue')
      },
      {
        path: 'calendar',
        component: () => import('@/views/TabAgenda.vue')
      },
      {
        path: 'attendees',
        component: () => import('@/views/TabAttendees.vue')
      },
      {
        path: 'images',
        component: () => import('@/views/TabGallery.vue')
      },
      {
        path: 'page/:id',
        component: () => import('@/views/TabSinglePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
