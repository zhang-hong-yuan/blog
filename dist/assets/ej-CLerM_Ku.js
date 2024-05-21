import{_ as d}from"./index-C58PDwY0.js";import{ao as o,o as i,c as n,a4 as l,q as t,F as a,e,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},c=e("h1",null,"string.slice()",-1),x=e("p",null,[t("该方法可《提取字符串的某个部分》，并以《新的"),e("ins",null,"字符串"),t("》返回被提取的部分。包含 【《a;;indexStart》】 处字符，不包含 【《a;;indexEnd》】 处字符。")],-1),g=s('<dl><dt>【indexStart】<span class="optional">可选</span></dt><dd><p>要抽取的片断的《起始下标》。</p><ul><li>如果 【indexStart】 被省略、为 【undefined】，或无法通过【Number(indexStart)】转换为数字，则将其视为 【《0》】。</li><li>如果 【indexStart &gt;= array.length】，则《b;;不提取任何元素》，返回《b;;一个空字符串》。</li><li>如果是负数表示《从尾部截取多少个字符串》，即 【indexStart &lt; 0】，则使用 【《indexStart + array.length》】。【slice(-2)】 表示提取原数组中的倒数第二个元素到最后一个元素(包含最后一个元素)。 </li><li>如果 【indexStart &lt; -array.length】 或者省略了 【indexStart】，则使用 【《0》】。更正式地说，在小于零这种情况下，子字符串从 【《max(indexStart + str.length, 0)》】 开始。</li></ul></dd><dt>【indexEnd】<span class="optional">可选</span></dt><dd><p>紧接着要截取的片段《结尾的下标》。</p><ul><li>如果 【indexEnd】 被省略、为 【undefined】，或无法通过【Number(indexEnd)】转换为数字，或者 【indexEnd &gt;= str.length】，则 《【slice()】 提取到字符串的末尾》。</li><li>如果索引是负数，则《从数组末尾开始计算》，即 【indexEnd &lt; 0】，则使用 【《indexEnd + array.length》】。</li><li>如果 【indexEnd &lt; -array.length】，则使用 【《0》】。更正式地说，在小于零这种情况下，子字符串在 【《max(indexEnd + str.length, 0)》】 处结束。</li><li>在标准化负值后，如果 【indexEnd &lt;= indexStart】，则返回《一个空字符串》。</li></ul></dd></dl><hr><h1>string.substring()</h1><p>该方法用于《提取字符串中介于两个指定下标之间的字符》。返回的<ins>子串</ins>《包括 开始 处的字符，但不包括 结束 处的字符》。</p>',4),m=s("<dl><dt>【indexStart】</dt><dd>一个<ins>非负的整数</ins>，规定要提取的子串的第一个字符在 string 中的《位置》。</dd><dt>【indexEnd】</dt><dd><p>一个<ins>非负的整数</ins>，比要提取的子串的最后一个字符在 【string】 中的《位置多 1》。</p><ul><li>如果省略 【indexEnd】，【substring】 《提取字符一直到字符串末尾》。</li><li>如果任一参数小于 【0】 或为 【NaN】，则被当作 【《0》】。</li><li>如果任一参数大于 【stringName.length】，则被当作 【《stringName.length》】。</li><li>如果 【indexStart】 等于 【indexEnd】，【substring】 返回《一个空字符串》。</li><li>如果 【indexStart】 大于 【indexEnd】，则 《【substring】 的执行效果就像两个参数调换了一样》。</li></ul></dd></dl><br><h5>【substring()】 和 【slice()】 之间的区别</h5><p>两者几乎相同，但在处理《负数参数》时有一些细微差别。</p><p>【substring()】 方法在 【indexStart】 大于 【indexEnd】 的情况下会《交换它的两个参数》，这意味着仍会返回《c;;一个字符串》。而 【slice()】 方法在这种情况下返回《c;;一个空字符串》。 </p>",5),u=e("p",null,"如果两个参数中的任何一个或两个都是负数或 【NaN】，【substring()】 方法将把它们视为 【《0》】。",-1),h=e("p",null,"【slice()】 方法也将 【NaN】 参数视为 【《0》】，但当给定负值时，它《会从字符串的末尾开始反向计数以找到索引》。",-1);function _(S,E){const r=o("code");return i(),n(a,null,[c,x,l((i(),n("pre",null,[t(`string.slice()
string.slice(indexStart)
string.slice(indexStart, indexEnd)`)])),[[r,void 0,"js"]]),g,l((i(),n("pre",null,[t(`string.substring(indexStart)
string.substring(indexStart, indexEnd)`)])),[[r,void 0,"js"]]),m,l((i(),n("pre",null,[t(`const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2));     // ""`)])),[[r,void 0,"js"]]),u,h,l((i(),n("pre",null,[t(`console.log(text.substring(-5, 2));  // "Mo"
console.log(text.substring(-5, -2)); // ""

console.log(text.slice(-5, 2));      // ""
console.log(text.slice(-5, -2));     // "zil"`)])),[[r,void 0,"js"]])],64)}const Y=d(p,[["render",_]]);export{Y as default};