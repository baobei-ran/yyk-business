<template>
    <div class='Namecard'>
       <div class="box">
      <img src="../assets/images/bg.jpg" alt="" />
      <div class="bot bg_f">
        <ul class="clear">
          <li class="fl">
              <div class="nameimg">
                {{userName}}
              </div>
          </li>
          <li class="fl">
            <p class="myname">
              <span id="myname" v-text='userInfo.name'>李世军</span><span id="nameid" v-text='userInfo.position|| "暂无职位"'>业务专员</span>
            </p>
            <p class="ltname" id="ltsname">北京云医康医疗科技集团</p>
          </li>
        </ul>
        <table class="tab">
          <tr>
            <td><img src="../assets/images/icon_hyouxiang.png" alt="" /></td>
            <td>
              <p>手机</p>
              <p id="phone" v-text='userInfo.phone||"暂无号码"'>12345678911</p>
            </td>
          </tr>
          <tr>
            <td><img src="../assets/images/icon_hweixin.png" alt="" /></td>
            <td>
              <p>微信</p>
              <p id="weichat" v-text='userInfo.wechat||"暂无微信号"'>12345678911</p>
            </td>
          </tr>
          <tr>
            <td><img src="../assets/images/icon_hshouji.png" alt="" /></td>
            <td>
              <p>邮箱</p>
              <p id="email" v-text='userInfo.mail||"暂无邮箱"'>12345678911@qq.com</p>
            </td>
          </tr>
          <tr>
            <td><img src="../assets/images/icon_hdizhi.png" alt="" /></td>
            <td>
              <p>地址</p>
              <p id="address" v-text='userInfo.address'></p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bg_f lts_in">
      <p class="lt_tit">公司简介</p>
      <p class="lt_msg">
        云医康是北京云医康医疗科技集团倾力打造，公司在人工智能、大数据、互联网等领域掌握自主研发的核心技术。目前公司发展已经涵盖移动医疗、鲁医通、医疗云数据、互联网医院、智慧药房、医药/设备电商、云智能慢病管理、健康体检、医疗UGC平台9大解决方案。
      </p>
      <p class="downapp"><img src="../assets/images/img_erweima.png" alt="" /></p>
      <p class="bottext">< 扫码了解云医康 ></p>
    </div>
    </div>
</template>
<script lang="ts">
declare module 'vue/types/vue' {
  interface Vue {
      [key: string]: any,
  }
}
import { Component, Prop, Vue, Emit, Watch, Provide, ProvideReactive, Inject, InjectReactive, Ref, PropSync, Model, Mixins } from "vue-property-decorator";
import Http from '../api/request'

let _self = new Http()
@Component
export default class Home extends Vue {
    // 省去 data 直接定义  private 使用 私有声明
    private userInfo: object = {} 
    private baseURL: string = _self.baseURL|| ''
    private dataList: Array<any> = []   // 数组包含对象及数组中包含数组
    private userName: String = ''
    private mounted () {
      let { uid } = this.$route.query
      _self.post('/inside/H5/card', { uid: uid }).then((res:any) => {
        console.log(res)
        if (res.code == 1) {
            this.userInfo = res.data
            var str = res.data.name
            if (str && str.length > 2) {
              this.userName = str.substring(str.length-2)
            } else {
              this.userName = str
            }
        }
      })
    }

    // methods 写法
    private initdata (): void {
      
    }
    
}
</script>
<style lang="scss" scoped>
.Namecard {
  width: 100%;
  font-size: 0.32rem;
  background: #f7f7fa;
}
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
      .box {
        padding: 0.426667rem 0.64rem 0px;
      }
      img {
        max-width: 100%;
      }
      .nameimg {
        width: 2.944rem;
        line-height: 2.944rem;
        text-align: center;
        height: 2.944rem;
        background: #5987ff;
        margin-left: 0.682667rem;
        border-radius: .1256rem;
        color: #FFF;
        font-size: .6594rem;
      }
      .bot {
        margin-bottom: 0.682667rem;
      }
      .bot ul {
        position: relative;
        bottom: 0.64rem;
        padding-bottom: 0.64rem;
        border-bottom: 1px solid rgba(229, 229, 229, 1);
      }
      .ltname,
      .myname {
        margin-left: 0.661333rem;
      }
      .myname {
        margin-top: 0.981333rem;
        margin-bottom: 0.405333rem;
      }
      .myname span:first-child {
        font-size: 0.597333rem;
        font-weight: bold;
        color: #333;
        margin-right: 0.554667rem;
      }
      .myname span:last-child {
        font-size: 0.512rem;
        color: #333;
        font-weight: 400;
      }
      .ltname {
        font-size: 0.512rem;
        color: rgba(117, 117, 117, 1);
      }
      .tab td {
        padding-bottom: 0.746667rem;
      }
      .tab img {
        width: 1.024rem;
        margin-left: 1.088rem;
      }
      .tab p {
        margin-left: 0.704rem;
        font-size: 0.512rem;
      }
      .tab p:first-child {
        color: #9e9e9e;
        margin-bottom: 0.32rem;
      }
      .tab p:last-child {
        color: #333333;
      }
      .lts_in {
        padding: 0.896rem 0.661333rem;
        font-size: 0.512rem;
        color: #333;
      }
      .lt_tit {
        font-size: 0.597333rem;
        font-weight: bold;
        margin-bottom: 0.661333rem;
      }
      .lt_msg {
        font-weight: 400;
        line-height: 0.853333rem;
        margin-bottom: 0.682667rem;
      }
      .downapp {
        text-align: center;
      }
      .downapp img {
        width: 5.674667rem;
      }
      .bottext {
        margin-top: 3px;
        text-align: center;
      }

</style>
