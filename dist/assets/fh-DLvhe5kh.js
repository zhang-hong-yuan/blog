import{_ as i}from"./index-C58PDwY0.js";import{ao as l,o as t,c as n,a4 as o,q as d,F as p,e,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},a=e("h1",null,"regexp.exec()",-1),u=e("p",null,"【exec()】 通过指定的模式搜索字符串，并以《数组》形式返回已找到的文本。如果未找到匹配，则返回 【《null》】。",-1),x={class:"nocopy"},g=s('<dl><dt>【str】</dt><dd>要匹配正则表达式的《字符串》。</dd></dl><h6>返回值</h6><p>如果匹配成功，【exec()】 方法返回一个数组，并更新正则表达式对象的 【《lastIndex》】 属性。《完全匹配成功的文本》将作为返回数组的第一项，从第二项起，后续每项都对应一个《匹配的捕获组》。数组还具有以下额外的属性： </p><figure><table><thead><tr><th>属性</th><th>含义</th></tr></thead><tbody><tr><td>【[0]】</td><td>最近一个匹配到的字符串。</td></tr><tr><td class="nowrap">【[1]】,……【[n]】</td><td>匹配到的字符串和所有被记住的子字符串。</td></tr><tr><td>【index】</td><td>匹配到的字符位于原始字符串的基于 0 的《索引值》。</td></tr><tr><td>【input】</td><td>匹配的《原始字符串》。</td></tr><tr><td>【groups】</td><td>一个《命名捕获组》对象，其键是《a;;名称》，值是《a;;捕获组》。若没有定义命名捕获组，则 groups 的值为 【undefined】。</td></tr></tbody></table></figure>',4),h=e("h6",null,"捕获组【()】",-1),m=e("p",null,"如果正则表达式中定义了组【()】，就可以在RegExp对象上用 【exec()】 方法提取出子串来。",-1),f=e("p",null,"返回数组的第 0 个元素就是与表达式《相匹配》的文本。第 1 个元素是与 regexp 的第一个子表达式相匹配的文本（如果存在）。第 2 个元素是与 regexp 的第二个子表达式相匹配的文本，以此类推。",-1),b=e("h6",null,"模板引擎的实现原理",-1),_=e("div",null,`var data = { name: '张三', age: 20 }

var str = '<div>{{ name }}今年{{ age }}岁了</div>'
var pattern = /{{\\s*([a-zA-Z]+)\\s*}}/

var patternResult = null
while ((patternResult = 《pattern.exec(str)》)) {
  str = str.replace(《patternResult[0]》, 《data[patternResult[1]]》)
}

console.log(str) // <div>张三今年20岁了</div>`,-1),v=[_],y=e("h6",null,"global 属性",-1),I=e("p",null,"在调用非全局 RegExp 对象的 【exec()】 方法时，返回的数组与调用方法 【String.《match()》】 返回的方法相同。",-1),R=e("p",null," 使用【exec()】方法时，与【g】标志关联的行为是不同的。在【match()】的情况下，字符串类拥有该方法，而正则表达式只是一个参数，而在【exec()】的情况下，它是拥有该方法的正则表达式，其中字符串是参数。对比【str.match(re)】与【re.exec(str)】, 【g】标志与【exec()】方法一起使用获得《迭代》进展。",-1),w=s('<h6>lastIndex 属性</h6><p>【exec()】 在 regexp 的属性 《lastIndex》 指定的字符处开始检索字符串。当它找到了与表达式相匹配的文本时，在匹配之后，它将把 regexp 的 lastIndex 属性设置为《匹配文本的第一个字符的位置》。</p><p>这就是说，可以通过《反复》地调用 【exec()】 方法来遍历字符串中的所有匹配文本。当 【exec()】 再也找不到匹配的文本时，它将返回 【null】，并且把属性 《lastIndex》 重置为 0 。</p><p>如果在另一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 《0》。</p><section class="warning"><header>警告：<span>以下情况会导致匹配变成一个《无限循环！》</span></header><ul><li>不要把正则表达式字面量(或者 【RegExp】 构造函数)放在 《【while】 条件表达式》里。由于每次迭代时 【lastIndex】 的属性都被重置。</li><li>请确保设置了《全局标志位(【g】)》，否则 【lastIndex】 不会被更新。</li><li>如果正则表达式可以匹配长度为零的字符(例如：【/^/gm】)，请《手动递增 【lastIndex】》，以避免其始终卡在相同的位置。</li></ul></section>',5);function j(A,E){const r=l("code");return t(),n(p,null,[a,u,o((t(),n("pre",x,[d("RegExp.exec(str)")])),[[r,void 0,"js"]]),g,o((t(),n("pre",null,[d(`let text = "The best things in life are free"

let result = /e/g.exec(text);
console.log(result)

// 输出结果为：
['e', index: 2, input: 'The best things in life are free', groups: undefined]
   0: "e"
   groups: undefined
   index: 2
   input: "The best things in life are free"
   length: 1
 ➤ [[Prototype]]: Array(0)`)])),[[r,void 0,"js"]]),h,m,o((t(),n("pre",null,[d(`const re = /^(\\d{3})-(\\d{3,8})$/
const result = re.exec('010-12345')

console.log(re.exec('010 12345')) // null
console.log(result)
// 输出结果为：
(3) ['010-12345', '010', '12345', index: 0, input: '010-12345', groups: undefined]
   0: "010-12345"
   1: "010"
   2: "12345"
   groups: undefined
   index: 0
   input: "010-12345"
   length: 3
   [[Prototype]]: Array(0)`)])),[[r,void 0,"js"]]),f,b,o((t(),n("pre",null,v)),[[r,void 0,"js"]]),y,I,o((t(),n("pre",null,[d(`const str = "cdbbdbsbz"

console.log(/d(b+)d/.exec(str));   // (2) ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined]
console.log(/d(b+)d/g.exec(str));  // (2) ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined]

console.log(str.match(/d(b+)d/));  // (2) ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined]
console.log(str.match(/d(b+)d/g)); // ['dbbd']`)])),[[r,void 0,"js"]]),R,o((t(),n("pre",null,[d(`const str = "fee fi fo fum";
const re = new RegExp("\\\\w+\\\\s", "g");
// 如果不设置全局匹配g，将会《是个死循环，打印的永远是第一项》

let xArray;

// 少写这个小括号就会报错
while ((xArray = re.exec(str))) console.log(xArray);

// ['fee ', index: 0, input: 'fee fi fo fum', groups: undefined]
// ['fi ', index: 4, input: 'fee fi fo fum', groups: undefined]
// ['fo ', index: 7, input: 'fee fi fo fum', groups: undefined]`)])),[[r,void 0,"js"]]),w],64)}const de=i(c,[["render",j]]);export{de as default};
