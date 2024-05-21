import{_ as a}from"./index-C58PDwY0.js";import{ao as i,o as t,c as r,a4 as e,q as s,F as d,at as p,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const g={},c=p("<h1>RegExp</h1><p>正则表达式(<strong>Reg</strong>ular <strong>Exp</strong>ression)是一种文本模式，包括《a;;普通字符(例如，a 到 z 之间的字母)》和《a;;特殊字符(称为&quot;元字符&quot;)》。简单的字符构成，比如 【/abc/】；或者是简单和特殊字符的组合，比如 /【ab*c/】 或 【/Chapter (\\d+)\\.\\d*/】。常用：</p><p>在 JavaScript 中，正则表达式也是对象。这些模式被用于 【RegExp】 的 【exec()】 和 【test()】 方法，以及 【String】 的 【match()】、【matchAll()】、【replace()】、【search()】 和 【split()】 方法。</p><ul><li>判断在一个字符串中的一个匹配是否被找到，可以使用 【《test()》】 或 【《search()》】 方法；</li><li>想得到更多的信息(但是比较慢)则可以使用 【《exec()》】 或 【《match()》】 方法。如果使用这两个方法并且匹配成功了，那么这些方法将返回一个《数组》并且更新相关的正则表达式对象的《属性》和预定义的正则表达式对象。 </li></ul><br><p>可以使用<strong>字面量</strong>、<strong>构造函数</strong>和<strong>工厂</strong>方法来创建正则表达式</p>",6),l=p('<dl><dt>【pattern】</dt><dd>正则表达式的文本。也可以是另一个 RegExp 对象或文字（仅用于两个 RegExp 构造函数符号）。</dd><dt>【flags】</dt><dd><p>正则表达式有六个可选参数【flags】。这些参数既可以单独使用也能以任意顺序一起使用，并且被包含在正则表达式实例中。如果指定，【flags】 是包含标志的《字符串》。</p><p>如果【pattern】是一个对象，【flags】 字符串将《替换该对象的任何标志》 (并且lastIndex将《重置为 0》)。如果没有指定【flags】并且提供了一个正则表达式对象，则该对象的 【flags】(和 lastIndex 值) 将《被复制》。</p><p>【flags】 可包含下列任何字符的组合：</p><figure><table><thead><tr><th class="nowrap">修饰符</th><th>描述</th></tr></thead><tbody><tr><td>【《g》】</td><td><strong>《全局匹配》</strong>。找到所有的匹配，而不是在第一个匹配之后停止。</td></tr><tr><td>【《i》】</td><td><strong>《忽略大小写》</strong>。如果【u】标志也被启用，使用 Unicode 大小写折叠。</td></tr><tr><td>【《m》】</td><td><strong>《多行匹配》</strong>。将开始和结束字符(【^】【$】)视为在多行上工作。换句话说，匹配每一行的开头或结尾(由【\\n】或者【\\r】分隔)，而不仅仅是整个输入字符串的开头或结尾。 </td></tr><tr><td>【《s》】</td><td><strong>点号匹配《所有字符》</strong>。允许【.】去匹配《新的行》。</td></tr><tr><td>【u】</td><td>使用 unicode 码的模式进行匹配。</td></tr><tr><td>【y】</td><td>执行“粘性(sticky)”搜索，匹配从目标字符串的当前位置开始。</td></tr></tbody></table></figure><p><strong>注意：</strong>标志是一个正则表达式的一部分，它们接下来的时间将不能《b;;添加》或《b;;删除》。</p></dd></dl><br><h5>示例：</h5><p>创建 RegExp 对象有两种方法：<strong>字面量</strong> 和 <strong>构造函数</strong>。以下三个表达式创建相同的正则表达式：</p>',4),m=n("p",null," 第一种是字面量形式，由包含在斜杠之间的模式组成。脚本加载后，正则表达式字面量就会被编译。当正则表达式《保持不变》时，使用此方法可获得更好的《性能》。例如，如果使用字面量表示法来构造循环中使用的正则表达式，则不会在每次迭代时重新编译正则表达式。 ",-1),h=n("p",null,"后面两种是调用【RegExp】对象的构造函数。在脚本运行过程中，用构造函数创建的正则表达式会被编译。如果正则表达式《将会改变》，或者它从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。",-1);function f(x,_){const o=i("code");return t(),r(d,null,[c,e((t(),r("pre",null,[s(`const s1 = /pattern/flags
const s2 = new RegExp(pattern, [flags])
const s3 = RegExp(pattern, [flags])`)])),[[o,void 0,"js"]]),l,e((t(),r("pre",null,[s(`const reg1 = /ab+c/i;                 // 字面量形式
const reg2 = new RegExp(/ab+c/, 'i'); // 首个参数为字面量的构造函数
const reg3 = new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数(只有这种方式可以带变量)`)])),[[o,void 0,"js"]]),m,h],64)}const Q=a(g,[["render",f]]);export{Q as default};
