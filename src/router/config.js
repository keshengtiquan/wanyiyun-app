export default [
  {
    path: '/',
    component: ()=>import('../views/Index/Index.vue'),
    children: [
      {
        path: '/',
        component: ()=>import('../views/Index/Discover.vue')
      },
      {
        path: '/my',
        component: ()=>import('../views/Index/My.vue')
      },
      {
        path: '/video',
        component: ()=>import('../views/Index/Video.vue')
      },
      {
        path: '/friend',
        component: ()=>import('../views/Index/Friend.vue')
      }
    ]
  },
  {
    path: '/login',
    component: ()=>import('../views/Login/Login.vue')
  }
]