<template lang="html">
<div class="footer">
  <div class="footer_item">
    <router-link to="/home" >
      <i class="fa fa-newspaper-o"></i>
      <p>商品</p>
    </router-link>
  </div>
  <div class="footer_item">
    <router-link to="/list" >
      <i class="fa fa-podcast"></i>
      <p>发现</p>
    </router-link>
  </div>
  <div class="footer_item">
    <router-link to="/list" >
      <i class="fa fa-file-text"></i>
      <p>发帖</p>
    </router-link>
  </div>
  <div class="footer_item">
    <router-link to="/list" >
      <i class="fa fa-user-circle"></i>
      <p>我的</p>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";
.footer {
  background-color: @grayf1;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  border-top: 1px solid @grayColor;
  height: 1.2rem;
  box-sizing: border-box;
  padding-top: 0.1rem;
  .footer_item {
    flex: 1;
    text-align: center;
  }
}
.router-link-active {
  color: @redColor;
}


</style>
