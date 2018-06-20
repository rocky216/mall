<template lang="html">
<div class="add_address">
  <div class="area">
    <div class="area_item">
      <select>
        <option v-for="item in citys" :value="item.code" :key="item.code">{{item.name}}</option>
      </select>
    </div>
    <div class="area_item">
      <select></select>
    </div>
    <div class="area_item">
      <select></select>
    </div>
  </div>
</div>
</template>

<script>
import citys from "./citys"

export default {
  components: {

  },
  data(){
    return {
      selected: 'bar',
      citys: citys
    }
  },
  created(){
    console.log(citys);
  },
  methods: {
    changeHandle(value){
      console.log(1);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";

.area {
  display: flex;
  .area_item {
    flex: 1;
  }
  .area_item {
    
  }
}

</style>
