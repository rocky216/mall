<template>
<div class="order">
  <Head title="我的订单"></Head>
  <router-link to="/address/1">
    <div class="address">
      <div class="address_icon">
        <i class="fa fa-map-marker"></i>
      </div>
      <div class="text">
        <p v-if="!address || address.length">去添加收货地址</p>
        <div v-else >
          <p>收货人:{{address.name}}  {{address.mobile}}</p>
          <div>收货地址: {{address.province_title?address.province_title + address.city_title + address.area_title:''}}</div>
        </div>
      </div>
      <div class="address_icon">
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </router-link>

  <div class="cartList">
    <ul>
      <li>
        <div class="info">
          <div class="img">
            <img :src="baseUrl+detailInfo.cover" />
          </div>
          <div class="infoText">
            <h2>{{detailInfo.title}}</h2>
            <div class="price">
              <p class="colorRed">￥{{detailInfo.price}}</p>
              <p>数量x1</p>
            </div>
          </div>
        </div>
        <div class="freight">
          <span>运费</span>
          <span>￥0.00</span>
        </div>
        <div class="freight">
          <span>&nbsp;</span>
          <span>共计一件商品 &nbsp;&nbsp;&nbsp; 小计￥
            <strong>
              {{detailInfo.price?oDecimal(parseInt($route.params.num)*parseInt(detailInfo.price)):''}}
            </strong>
          </span>
        </div>
      </li>
    </ul>
  </div>

  <div class="bottom">
    <div class="text">
      <p>共{{$route.params.num}}件</p>
      <p>总金额： ￥{{detailInfo.price?oDecimal(parseInt($route.params.num)*parseInt(detailInfo.price)):''}}</p>
    </div>
    <div class="settle">
      <Button type="danger" size="small">提交订单</Button>
    </div>
  </div>

</div>
</template>
<script >
import {Button} from "mint-ui"
import Head from "components/Head"
import {fetch, oDecimal} from "utils"

export default {
  components: {
    Button,
    Head
  },
  data(){
    return {
      address: [],
      detailInfo: '',
      baseUrl: config.baseUrl
    }
  },
  created(){
    this.getDetail()
    this.getAddress()
  },
  methods: {
    oDecimal: oDecimal,
    getAddress(){
      const options = {
        url: "/gushi/Api/User/Address/index",
        method: "post",
        data: {
          token: this.$cookie.get("token")
        }
      }
      fetch(options, (res)=>{
        this.address = _.filter(res, o=>o.is_default=="1")[0]
      })
    },
    getDetail(){
      const options = {
        url: "/gushi/Api/Common/Product/info",
        method: "post",
        data: {
          product_id: this.$route.params.product_id
        }
      }
      fetch(options, (res)=>{
        this.detailInfo = res
      })
    },
  }
}

</script>
<style lang="less" scoped>
@import "../../asset/less/common.less";

.colorRed {
  color: @redColor;
}
.address {
  margin-top: 40px;
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
  ul {
    li {
      border-bottom: 1px solid @grayf1;
      padding: 0.2rem 0.2rem 0 0.2rem;
      .info {
        width: 100%;
        flex: 5;
        display: flex;
        padding-bottom: 0.2rem;
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
          .price {
            overflow: hidden;
            margin-top:0.3rem;
            p:nth-child(1) {
              float: left;
              font-size: @size14;
            }
            p:nth-child(2){
              float: right;
            }
          }
        }
      }
      .freight {
        overflow: hidden;
        border-top: 1px solid @grayf1;
        line-height: 1rem;
        color: @gray999;
        span:nth-child(1){
          float: left;
        }
        span:nth-child(2){
          float: right;
          strong{
            color: @redColor;
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
