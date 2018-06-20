<template lang="html">
<div class="head">
  <Header fixed :title="title">
    <span slot="left" @click="goBack">
     <Button icon="back"></Button>
   </span>
  </Header>
</div>
</template>

<script>
import {Header, Button} from "mint-ui"
export default {
  components: {
    Header,
    Button
  },
  props: ["title"],
  data(){
    return {

    }
  },
  methods: {
    goBack(){
      this.$router.go('-1')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";


</style>
