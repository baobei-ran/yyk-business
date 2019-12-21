<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
   mounted () {
        var version = this.version;          //版本号（每次上线前需要更新下版本号）
        // console.log('当前版本号common.js：',version)
        var vvv ='1.0.1'
        // console.log('当前版本号app.vue：',vvv)
        if(vvv !== version) {
          version = vvv;
          window.location.reload();
        }
   }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
