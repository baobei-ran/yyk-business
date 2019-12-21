<template>
  <div class="home">
      <div class="box">
        <table
          width="100%"
          class="tab"
          cellpadding="0"
          cellspacing="0"
          id="tab"
        ></table>
        
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch, Provide, ProvideReactive, Inject, InjectReactive, Ref, PropSync, Model, Mixins } from "vue-property-decorator";
import Http from '../api/request'

let _self = new Http()
@Component
export default class Home extends Vue {
    // 省去 data 直接定义  private 使用 私有声明
    private message: string = 'hello!' 
    private name: string = '小明' 
    private ints: number = 110  
    private dataList: Array<any> = []   // 数组包含对象及数组中包含数组

    
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  font-size: 0.32rem;
}
</style>
