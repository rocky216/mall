<template lang="html">
<div class="orderList">
  <Head title="我的订单"></Head>
  <div class="nav">
    <ul>
      <li class="active">全部</li>
      <li>待收货</li>
      <li>已完成</li>
      <li>已取消</li>
    </ul>
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

<style lang="less" scoped >
@import "../../asset/less/common.less";

.nav {
  width: 100%;
  margin-top: 40px;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      padding: 0.2rem 0;
      border-bottom: 1px solid @grayddd;
    }
    li.active {
      border-color: @redColor;
      color: @redColor;
    }
  }
}

</style>
