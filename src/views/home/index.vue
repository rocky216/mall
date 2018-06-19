<template lang="html">
<div class="home">
  <div class="banner" ref="banner">
    <Swipe>
      <SwipeItem>
        <div class="banner_item">
          <img src="https://s.yimg.com/qs/mall/yps/obdesign_5.jpg" alt="">
        </div>
      </SwipeItem>
      <SwipeItem>
        <div class="banner_item">
          <img src="https://s.yimg.com/cv/api/default/20180320/_miu-star__1.jpg" alt="">
        </div>
      </SwipeItem>
    </Swipe>
  </div>
  <div class="nav" style="width: 100%;" ref="nav" :style="{height: navHeight}">
    <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="some-info">picture index: {{props.index}}</p>
        <p class="some-info">{{props.value.info}}</p>
      </div>
    </vueWaterfallEasy>
  </div>
 
</div>
</template>

<script>
import {Swipe, SwipeItem} from "mint-ui"
import vueWaterfallEasy from 'vue-waterfall-easy'
import {fetch} from "utils"
import data from "./data"

export default {
  components: {
    Swipe,
    SwipeItem,
    vueWaterfallEasy
  },
  data(){
    return {
      imgsArr: data,
      navHeight: ''
    }
  },
  created(){
    console.log(data)
  },
  mounted(){
    this.getNavHeight()
  },
  methods:{
    getData(){

    },
    getNavHeight(){
      var getWinHei = document.documentElement.clientHeight
      var bannerHei = this.$refs.nav.clientHeight
      this.navHeight = getWinHei-bannerHei+'px'
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";

.banner {
  width:100%;
  height: 3.5rem;
  .banner_item {
    width: 100%;
    height:100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.nav {
  padding-bottom:50px;
}
</style>
