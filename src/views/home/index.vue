<template lang="html">
<div class="home">
  <div class="banner">
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
</div>
</template>

<script>
import {Swipe, SwipeItem} from "mint-ui"

export default {
  components: {
    Swipe,
    SwipeItem
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width:100%;
  height: 100px;
}
</style>
