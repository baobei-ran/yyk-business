<template>
    <!-- 业务端 -> 业务流程 -->
    <div class="business">
        <div class="business-detail">
        <div class="flow-list" v-for='(val, i) in bus_list' :key='i'>
            <dl class="list-pre" v-if='val.state'>
                <dt>
                    <span class="color_blue">{{ val.createtime | Time('MM-dd') }} 
                      <b>{{ val.createtime | Time('hh:mm') }}</b>
                    </span>
                    <i class="blue"></i>
                </dt>
                <dd>
                    <div class="div-color">
                        <h2>{{ val.state == 1? '新增客户':val.state == 2? '设为C类客户': val.state == 3?(val.fair_type == 1?'扔至公海':'客户自动流失至公海'): val.state == 4? '从公海认领': val.state == 5? ( is_type == 1? '上传合同':'添加代理站点') :val.state == 6? '补全合同':val.state == 7? '代理商退款,已扔至公海':val.state == 8? '影像设备已安装':val.state == 9?'代理商退款':''  }}</h2>
                        <p><b>{{ val.uname }}</b> | <span>{{ val.dname }}</span></p>
                        <br />
                        <p class="lx" v-if='(val.state == 5 || val.state == 6) && val.agency_name'>
                            站点名称：{{val.agency_name}}
                        </p>
                        <p class="lx" v-if='val.pact'>
                            合同类型：{{ val.pact==2?'定金合同':val.pact==1?'全款合同':'' }} &nbsp;&nbsp; {{ val.site_type == 1? '大型ID站点': val.site_type == 2?'中型ID站点': val.site_type == 3?'小型ID站点':'' }}
                        </p>
                        <p class="lx" v-if='val.fixation_money > 0'>
                            定金金额：{{ val.fixation_money }}元
                        </p>
                        <ol v-if='val.state == 7 || val.state == 9'>
                            <li v-if='val.tk_money > 0'>
                                <span>退款金额：</span>
                                <span>{{val.tk_money}}元 </span>
                            </li>
                            <li>
                                <span>退款站点：</span>
                                <span>{{ val.agency_name }}</span>
                            </li>
                            <li v-if='val.apply_pic && val.apply_pic.length'>
                                <span>退款申请表：</span>
                                <span>
                                    <img v-for="(pic, i) in val.apply_pic" :key='i' :src='baseURL+pic' preview="3" alt="" />
                                </span>
                            </li>
                            <li v-if='val.affirm_pic && val.affirm_pic.length'>
                                <span>退款确认单：</span>
                                <span><img v-for='(imgs, p) in val.affirm_pic' :key='p' :src="baseURL+imgs" preview="1" alt="" /></span>
                            </li>
                            <li v-if='val.tk_cause'>
                                <span>退款原因：</span>
                                <span>{{ val.tk_cause }}</span>
                            </li>
                        </ol>
                    </div>
                    <p></p>
                </dd>
            </dl>
            <dl class="list-next" v-if='val.type'>
                <dt>
                    <span style="color:#808080;">{{ val.createtime | Time('MM-dd') }} <b>{{ val.createtime | Time('hh:mm') }}</b></span>
                    <i></i>
                </dt>
                <dd>
                    <div>
                        <h2>{{ val.type==1?'再次拜访':val.type==2?'电话回访':val.type==3?'会议邀约':val.type==4?'其他':val.type==5?'邀约公司':val.type==6?'微信跟进':val.type==7?'邮件回访':val.type==8?'添加回款':val.type==9?'回款完成':'' }}</h2>
                        <p><b>{{ val.uname }}</b> | <span style="color: #808080;">{{ val.dname }}</span></p>
                        <ul>
                            <li v-if='val.content'><span>跟进情况：</span><span>{{val.content}}</span></li>
                        </ul>
                        <ul v-if='val.type==1'>
                            <li v-if='val.name'><span>拜访人：</span><span>{{ val.name }}</span></li>
                            <li v-if='val.phone'><span>拜访电话：</span><span>{{ val.phone }}</span></li>
                        </ul>
                        <ul v-if='val.type==3'>
                            <li v-if='val.meeting'><span>会议名称：</span><span>{{ val.meeting }}</span></li>
                            <li v-if='val.meeting_result'><span>邀约结果：</span><span>{{ val.meeting_result == 1? '同意参会':val.meeting_result == 2?'未同意参会': '' }}</span></li>
                            <li v-if='val.meeting_result == 2&&val.meeting_text'><span>未参会原因：</span><span>{{ val.meeting_text }}</span></li>
                        </ul>
                        <ul>
                            <li v-if='val.type == 8 || val.type==9'>
                              <span>站点名称：</span>
                              <span>{{ val.agency_name }}</span>
                            </li>
                            <li v-if='val.answer_money > 0'>
                                <span>回款金额：</span>
                                <span>{{ val.answer_money }}元</span>
                            </li>
                            <li  v-if='val.still_money > 0'>
                                <span>仍需回款金额：</span>
                                <span>{{val.still_money}}元</span>
                            </li>
                            <li v-if='val.receipt_pic && val.receipt_pic.length'>
                                <span>收据：</span>
                                <span><img v-for='(pic, j) in val.receipt_pic' :key='j' :src="baseURL+pic" preview="2" alt="" /></span>
                            </li>
                        </ul>
                    </div>
                    <p></p>
                </dd>
            </dl>
        </div>
        <div class="empty" v-if='is_not'>
            <img src="../assets/images/default.png" alt="" />
            <p>暂无数据</p>
        </div>
    </div>
    </div>
