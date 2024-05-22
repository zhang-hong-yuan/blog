import{_ as s}from"./index-C58PDwY0.js";import{ao as i,o as t,c as r,a4 as o,q as n,F as p,at as d,e as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},c=d('<h1>字符类(Character Classes)</h1><p>大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。而元字符(Metacharacter)是拥有特殊含义的字符：</p><figure><table><thead><tr><th>字符</th><th>含义</th></tr></thead><tbody><tr><td><span class="emphasize">\\</span></td><td><p>指示应《a;;特殊处理》或《a;;“转义”》后面的字符。它表现为两种方式(《普通变特殊；特殊变普通》)之一。</p><ul><li>对于普通字符，表示下一个字符是《b;;特殊》的，不能按字面解释。例如，【/b/】 匹配字符“b”；而【/\\b/】表示匹配单词边界。</li><li>对于特殊字符，表示下一个字符是《b;;普通》的，按字面意思解释。例如，【/a*/】 匹配 0 个或多个“a”。要从字面上匹配 【*】 需在其前面加上反斜杠；例如，【/a\\*/】 匹配“a*”。</li></ul><p><strong>备注：</strong>要从字面上匹配此字符，请将其转义。换句话说就是搜索 <span class="emphasize">\\</span> 需要使用 <span class="emphasize">《/\\\\/》</span>。</p></td></tr><tr><td>【.】</td><td><p>有下列含义之一：</p><ul><li>匹配除《行终止符》之外的任何《单个字符》。例如，【/.y/】 在“yes make my day”中匹配“my”和“ay”，而不是“yes”。</li><li>在字符集内，点失去了它的特殊意义，并与《文字点(【.】)》匹配。</li></ul><p>需要注意的是，【m】 multiline 标志不会改变点的行为。因此，要跨多行匹配一个模式，可以使用字符集【[^]】—它将匹配任何字符，包括新行。</p><p>【s】“dotAll”标志允许点也匹配行终止符。</p></td></tr><tr><td>《c;;【\\d】(<strong>d</strong>igit)》</td><td><p>匹配《d;;任何数字》。相当于 【《d;;[0-9]》】。例如，【/\\d/】 或 【/[0-9]/】 匹配“B2is the suite number”中的“2”。</p></td></tr><tr><td>【《c;;\\D》】</td><td><p>匹配《e;;任何非数字的字符》。相当于【《e;;[^0-9]》】。例如，【/\\D/】 或者 【/[^0-9]/】 匹配“B2 is the suite number”中的“B”。</p></td></tr><tr><td>《f;;【\\w】(<strong>w</strong>ord)》</td><td><p>匹配《g;;任何字母数字字符，包括下划线》。相当于 【《g;;[A-Za-z0-9_]》】。例如，【/\\w/】 匹配“apple”中的“a”，匹配“$5.28”中的“5”，匹配“3D”中的“3”，以及匹配“Émanuel”中的“m”。</p></td></tr><tr><td>【《f;;\\W》】</td><td><p>匹配《h;;任何不是来自基本拉丁字母的单词字符》。相当于 【《h;;[^A-Za-z0-9_]》】。例如，【/\\W/】 或者 【/[^A-Za-z0-9_]/】 匹配“50%”中的“%”，以及匹配“Émanuel”中的“É”。</p></td></tr><tr><td>《i;;【\\s】(<strong>s</strong>pace)》</td><td><p> 匹配《单个空白字符》，包括空格、制表符、换页符、换行符和其他 Unicode 空格，相等于 【[\\t\\r\\n\\v\\f]】。例如，【\\s\\w*/】 匹配“foo bar”中的“bar”。 </p></td></tr><tr><td>【《i;;\\S》】</td><td><p> 匹配《除空格以外的单个字符》，相等于 【[^\\t\\r\\n\\v\\f]】。例如，【/\\S\\w*/】 匹配“foo bar”中的“foo”。 </p></td></tr><tr><td>《【\\r】(<strong>r</strong>eturn)》</td><td>匹配《回车符》。</td></tr><tr><td>《【\\n】(<strong>n</strong>ewline)》</td><td>匹配《换行符》。</td></tr><tr><td>【\\t】(<strong>t</strong>ab)</td><td>匹配水平制表符。</td></tr></tbody></table></figure><h3>Escaping</h3><p>将用户输入转义为正则表达式中的一个字面字符串，可以通过简单的替换来实现：</p>',5),m=a("h3",null,"寻找一系列数字",-1),g=a("h3",null,"寻找以 A 开头的拉丁字母单词",-1),h=a("h3",null,"计算元音个数",-1);function u(_,b){const e=i("code");return t(),r(p,null,[c,o((t(),r("pre",null,[n(`function escapeRegExp(string) {
  return string.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");
  //$&表示《整个被匹配的字符串》
}`)])),[[e,void 0,"js"]]),m,o((t(),r("pre",null,[n(`const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\\b\\d{4}\\b/g;

console.table(randomData.《match》(regexpFourDigits));
// ['8787', '3512', '8735']
`)])),[[e,void 0,"js"]]),g,o((t(),r("pre",null,[n(`const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\\b[aA]\\w+/g;

console.table(aliceExcerpt.《match》(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
`)])),[[e,void 0,"js"]]),h,o((t(),r("pre",null,[n(`const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";

const regexpVowels = /[AEIOUYaeiouy]/g;

console.log("元音数：", aliceExcerpt.match(regexpVowels).《length》);
// 元音数：26
`)])),[[e,void 0,"js"]])],64)}const K=s(l,[["render",u]]);export{K as default};
