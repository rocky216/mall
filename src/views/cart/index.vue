<template>
<div class="cart">
  <Head title="购物车"></Head>
  <div class="cartList">
    <ul>
      <li>
        <div class="checkBox">
          <input type="checkBox">
          <span><i class="fa fa-check"></i></span>
        </div>
        <div class="info">
          <div class="img">
            <img src="https://s.yimg.com/qs/mall/yps/obdesign_5.jpg" />
          </div>
          <div class="infoText">
            <h2>金龙鱼 盘锦大米 蟹稻共生5kg 东北大米 人气爆款</h2>
            <div class="num">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </div>
        <div class="price">
          <p>数量x1</p>
          <p>￥29.9</p>
          <i class="fa fa-trash-o fa-lg"></i>
        </div>
      </li>
    </ul>
  </div>
  <div class="bottom">
    <div class="checkBox">
      <input type="checkbox">
      <span><i class="fa fa-check"></i></span>
    </div>
    <div class="text">
      <p>总价： ￥79.6</p>
    </div>
    <div class="settle">
      <router-link to="/order">
        <Button type="danger" size="small">结算(1)</Button>
      </router-link>
    </div>
  </div>
</div>
</template>
<script>
import {Button} from "mint-ui"
import Head from "components/Head"

export default {
  components: {
    Button,
    Head
  },
  data(){
    return {
      options: [{
        value: 1,
      },{
        value: 2,
      },{
        value: 3,
      }]
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../asset/less/common.less";
.checkBox {
  flex: 1;
  position: relative;
  input:checked~span {
    background-color: @redColor;
  }
  span {
    margin: 0.5rem auto;
    width: 0.6rem;
    height: 0.6rem;
    border:1px solid @grayf1;
    display: block;
    border-radius: 50%;
    text-align: center;
    color: @grayf1;
    line-height: 0.6rem;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top:0;
    opacity: 0;
  }
}
.cartList {
  padding:0 0.2rem;
  margin-top: 40px;
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
    p {
      margin-top:0.5rem;
    }
  }
  .settle {
    flex: 2;
    button{
      margin-top: 0.3rem;
    }
  }
}
.num {
  width: 2.7rem;
  margin-top: 0.2rem;
  span {
    float: left;
    box-sizing: border-box;
    border: 1px solid @grayf1;
    height: 0.8rem;
    width: 0.8rem;
    text-align: center;
    line-height: 0.7rem;
    margin-left: 0.1rem;
    background-color: @grayf1;
  }
}

</style>
