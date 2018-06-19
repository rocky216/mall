<template>
<div class="order">
  <Head title="我的订单"></Head>
  <div class="address">
    <div class="address_icon">
      <i class="fa fa-map-marker"></i>
    </div>
    <div class="text">
      <p>收货人:张三  1888888888</p>
      <div>收货地址: 江西省吉安市青元区凯旋汽车城</div>
    </div>
    <div class="address_icon">
      <i class="fa fa-angle-right"></i>
    </div>
  </div>

  <div class="cartList">
    <ul>
      <li>
        <div class="info">
          <div class="img">
            <img src="https://s.yimg.com/qs/mall/yps/obdesign_5.jpg" />
          </div>
          <div class="infoText">
            <h2>金龙鱼 盘锦大米 蟹稻共生5kg 东北大米 人气爆款</h2>
          </div>
        </div>
        <div class="price">
          <p>数量x1</p>
          <p class="colorRed">￥29.9</p>
        </div>
      </li>
    </ul>
  </div>

  <div class="bottom">
    <div class="text">
      <p>共4件</p>
      <p>总金额： ￥79.6</p>
    </div>
    <div class="settle">
      <router-link to="/order">
        <Button type="danger" size="small">提交订单</Button>
      </router-link>
    </div>
  </div>

</div>
</template>
<script >
import {Button} from "mint-ui"
import Head from "components/Head"

export default {
  components: {
    Button,
    Head
  },
  data(){
    return {

    }
  }
}

</script>
<style lang="less" scoped>
@import "../../asset/less/common.less";

.colorRed {
  color: @redColor;
}
.address {
  padding: 0.2rem 0;
  display: flex;
  .address_icon {
    flex: 1;
    font-size: 18px;
    text-align: center;
    margin-top: 0.2rem;
    color: @gray999;
  }
  .text {
    flex: 5;
  }
}

.cartList {
  border-top: 1px solid @grayf1;
  padding:0 0.2rem;
  ul {
    li {
      border-bottom: 1px solid @grayf1;
      padding: 0.2rem 0;
      display: flex;

      .price {
        flex: 1.3;
      }
      .info {
        flex: 5;
        display: flex;
        .img {
          width: 2rem;
          height: 2rem;
          flex: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .infoText {
          padding:0 0.2rem;
          flex: 3;
          h2 {
            .manyhidden (2);
            height: 1rem;
          }
        }
      }
    }
  }
}

.bottom {
  height: 50px;
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  left:0;
  border-top: 1px solid @grayf1;
  .checkBox {
    flex: 1;
  }
  .text {
    flex: 5;
    padding-left: 0.2rem;
    box-sizing: border-box;
    p:nth-child(1) {
      margin-top:0.2rem;
    }
    p {
      font-size: @size14;
      margin-left:0.5rem;
    }
  }
  .settle {
    flex: 2;
    button{
      margin-top: 0.3rem;
    }
  }
}

</style>
