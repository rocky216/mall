<template lang="html">
<div class="head">
  <Header fixed :title="title"></Header>
</div>
</template>

<script>
import {Header} from "mint-ui"
export default {
  components: {
    Header
  },
  props: ["title"],
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";


</style>
