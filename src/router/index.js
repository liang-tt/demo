import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Lists from '@/pages/lists'
import Page1 from '@/pages/page1'
import Tabs from '@/pages/tabs'
import Attatch from '@/pages/attatch'
import Ueditor from '@/pages/ueditor'
import Test from '@/pages/test'

Vue.use(Router)

//固定导航栏
const constantRouterMap = [
  {
    path: '/login',
    component: resolve => require(['@/views/login'], resolve),
    meta: {
      notRequireAuth: true    //不需要登录
    }
  },
  {
    path: '/',
    component: Home,
    redirect: '/lists',
    children: [
      {
        path: '/lists',
        name: 'lists',
        component: Lists,
        meta: {
          title: "列表"
        }
      }
    ]
  }
];

const asyncRouterMap = [
  /*{
    path: '/',
    component: Home,
    redirect: '/lists',
    meta: {
      title: "列表"
    },
    children: [
      {
        path: '/lists',
        name: 'lists',
        component: Lists,
        meta: {
          notRequireAuth: true,    //不需要登录
          title: "列表"
        }
      },

    ]
  },*/
  {
    path: '/menuOne',
    component: Home,
    redirect: '/page1',
    meta: {
      title: "列表"
    },
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: Page1,
        meta: {
          role: ["admin","editor"]
        }
      },
    ]
  },
  {
    path: '/nemuTwo',
    component: Home,
    redirect: '/tabs',
    meta: {
      title: "列表"
    },
    children: [
      {
        path: '/tabs',
        name: 'tabs',
        component: Tabs,
        redirect: '/tabs/attatch',
        meta: {
          title: "切换"
        },
        children: [
          {
            path: 'attatch',
            name: 'attatch',
            component: Attatch,
            meta: {
              role: ["admin"]
            }
          },
          {
            path: '/tabs/lists',
            // name: 'lists',
            component: Lists,
            meta: {
              role: ["admin","editor"]
            }
          },
        ]
      }
    ]
  },
  {
    path: '/nemuThree',
    component: Home,
    redirect: '/ueditor',
    meta: {
      title: "富文本编辑"
    },
    children: [
      {
        path: '/ueditor',
        name: 'ueditor',
        component: Test
      }
    ]
  }
];

const router = new Router({
  routes: [...constantRouterMap,...asyncRouterMap]
})

/*const router = new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['@/views/login'], resolve),
      meta: {
        notRequireAuth: true    //不需要登录
      }
    },
    {
      path: '/',
      component: Home,
      redirect: '/lists',
      children: [
        {
          path: '/lists',
          name: 'lists',
          component: Lists,
          meta: {
            notRequireAuth: true    //不需要登录
          }
        },
        {
          path: '/page1',
          name: 'page1',
          component: Page1
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: Tabs,
          redirect: '/tabs/attatch',
          children: [
            {
              path: 'attatch',
              // name: 'attatch',
              component: Attatch
            },
            {
              path: '/tabs/lists',
              // name: 'lists',
              component: Lists
            },
          ]
        }
      ]
    }
  ]
})*/

router.beforeEach((to,from,next)=>{
  if(!to.meta.notRequireAuth){
    if(window.localStorage.getItem("token")){
      next()
    }else{
      next({
        path: "/login",
      })
    }
  }else{
    next()
  }

})

export default router
export {constantRouterMap, asyncRouterMap }
