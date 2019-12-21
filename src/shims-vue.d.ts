declare module "*.vue" {    // 识别 .vue文件类型
  import Vue from "vue";
  export default Vue;
}
declare module 'qs' // qs 是js文件，所以要在此 声明
declare module 'vue-photo-preview'