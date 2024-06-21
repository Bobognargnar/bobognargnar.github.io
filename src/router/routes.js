const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: 'three', name: 'ThreePage', component: () => import('pages/ThreePage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
