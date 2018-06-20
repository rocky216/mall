<template lang="html">
<div class="users">
  <div class="header">
    <div class="loginout">
      <i class="fa fa-power-off"></i>
    </div>
    <div class="header_box">
      <img src="https://s.yimg.com/qs/mall/yps/obdesign_5.jpg" alt="">
      <p>花生</p>
    </div>
  </div>
  <div class="orderList">
    <ul>
      <li>
        <i class="fa fa-server"></i>
        <p>全部订单</p>
        </li>
      <li>
        <i class="fa fa-truck"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="fa fa-gbp"></i>
        <p>已完成</p>
      </li>
    </ul>
  </div>
  <div class="cellList">
    <div class="cell_item">
      <router-link to="/address">
        <Cell title="收货地址">
          <span class="fa fa-map-marker redColor spanIcon" slot="icon"></span>
          <i class="fa fa-angle-right"></i>
        </Cell>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import {Cell } from "mint-ui"
export default {
  components: {
    Cell
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";
.header {
  width: 100%;
  height: 4rem;
  background-color: #ef7476;
  position: relative;
  .loginout {
    position: absolute;
    top:0.2rem;
    right: 0.4rem;
    font-size: @size16;
    color:@whiteColor;
  }
  .header_box {
    position: absolute;
    left: 4rem;
    top: 0.8rem;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    p {
      text-align: center;
      font-size: @size16;
      color:@whiteColor;
      margin-top: 0.2rem;
    }
  }
}
.orderList {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    li{
      flex: 1;
      box-sizing: border-box;
      padding: 0.2rem;
      border-right: 1px solid @grayf1;
      border-bottom: 1px solid @grayf1;
      color: @gray666;
      background: #f9f9f9;
      text-align: center;
      i {
        font-size: @size16;
      }
    }
  }
}
.cellList {
  margin-top: 1rem;

  .cell_item {
    background-color: @grayf1;
  }
}
</style>
