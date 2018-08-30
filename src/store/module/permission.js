
import { constantRouterMap, asyncRouterMap } from '@/router/index'

function hasPermission(roles,route) {   //roles从后台获取的
  if(route.meta && route.meta.role){
    return roles.some(role => {
      route.meta.role.includes(role)
    })
  } else {
    return true
  }
}

function filterAsyncRouters(asyncRouterMap, roles) {   //roles 是从后台获取的
  let accessRouters = asyncRouterMap.filter(route => {
    if(hasPermission(roles,route)){
      if(route.children && route.children.length){
        route.children = filterAsyncRouters(route.children, roles);
      }
      return true
    }else {
      return false
    }
  })
  console.log(accessRouters)
  return accessRouters;
}

const pression = {
    state: {
      routers: constantRouterMap,
      addRouters: []
    },
    mutations: {
      SET_ROUTERS: (state,routers) => {
        debugger
        state.addRouters = routers;
        state.routers = constantRouterMap.concat(routers)
      }
    },
    actions: {
      GenerateRoute({ commit }, data) {
        return new Promise(resolve => {
          const { roles } = data;
          let accessRouters ;
          debugger
          if (roles.includes("admin")) {
            accessRouters = asyncRouterMap;
          } else {
            accessRouters = filterAsyncRouters (asyncRouterMap,roles)
          }
          commit('SET_ROUTERS', accessRouters);
          resolve()
        })
      }
    }
}

export default pression;
