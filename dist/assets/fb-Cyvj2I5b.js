import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as e,c as n,a4 as r,q as i,F as a,at as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const g={},c=p('<h1>断言(Assertions)</h1><p>断言表示一个匹配在某些条件下发生。断言包含<strong>先行断言</strong>、<strong>后行断言</strong>和<strong>条件表达式</strong>。</p><p>断言的组成之一是《边界》。对于文本、词或模式，边界可以用来表明它们的起始或终止部分。</p><p><strong>注意：</strong>边界符不能与《量词符》一起使用。由于在紧靠换行或者单词边界的前面或后面不能有一个以上位置，因此不允许诸如 【^*】 之类的表达式。</p><figure><table><thead><tr><th>字符</th><th>含义</th></tr></thead><tbody><tr><td>【《a;;^n》】</td><td><p>匹配任何《以 n 开头》的字符串。</p><p>如果多行模式设为 【true】，【^】 在换行符后也能立即匹配，比如 【/^A/】 匹配不了 an A 里面的 A，但是可以匹配 An A 里面第一个 A。</p><p><strong>注意：</strong>【^】 出现在集合或范围开头时表示一个否定的或被补充的字符集。</p></td></tr><tr><td>【《a;;n$》】</td><td><p>匹配任何《以 n 结尾》的字符串。</p><p>如果多行模式设为 【true】，【$】 在换行符前也能立即匹配，比如 【/t$/】 不能匹配 eater 中的 t，但是可以匹配 eat 中的 t。</p><p><strong>注意：</strong>如果 【^】 和 【$】 在一起，表示必须是精确匹配。</p></td></tr><tr><td>【《b;;\\b(<strong>b</strong>order)》】</td><td><p>匹配《一个单词的边界》。这是一个字的字符前后没有另一个字的字符位置，例如在字母和空格之间。需要注意的是匹配的单词边界《不包括::是否包括》在匹配中。换句话说，匹配字边界的长度为零。 </p><p>在单词的开头/结尾查找匹配项，开头【/\\bHI/】，结尾【/HI\\b/】。【/\\w\\b\\w/】 将永远不会匹配任何东西，因为一个单词字符后面永远不会同时有一个非单词字符和一个单词字符。</p><p><strong>注意：</strong>【[\\b]】匹配退格字符。</p></td></tr><tr><td>【《b;;\\B》】</td><td><p>查找匹配项，但不在单词的开头/结尾处，即匹配《非单词边界》。这是上一个字符和下一个字符属于同一类型的位置：要么两者都必须是单词，要么两者都必须是非单词。例如在两个字母之间或两个空格之间。</p><p>字符串的开头和结尾被视为《非单词》。与匹配的词边界相同，匹配的非词边界也不包含在匹配中。例如，【/\\Bon/】 在“at noon”中匹配“on” ，【/ye\\B/】 在 &quot;possibly yesterday&quot;中匹配&quot;ye&quot; 。</p></td></tr><tr><td>【《c;;n(?=x)》】</td><td><p><strong>先行断言：</strong> 《n 被 x 跟随》时匹配 n。</p><p>例如，对于【/Jack(?=Sprat)/】，“Jack”在跟有“Sprat”的情况下才会得到匹配。【/Jack(?=Sprat|Frost)/】 “Jack”后跟有“Sprat”或“Frost”的情况下才会得到匹配。不过，匹配结果不包括“Sprat”或“Frost”。</p></td></tr><tr><td>【《c;;n(?!x)》】</td><td><p><strong>先行否定断言：</strong> 《n 没有被 x 紧随》时匹配 n。</p><p>例如，对于【/\\d+(?!\\.)/】，数字后没有跟随小数点的情况下才会得到匹配。对于【/\\d+(?!\\.)/.exec(3.141)】，匹配‘141’而不是‘3’。</p></td></tr><tr><td class="nowrap">【《d;;(?&lt;=x)n》】</td><td><p><strong>后行断言：</strong> 《n 跟随 x 》的情况下匹配 n。</p><p> 例如，对于【/(?&lt;=Jack)Sprat/】，“Sprat”紧随“Jack”时才会得到匹配。对于【/(?&lt;=Jack|Tom)Sprat/】，“Sprat”在紧随“Jack”或“Tom”的情况下才会得到匹配。不过，匹配结果中不包括“Jack”或“Tom”。 </p></td></tr><tr><td>【《d;;(?&lt;!x)n》】</td><td><p><strong>后行否定断言：</strong> 《n 不跟随 x 》时匹配 n。</p><p>例如，对于【/(?&lt;!-)\\d+/】，数字不紧随 【-】 符号的情况下才会得到匹配。对于【/(?&lt;!-)\\d+/.exec(3)】 ，“3”得到匹配。 而【/(?&lt;!-)\\d+/.exec(-3)】的结果无匹配，这是由于数字之前有 【-】 符号。</p></td></tr></tbody></table></figure><p><strong>注意</strong>：【?】字符也可用作《量词》。</p><h3>一般边界类型概述示例</h3>',7),d=t("h3",null,"使用 【^】 匹配输入的开头",-1),h=t("p",null,"在这个例子中，我们可以通过 /^A/ 正则表达式得到以 A 开头的水果。这里的 【^】 只有一种含义：匹配输入的开头。",-1),u=t("p",null,"在下面这个示例中，【^】用于在输入的开始处匹配，以及在内部使用时用于创建否定或被补充的字符集组和范围。【/^[^A]/】 选择《不是以‘A’开头》的水果。",-1),m=t("h3",null,"匹配字边界",-1),_=t("p",null,"选择包含以“en”或“ed”结尾的单词的描述：",-1),f=t("h3",null,"先行断言",-1),y=t("h3",null,"先行否定断言",-1),b=t("p",null,"【/\\d+(?!\\.)/】 匹配没有被小数点跟随且至少有一位的数字。",-1),x=t("h3",null,"不同含义的【?!】",-1),A=t("p",null,"断言和范围的组合用法：结合使用断言 【/x(?!y)/】 和范围 【[^?!]】。",-1),v=t("h3",null,"后行断言",-1);function S(M,F){const o=s("code");return e(),n(a,null,[c,r((e(),n("pre",null,[i(`// 使用 正则表达式边界修复错误字符串
let buggyMultiline = \`tey, ihe light-greon apple
tangs on ihe greon traa\`;

// 1) 使用 《^》 修正字符串开始处和换行后的匹配。
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline); 
// 1 'hey, ihe light-greon apple\\nhangs on ihe greon traa'
// 修复 'tey'=>'hey'(字符串开始) , 'tangs'=>'hangs'(换行后)

// 2) 使用 《$》 修正字符串结尾处的匹配。
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline);
// 2 'hey, ihe light-greon apple\\nhangs on ihe greon tree.'
// 修复 'traa' => 'tree'.

// 3) 使用 《\\b》 修正单词和空格边界上的字符。
buggyMultiline = buggyMultiline.replace(/\\bi/gim,'t');
console.log(3, buggyMultiline);
// 3 'hey, the light-greon apple\\nhangs on the greon tree.'
// 修复 'ihe' => 'the'  不影响 'light'.

// 4) 使用 《\\B》 匹配实体边界内的字符。
const fixedMultiline = buggyMultiline.replace(/\\Bo/gim,'e');
console.log(4, fixedMultiline);
// 4 'hey, the light-green apple\\nhangs on the green tree.'
// 修复  'greon'  不影响'on'.`)])),[[o,void 0,"js"]]),d,h,r((e(),n("pre",null,[i(`let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]`)])),[[o,void 0,"js"]]),u,r((e(),n("pre",null,[i(`let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));
console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]`)])),[[o,void 0,"js"]]),m,_,r((e(),n("pre",null,[i(`let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

let enEdSelection = fruitsWithDescription.filter(descr => 《/(en|ed)\\b/》.test(descr));
console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]`)])),[[o,void 0,"js"]]),f,r((e(),n("pre",null,[i(`let regex = /First(?= test)/g;

console.log('First test'.match(regex));                        // [ 'First' ]
console.log('test First peach'.match(regex));                  // null
console.log('This is a First test in a year.'.match(regex));   // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null`)])),[[o,void 0,"js"]]),y,b,r((e(),n("pre",null,[i("console.log(/\\d+(?!\\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]")])),[[o,void 0,"js"]]),x,A,r((e(),n("pre",null,[i(`let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex));
// [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex));
// [ ' Yes, I do not want to have a lemon!' ]`)])),[[o,void 0,"js"]]),v,r((e(),n("pre",null,[i(`let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]`)])),[[o,void 0,"js"]])],64)}const ot=l(g,[["render",S]]);export{ot as default};