</template>

<script lang='ts'>
import Http from '../api/request'

let http = new Http()
import { Component, Prop, Vue, Emit, Watch, Provide, ProvideReactive, Inject, InjectReactive, Ref, PropSync, Model, Mixins } from "vue-property-decorator";
@Component
export default class Business extends Vue {
    private bus_list:Array<any> = []
    private is_not: Boolean = false
    private baseURL: String = http.baseURL
    private is_type: any = ''
    private mounted () {
        this.initdata()
    }
    private initdata () {
        let { id, type } = this.$route.query;
        var self = this, 
            obj ={ id: id, type: type  };
        this.is_type = type
        http.post('/inside/H5/follow_record', obj).then((res:any) => {
            // console.log(res)
            if (res.code == 200) {
                self.is_not = false
                res.data.map((val:any) => {
                    if (val.receipt_pic) {
                        var arr = val.receipt_pic.split(',')
                        val.receipt_pic = arr
                    }
                    if (val.apply_pic) {
                        var arr2 = val.apply_pic.split(',')
                        val.apply_pic = arr2
                    }
                    if (val.affirm_pic) {
                        var arr3 = val.affirm_pic.split(',')
                        val.affirm_pic = arr3
                    }
                })
                self.bus_list = res.data

                self.$nextTick(() => {
                    setTimeout(() => {
                        self.$previewRefresh()
                    }, 500)
                })
            } else {
                self.is_not = true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
@function rem($px) {
    @return $px/46.875+rem;
}
.business-detail {
    width: 100%;
    min-height: 100vh;
    background: #F6F6F6;
    padding: rem(31) rem(30);
    font-size: rem(28);
    .flow-list {
        dl {
            margin: 0;
            dt {
                display: inline-block;
                vertical-align: top;
                span {
                    display: inline-block;
                    text-align: right;
                    width: rem(90);
                    margin-right: rem(19);
                    b {
                        font-weight: normal;
                        display: block;
                        font-size: rem(24);
                    }
                }
                .color_blue {
                    color: #5987FF;
                }
                i {
                    display: inline-block;
                    width: rem(20);
                    height: rem(20);
                    border-radius: 50%;
                    background: #DDD;
                    vertical-align: top;
                    margin-right: rem(-11);
                }
                .blue {
                    background: url('../assets/icon/icon_sjjd.png') no-repeat;
                    background-size: contain;
                    position: relative;
                    z-index: 10;
                    // background: #505EDE;
                    // &::after {
                    //     content: '';
                    //     display: block;
                    //     position: absolute;
                    //     top: rem(2);
                    //     left: rem(2);
                    //     width:rem(16);
                    //     height: rem(16);
                    //     background: #FFF;
                    //     border-radius: 100%;
                    // }
                }
            }
            dd {
                display: inline-block;
                padding-left: rem(25);
                width: 81%;
                border-left: 1px solid #DDDDDD;
                position: relative;
                margin: 0;
                i {
                    font-style: normal;
                }
                
                div {
                    background: #FFF;
                    padding: rem(20) rem(29);
                    border-radius: rem(4);
                    h2 {
                        display: inline;
                        font-weight:bold;
                        font-size: rem(32);
                        margin-right: rem(20);
                    }
                    p {
                        display: inline-block;
                        font-size: rem(24);
                    }
                    > ul {
                        > li {
                            margin-top: rem(20);
                            width: 100%;
                            color: #808080;
                            font-size: rem(24);
                            span {
                                display: inline-block;
                                line-height: rem(40);
                                &:first-child {
                                    max-width: rem(190);
                                }
                                &:last-child {
                                    max-width: 58%;
                                    vertical-align: top;
                                    img{
                                        width: rem(100);
                                        height: rem(100);
                                        margin-right: rem(10);
                                        margin-bottom: rem(10);
                                    }
                                }
                            }
                        }
                    }
                }
                .div-color {
                    background: #5987FF;
                    color: #FFF;
                    .lx {
                        margin-top: rem(30);
                        margin-left: 0;
                        display: block;
                    }
                    >ol {
                        > li {
                            color: #FFF;
                            font-size: rem(24);
                            margin-top: rem(10);
                            span {
                                display: inline-block;
                                line-height: rem(40);
                                &:first-child {
                                    max-width: rem(150);
                                }
                                &:last-child {
                                    width: 68%;
                                    vertical-align: top;
                                    img {
                                        width: rem(100);
                                        height: rem(100);
                                        margin-right: rem(10);
                                        margin-bottom: rem(10);
                                    }
                                }
                            }
                        }
                    }
                }
                >p {
                    height: 20px;
                }
            }
        }
        .list-next {
            dd {
                color: #333;
                border-radius: rem(4);
            }
        }
        &:last-child {
            dl:last-child {
                dd {
                    border: 0;
                }
            }
        }
    }
    .empty {
        margin-top: 20%;
        img {
            width: rem(300);
            height: rem(300);
            display: block;
            margin: 0 auto;
        }
        p {
            text-align: center;
            font-size: rem(28);
            color: #808080;
            margin-top: rem(28);
        }
    }
}
</style>
