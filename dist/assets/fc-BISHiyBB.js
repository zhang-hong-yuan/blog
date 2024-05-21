import{_ as n}from"./index-C58PDwY0.js";import{ao as a,o as t,c as o,a4 as e,q as p,F as s,at as m,e as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},d=m('<h1>组和范围(Groups and Ranges)</h1><p>表示表达式字符的分组和范围。</p><figure><table><thead><tr><th>字符集</th><th>含义</th></tr></thead><tbody><tr><td>【《x|y》】</td><td><p><strong>析取：</strong>匹配《“x”或“y”》。每个由《管道符【|】》分隔的部分称为一个<em>《可选项》</em>。例如，【/green|red/】 匹配“green apple”中的“green”和“red apple”中的“red”。</p><p><strong>备注：</strong> 析取是指定“一组选择”的另一种方式，但它不是字符类。析取不是《原子》的——你需要使用组使其成为一个更大的模式的一部分。【[abc]】 在功能上等同于 【(?:a|b|c)】。</p></td></tr><tr><td><p>【《a;;[xyz]》】<br>【《a;;[a-c]》】</p></td><td><p>一个字符类。匹配包含在《方括号》中的任何字符。可以使用《连字符》指定字符范围，但如果连字符出现在方括号中的第一个或最后一个字符，则将其视为《字面连字符》，作为普通字符包含在字符类中。</p><p>例如，【[abcd]】 与 【[a-d]】 相同。它们匹配“brisket”中的“b”和“chop”中的“c”。</p><p>例如，【[abcd-]】 和 【[-abcd]】 匹配“brisket”中的“b”、“chop”中的“c”和“non-profit”中的“-”（连字符）。</p><p>例如，【[\\w-]】 与 【[A-Za-z0-9_-]】 相同。它们都匹配“brisket”中的“b”、“chop”中的“c”和“non-profit”中的“n”。</p><p><strong>注意：</strong>对于《l;;点号【.】》和《l;;星号【*】》这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。</p></td></tr><tr><td><p>【《b;;[^xyz]》】<br>【《b;;[^a-c]》】</p></td><td><p> 一个《k;;否定》或《k;;补充》的字符类。也就是说，它匹配未包含在方括号中的任何字符。可以使用连字符指定字符范围，但如果连字符出现在【^】后的第一个字符或方括号中的或最后一个字符，则将其视为《字面连字符》，作为普通字符包含在字符类中。 </p><p>例如，【[^abc]】 与 【[^a-c]】 相同。它们首先匹配“bacon”中的“o”和“chop”中的“h”。</p><p><strong>备注：</strong> 【^】 字符也可以表示输入的开始。</p></td></tr><tr><td>【《(x)》】</td><td><p><strong>捕获组：</strong>匹配 x 并记住匹配项，其中括号被称为<strong>《捕获括号》</strong>。例如，/(foo)/匹配并记住“foo bar”中的“foo” </p><p> 正则表达式可以有多个捕获组。匹配结果数组的成员与捕获组中左括号的顺序相同。当捕获组被嵌套时，这一点非常重要。使用结果元素的索引 (【[1], ..., [n]】) 或从预定义的 【RegExp】 对象的属性 (【$1, ..., $9】). </p><p>捕获组会带来性能损失。如果不需要收回匹配的子字符串，请选择《非捕获括号》。</p><p>【String.match()】 不会返回组，但是仍然可以使用 【String.matchAll()】来获取所有匹配项。</p></td></tr><tr><td>【\\n】</td><td><p>其中 n 是一个正整数。对正则表达式中与 n 括号匹配的最后一个子字符串的反向引用(计算左括号)。</p><p>【/(foo) (bar) \\1 \\2/】 中的 &#39;【(foo)】&#39; 和 &#39;【(bar)】&#39; 匹配并记住字符串 &quot;foo bar foo bar&quot; 中前两个单词。模式中的 【\\1】 和 【\\2】 表示第一个和第二个被捕获括号匹配的子字符串，即 【foo】 和 【bar】，匹配了原字符串中的后两个单词。</p><p><strong>注意：</strong>【\\1】、【\\2】、...、【\\n】 是用在正则表达式的匹配环节，详情可以参阅【\\n】条目。而在正则表达式的替换环节，则要使用像 【$1】、【$2】、...、【$n】 这样的语法，例如，【&#39;bar foo&#39;.replace(/(...) (...)/, &#39;$2 $1&#39;)】。【$&amp;】 表示整个用于匹配的原字符串。</p></td></tr><tr><td class="nowrap">【《(?&lt;Name&gt;x)》】</td><td><p><strong>具名捕获组：</strong>匹配&quot;x&quot;并将其存储在返回的匹配项的 《groups》 属性中，该属性位于【&lt;Name&gt;】指定的名称下。尖括号 (【&lt;】 和 【&gt;】) 用于组名。 </p><p>例如，使用正则 【/-(?&lt;customName&gt;\\w)/】 匹配“web-doc”中的“d”。</p></td></tr><tr><td>【《(?:x)》】</td><td><p><strong>非捕获组：</strong>匹配 “x” 但《不记得匹配》。这种括号叫作<strong>《非捕获括号》</strong>，使得能够定义与正则表达式运算符一起使用的《子表达式》。</p><p>例如 【/(?:foo){1,2}/】。如果表达式是 【/foo{1,2}/】，【{1,2}】 将只应用于 &#39;foo&#39; 的最后一个字符 &#39;o&#39;。如果使用非捕获括号，则 【{1,2}】 会应用于整个 &#39;foo&#39; 单词。</p></td></tr></tbody></table></figure><h3>使用组</h3>',4),l=i("h3",null,"使用命名组",-1);function g(h,b){const r=a("code");return t(),o(s,null,[d,e((t(),o("pre",null,[p(`let personList = \`
  First_Name: John, Last_Name: Doe
  First_Name: Jane, Last_Name: Smith
\`

let regexpNames = /First_Name: (\\w+), Last_Name: (\\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(\`Hello \${match[1]} \${match[2]}\`);
} while ((match = 《regexpNames.exec(personList)》) !== null);

// Hello John Doe
// Hello Jane Smith
`)])),[[r,void 0,"js"]]),l,e((t(),o("pre",null,[p(`let users = \`
  姓氏：李，名字：雷
  姓氏：韩，名字：梅梅
\`

let regexpNames = /姓氏：《a;;(?<first>.+)》，名字：《a;;(?<last>.+)》/gm;
let match = regexpNames.exec(users);

do {
  console.log(\`Hello \${match.groups.first} \${match.groups.last}\`);
} while ((match = regexpNames.exec(users)) !== 《null》);

// Hellow 李 雷
// Hellow 韩 梅梅
`)])),[[r,void 0,"js"]])],64)}const O=n(c,[["render",g]]);export{O as default};
