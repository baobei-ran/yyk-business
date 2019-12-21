
import Vue from 'vue';
/**
 * // 全局时间过滤器
 * @param { string | number } dateStr // 时间戳
 * @param { string } pattern          // 转换格式
 */
Vue.filter('Time',function(dateStr: any, pattern: string = ''){
    if (!dateStr) {
        return null
    }
    var dt = new Date(dateStr *1000)
    //   yyyy-mm-dd
    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1).toString().padStart(2, '0')
    var d = dt.getDate().toString().padStart(2, '0')
    if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
    } else if (pattern.toLowerCase() === 'mm-dd') {
        return `${m}-${d}`
    } else if (pattern.toLowerCase() === 'hh:mm') {
        var hh = dt.getHours().toString().padStart(2, '0')
        var mm = dt.getMinutes().toString().padStart(2, '0')
        return `${hh}:${mm}`
    } else {
        var hh = dt.getHours().toString().padStart(2, '0')
        var mm = dt.getMinutes().toString().padStart(2, '0')
        // var ss = dt.getSeconds().toString().padStart(2, '0')
        return `${y}-${m}-${d} ${hh}:${mm}`
    }
})

// Vue.filter('Time', function formatDate(data: any, fmt: string = 'yyyy-MM-dd hh:mm') {
//         if (!data) {
//             return null
//         }
//     var date = new Date(data *1000)
//     if (/(y+)/.test(fmt)) {
//      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//     }
//     let o = {
//      'M+': date.getMonth() + 1,
//      'd+': date.getDate(),
//      'h+': date.getHours(),
//      'm+': date.getMinutes(),
//      's+': date.getSeconds()
//     }
//     for (let k in o) {
//         if (new RegExp(`(${k})`).test(fmt)) {
//             let str = o[k]
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 2) ? str : padLeftZero(str))
//         }
//     }
//     return fmt
// })
// function padLeftZero(str: any) {
//     if (str.toString().length > 1) {
//         return str
//     }
//     return ('0' + str).substr(str.length)
//    }