
// mixins 方法
import { Vue, Component } from 'vue-property-decorator'
// 使用 混入 mixins 必须 要有 Component装饰器
@Component
export default class MixinsData extends Vue {
    public test!: string
    public mounted () {
        console.log(this)
    }
    public handelTest(val: string): void {
        console.log(val)
      this.test = 'About hello test mixins'
    }
}
