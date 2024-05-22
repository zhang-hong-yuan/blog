import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as t,c as o,a4 as e,q as r,F as c,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},d=n("h1",null,"string.at()",-1),u=n("p",null,"【at()】 方法接受《一个整数值》，并返回《一个新的 【String】》，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。如果找不到指定的索引，则返回 【《undefined》】。",-1),m=n("dl",null,[n("dt",null,"【index】"),n("dd",null,"要返回的字符串字符的索引(位置)。当传递负数时，支持从字符串末端开始的相对索引；也就是说，如果使用负数，返回的字符将《从字符串的末端开始倒数》。")],-1),h=n("br",null,null,-1),p=n("h5",null,"示例：",-1),_=n("br",null,null,-1),g=n("h5",null,"方法对比",-1),v=n("p",null,"通过比较不同的方法来实现选择 【String】 的倒数第二个字符。尽管以下所有方法都是有效的，但它们凸显了 【at()】 方法的简洁性和可读性。",-1),f=n("hr",null,null,-1),x=n("h1",null,"string.charAt()",-1),y=n("p",null,"该方法返回《指定位置的字符》。第一个字符位置为 0，第二个字符位置为 1，以此类推。",-1),b=n("dl",null,[n("dt",null,"【index】"),n("dd",null,"要返回的字符的索引，从零开始。会被转换为整数——【undefined】会被转换为 《0》。")],-1),A=n("p",null,"【index】 默认为 0，一个介于 0 和字符串长度减1之间的整数(【《0 ~ length-1》】)。表示字符串中某个位置的数字，即字符在字符串中的位置。 如果指定的 【index】 值超出了该范围，则返回一个《空字符串》。 ",-1),k=n("blockquote",null,[n("p",null,"【charAt()】 和使用方括号表示法访问指定索引处的字符非常相似。它们的主要区别在于："),n("ul",null,[n("li",null,"【charAt()】 尝试将 【index】 转换为《整数》，而方括号表示法不会，直接使用 【index】 作为《属性名》。"),n("li",null,"如果 【index】 超出范围，【charAt()】 返回一个《a;;空字符串》，而方括号表示法返回 【《a;;undefined》】。")])],-1),S=n("br",null,null,-1),W=n("h4",null,"案例：统计出现最多的字符和次数",-1);function j(L,R){const i=s("code");return t(),o(c,null,[d,u,e((t(),o("pre",null,[r("string.at(index)")])),[[i,void 0,"js"]]),m,h,p,e((t(),o("pre",null,[r(`// 返回给定字符串的最后一个字符的函数
function returnLast(arr) { return 《arr.at(-1)》; }

let invoiceRef = "myinvoice01";
console.log(returnLast(invoiceRef));
// Logs: '1'

invoiceRef = "myinvoice02";
console.log(returnLast(invoiceRef));
// Logs: '2'`)])),[[i,void 0,"js"]]),_,g,v,e((t(),o("pre",null,[r(`const myString = "Every green bus drives fast.";

// 使用 length 属性和 charAt() 方法
const lengthWay = 《myString.charAt(myString.length - 2)》;
console.log(lengthWay); // 't'

// 使用 slice() 方法
const sliceWay = 《myString.slice(-2, -1)》;
console.log(sliceWay); // 't'

// 使用 at() 方法
const atWay = 《myString.at(-2)》;
console.log(atWay); // 't'`)])),[[i,void 0,"js"]]),f,x,y,e((t(),o("pre",null,[r("string.charAt(index)")])),[[i,void 0,"js"]]),b,A,k,S,W,e((t(),o("pre",null,[r(`var str = 'abcoefoxyozzopp'
var o = {}
for (var i = 0; i < str.length; i++) {
    // 利用charAt()遍历这个字符串
    var chars = 《str.charAt(i)》
    
    // 把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
    《o[chars]》 ? 《o[chars]++》 : 《o[chars] = 1》
}

var max = 0
var ch = ''
for (var k in o) {
  // 遍历对象，得到最大值和该字符
    if (《o[k] > max》) {
        max = 《b;;o[k]》
        ch = 《b;;k》
    }
}

console.log(max)
console.log('最多的字符是' + ch)`)])),[[i,void 0,"js"]])],64)}const sn=l(a,[["render",j]]);export{sn as default};
