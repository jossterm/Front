import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/container/Home'),
        },
        // Users
        {
          name: 'Users',
          path: 'users/users',
          component: () => import('@/views/container/Users/Users'),
        },
        {
          name: 'UsersFrom',
          path: 'users/form',
          component: () => import('@/views/container/Users/UsersFrom'),
        },
        // Roles
        {
          name: 'Roles',
          path: 'roles/roles',
          component: () => import('@/views/container/Roles/Roles'),
        },
        {
          name: 'RolesForm',
          path: 'roles/form',
          component: () => import('@/views/container/Roles/RolesForm'),
        },

         // Módulos
         {
          name: 'Modulos',
          path: 'modulos/modulos',
          component: () => import('@/views/container/Modulos/Modulos'),
        },
        {
          name: 'ModulosForm',
          path: 'modulos/form',
          component: () => import('@/views/container/Modulos/ModulosForm'),
        },

        {
          name: 'RolModulos',
          path: 'rolmodulos/rolmodulos',
          component: () => import('@/views/container/RolModulos/RolModulos'),
        },

        {
          name: 'RolModulosForm',
          path: 'rolmodulos/form',
          component: () => import('@/views/container/RolModulos/RolModulosForm'),
        },
        
      ],
    },
  ],
})
