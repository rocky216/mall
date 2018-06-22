<template lang="html">
  <div class="">
    <div class="main">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Footer v-if="isShow"></Footer>
  </div>
</template>

<script>
import Footer from "components/Footer"

export default {
  components: {
    Footer
  },
  data(){
    return{
      isShow: true
    }
  },
  created(){
    this.footerIsShow()
    this.$cookie.set('token',"fnVyqrJ3dLCudXOuhHp5aIGGcayDpnpngYejl7GFotx6dXartJ18srCbc66IenmtgYWXp4OmjqeCd8XMsoWmmH6Ffmmzd416roWZroR3bXM")
  },
  watch: {
    "$route": "footerIsShow"
  },
  methods: {
    footerIsShow(){
      let reg = /\/[detail]/;
      let reg1 = /\/[order]/;
      let reg2 = /\/[cart_order]/;
      this.isShow= reg2.test(this.$route.path) || reg.test(this.$route.path) || this.$route.path=='/cart' || reg1.test(this.$route.path)?false:true
      console.log(this.$route.path=='/detail')
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-bottom: 40px;
}
</style>
