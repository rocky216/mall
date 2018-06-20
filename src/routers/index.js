import App from "views/app"
import Home from "views/home"
import List from "views/list"
import Detail from "views/detail"
import Cart from "views/cart"
import Order from "views/order"
import Users from "views/users"

export default [
  {
    path: '/',
    component: App,
    redirect: "/home",
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/order',
        component: Order
      },
      {
        path: '/user',
        component: Users
      },
      {
        path: '/list',
        component: List
      }
    ]
  }
]
