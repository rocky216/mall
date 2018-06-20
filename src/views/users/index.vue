<template lang="html">
<div class="users">
  <div class="header">
    <div class="header_box">
      <img src="https://s.yimg.com/qs/mall/yps/obdesign_5.jpg" alt="">
      <p>花生</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {

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


</style>
