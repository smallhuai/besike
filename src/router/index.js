import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global"
// console.log(global.getParam())
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示info页
      redirect: "index",
      children:[
        {
          path:"index",
          name: 'index',
          meta:{
            keepAlive:true
          },
          //keepAlive true 禁止重复加载  false不禁止
          component: resolve => require(['@/components/main/index'], resolve)
        },
        {
          path:"goodlistDetail",
          name: 'goodlistDetail',
          component: resolve => require(['@/components/main/goodlistDetail'], resolve),
        },
        {
          path:"goodderection",
          name: 'goodderection',
          component: resolve => require(['@/components/main/goodderection'], resolve)
        },
        {
          path:"cart",
          name: 'cart',
          component: resolve => require(['@/components/main/cart'], resolve),
          children:[
            {
              path:"cartfixed",
              name: 'cartfixed',
              component: resolve => require(['@/components/main/cartfixed'], resolve)
            }
          ]
        },
        {
          path:"login",
          name:"login",
          component:resolve=>require(['@/components/main/login'],resolve)
        },
        {
          path:"register",
          name:"register",
          component:resolve=>require(['@/components/main/register'],resolve)
        },
        {
          path:"my",
          name:"my",
          component:resolve=>require(['@/components/main/my'],resolve)
        }
      ]
    }
  ]
})

export default routers
