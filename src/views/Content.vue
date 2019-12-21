<template>
  <div class="about">
    <div class="section">
      <p class="con_tit" id="title">
         云医康业务版APP V2.0.0全新版本上线，版本新增功能智能文件库
      </p>
      <p class="time">
        <span id="name">发布人：张强</span>
        <span id="time">2018/07/27 16:11</span>
      </p>
      <div id="content">
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue,Prop, Mixins, Emit } from "vue-property-decorator";

@Component({})
export default class About extends Vue {
  @Prop(String) msg!: string

    public created () {
    
    }
}
</script>
<style lang="scss" scoped>
.clearfix:before,
      .clearfix:after {
        content: " ";
        display: inline-block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .clearfix {
        *zoom: 1;
      }

      .fl {
        float: left;
      }
      .bg_f {
        background: #fff;
      }
      .fr {
        float: right;
      }
      li {
        list-style: none;
      }
      .clear {
        clear: both;
        overflow: hidden;
      }
      .section {
        padding: 0px 0.64rem;
      }
      .con_tit {
        margin-top: 1.0027rem;
        margin-bottom: 0.6827rem;
        font-size: 0.5973rem;
        color: #333;
      }
      .time {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 0.512rem;
        color: #808080;
        margin-bottom: 0.896rem;
      }
      #content{
        font-size: 0.4693rem;
        color: #333;
      }
</style>