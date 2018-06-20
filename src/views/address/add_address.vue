<template lang="html">
<div class="add_address">
  <div class="area">
    <div class="area_item">
      <select v-model="province" @change="provinceHandle">
        <option value="">请选择省</option>
        <option  v-for="item in allCity" :value="item.code" :key="item.code">{{item.name}}</option>
      </select>
    </div>
    <div class="area_item">
      <select v-model="city" @change="cityHandle">
        <option value="">请选择市</option>
        <option v-for="item in citys" :value="item.code" :key="item.code">{{item.name}}</option>
      </select>
    </div>
    <div class="area_item">
      <select v-model="area" >
        <option value="">请选择区/县</option>
        <option v-for="item in areas" :value="item.code" :key="item.code">{{item.name}}</option>
      </select>
    </div>
  </div>
  <div class="detailAddress">
    <table>
      <tr>
        <td>详细地址</td>
        <td>
          <textarea rows="3"></textarea>
        </td>
      </tr>
    </table>
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
      allCity: citys,
      province: '',
      city: '',
      area:'',
      citys: [],
      areas: []
    }
  },
  created(){

  },
  methods: {
    provinceHandle(value){
      let city = _.filter(this.allCity,n=>n.code==value.target.value)[0]
      this.citys = city?city.sub:[]
      this.areas=[]
      this.city = ""
      this.area = ""
    },
    cityHandle(value){
      let area = _.filter(this.citys,n=>n.code==value.target.value)[0]
      this.areas = area?area.sub:[]
      this.area = ""
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
    padding: 0.2rem;
    select {
      width: 100%;
      height: 1rem;
      border: 1px solid @gray999;
      border-radius: 0.1rem;
    }
  }
}
.detailAddress {
  table {
    width: 100%;
    tr {
      td {
        padding: 0.2rem;
        textarea{
          width: 100%;
        }
      }
      td:nth-child(1){
        text-align: right;
      }
    }
  }

}

</style>
