import App from "views/app"
import Home from "views/home"
import List from "views/list"
import Detail from "views/detail"
import Cart from "views/cart"
import Order from "views/order"
import Users from "views/users"
import Address from "views/address"
import Addaddress from "views/address/add_address"

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
        path: '/detail/:product_id',
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
        path: '/address',
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
