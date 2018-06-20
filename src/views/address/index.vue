<template lang="html">
<div class="adress">
  <Head title="收货地址"></Head>
  <div class="addressList">
    <ul>
      <li>
        <div class="userInfo">
          收货人：花生    188888888
        </div>
        <div class="adressInfo">
          江西省吉安市吉州区凯旋汽车城
        </div>
      </li>
      <li>
        <div class="userInfo">
          收货人：花生    188888888
        </div>
        <div class="adressInfo">
          江西省吉安市吉州区凯旋汽车城
        </div>
      </li>
      <li>
        <div class="userInfo">
          收货人：花生    188888888
        </div>
        <div class="adressInfo">
          江西省吉安市吉州区凯旋汽车城
        </div>
      </li>
    </ul>
  </div>
  <div class="add_address">
    <router-link to="/add_address">
      <i class="fa fa-plus"></i>
    </router-link>
  </div>
</div>
</template>

<script>
import Head from "components/Head"

export default {
  components: {
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
.addressList {
  margin-top: 40px;
  ul {
    li {
      padding: 0.2rem;
      box-sizing: border-box;
      line-height: 0.6rem;
      border-bottom: 1px solid @grayf1;
      .userInfo {
        width: 90%;
      }
      .adressInfo {
        width: 90%;
      }
    }
  }
}
.add_address {
  border-top: 1px solid @grayddd;
  background-color: @grayf1;
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  font-size: @size16;
  a {
    display: block;
  }
}
</style>
