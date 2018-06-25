import App from "views/app"
import Home from "views/home"
import List from "views/list"
import Detail from "views/detail"
import Cart from "views/cart"
import Order from "views/order"
import Cartorder from "views/order/cart_order"
import Users from "views/users"
import Address from "views/address"
import Addaddress from "views/address/add_address"
import OrderList from "views/order/order_list"

export default [
  {
    path: '/',
    component: App,
    redirect: "/home",
    children: [
      {
        path: '/home/:scroll?',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/detail/:product_id',
        component: Detail
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/order/:product_id?/:num?',
        component: Order
      },
      {
        path: '/order_list',
        component: OrderList
      },
      {
        path: '/cart_order',
        name: 'cart_order',
        component: Cartorder
      },
      {
        path: '/user',
        component: Users
      },
      {
        path: '/address/:type?',
        component: Address
      },
      {
        path: '/add_address',
        component: Addaddress
      },
      {
        path: '/list',
        component: List
      }
    ]
  }
]
