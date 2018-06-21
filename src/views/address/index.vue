<template lang="html">
<div class="adress">
  <Head title="收货地址"></Head>
  <div class="addressList">
    <ul>
      <li :class="{active: parseInt(item.is_default)}" v-for="(item, index) in addressList" :key="item.address_id" >
        <div class="info" @click="setDefult(item)">
          <div class="userInfo">
            收货人：{{item.name}}    {{item.mobile}}
          </div>
          <div class="adressInfo">{{item.province_title+item.city_title+item.area_title+item.address_detail}}</div>
        </div>
        <div class="options">
          <i class="fa fa-pencil fa-fw"></i>
          <i class="fa fa-trash-o fa-lg" @click="deleteAddress(item)"></i>
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
import {fetch} from "utils"
import {Toast} from "mint-ui"

export default {
  components: {
    Head
  },
  data(){
    return {
      addressList: []
    }
  },
  created(){
    this.getAddress()
  },
  methods: {
    deleteAddress(item){
      const options={
        url: "/gushi/Api/User/Address/del",
        method: "post",
        data: {
          token: this.$cookie.get("token"),
          address_id: item.address_id
        }
      }
      fetch(options, ()=>{
        Toast("删除成功！")
        this.getAddress()
      })
    },
    setDefult(item){
      if (parseInt(item.address_id)) return;
      
      const options={
        url: "/gushi/Api/User/Address/set_default",
        method: "post",
        data: {
          token: this.$cookie.get("token"),
          address_id: item.address_id
        }
      }
      fetch(options, (res)=>{
        this.getAddress()
      })
    },
    getAddress(){
      const options = {
        url: "/gushi/Api/User/Address/index",
        method: "post",
        data: {
          token: this.$cookie.get("token")
        }
      }
      fetch(options, (res)=>{
        this.addressList = res
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";
.addressList {
  margin-top: 40px;
  ul {
    li.active {
      background-color: @grayddd;
    }
    li {
      padding: 0.2rem;
      box-sizing: border-box;
      line-height: 0.6rem;
      border-bottom: 1px solid @grayf1;
      display: flex;
      .info {
        flex: 7;
      }
      .options {
        flex: 2;
        display: flex;
        padding-top: 0.4rem;
        i{
          flex: 1;
          text-align: center;
        }
      }
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
