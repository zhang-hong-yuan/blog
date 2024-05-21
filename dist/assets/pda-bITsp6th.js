import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o as t,c as o,a4 as e,q as s,F as i,e as n,at as p}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=n("h1",null,"function.apply()",-1),u=n("p",null,"【Function】 实例的 【apply()】 方法会以《给定的 【this】 值》和《作为数组（或类数组对象）》提供的 【arguments】 调用该函数。",-1),d=n("p",null,"【apply()】 返回值《也是函数的返回值》，因为它也是调用函数。【apply()】 主要跟《数组》有关系。",-1),h=p('<dl><dt>【thisArg】</dt><dd>调用 【《func》】 时提供的 【this】 值。如果函数不处于严格模式，则 【null】 和 【undefined】 会被替换为《全局对象》，原始值会被转换为对象。</dd><dt>【argsArray】<span class="optional">可选</span></dt><dd>一个《类数组对象》，用于指定《调用 【func】 时的参数》，或者如果不需要向函数提供参数，则为 【《a;;null》】 或 【《a;;undefined》】。</dd></dl><section class="note"><header>备注：<span>这个函数与 【《call()》】 几乎完全相同，只是函数参数在 【call()】 中《逐个作为列表》传递，而在 【apply()】 中《它们会组合在一个对象中，通常是一个数组》——例如，【func.call(this, 《&quot;eat&quot;, &quot;bananas&quot;》)】 与 【func.apply(this, 《[&quot;eat&quot;, &quot;bananas&quot;]》)】。</span></header></section><p>通常情况下，在调用函数时，函数内部的 【this】 的值是《访问该函数的对象》。使用 【apply()】，可以在调用现有函数时将任意值分配给 【this】，而无需先将函数作为《属性》附加到对象上。这使得可以将一个对象的方法用作《通用的实用函数》。</p><p>还可以使用任何《类数组对象》作为第二个参数。实际上，这意味着它需要具有 【《length》】 属性，并且整数（“索引”）属性的范围在 【《(0 ~ length - 1)》】 之间。例如，可以使用一个 【NodeList】，或者像 【{ &#39;length&#39;: 2, &#39;0&#39;: &#39;eat&#39;, &#39;1&#39;: &#39;bananas&#39; }】 这样的自定义对象。还可以使用 【arguments】，例如：</p>',4),_=n("p",null,"使用剩余参数和参数的展开语法，可以重写为：",-1),y=n("p",null,"一般而言，【《fn.apply(null, args)》】 等同于使用参数展开语法的 【《fn(...args)》】，只是在前者的情况下，【args】 期望是类数组对象，而在后者的情况下，【args】 期望是可迭代对象。",-1),f=n("h6",null,"用 apply() 将数组各项添加到另一个数组",-1),g=n("p",null,"可以使用 【Array.push()】 方法将元素追加到数组中。因为 【push()】 接受《可变数量》的参数，所以也可以一次性添加多个元素。但是，如果将一个数组传递给 【push()】，它实际上会将该数组作为《单个元素》添加，而不是逐个添加元素，导致最终得到一个数组内嵌的数组。另一方面，【Array.concat()】 在这种情况下具有期望的行为，但它不会将元素追加到已有数组中，而是创建并返回一个新数组。 ",-1),b=n("p",null,"在这种情况下，可以使用 【apply()】 隐式地将一个数组作为《一系列参数》展开。",-1),x=n("p",null,"使用展开语法可以达到相同的效果。",-1),v=n("h6",null,"使用 apply() 和内置函数",-1),q=n("p",null,"巧妙地使用 【apply()】 可以在某些情况下使用内置函数来完成一些任务，而这些任务通常需要手动遍历集合（或使用展开语法）。",-1),j=n("p",null,"例如，可以使用 【《b;;Math.max()》】 和 【《b;;Math.min()》】 来找出数组中的最大值和最小值。",-1),A=n("p",null,"与基于简单循环的算法相比：",-1);function M(F,N){const a=l("code");return t(),o(i,null,[c,u,d,e((t(),o("pre",null,[s(`func.apply(thisArg)
func.apply(thisArg, argsArray)`)])),[[a,void 0,"js"]]),h,e((t(),o("pre",null,[s(`function wrapper() {
  return anotherFn.apply(《null, arguments》);
}`)])),[[a,void 0,"js"]]),_,e((t(),o("pre",null,[s(`function wrapper(...args) {
  return anotherFn(《...args》);
}`)])),[[a,void 0,"js"]]),y,f,g,b,e((t(),o("pre",null,[s(`const array = ["a", "b"];
const elements = [0, 1, 2];
《array.push.apply(array, elements);》
console.info(array); // ["a", "b", 0, 1, 2]`)])),[[a,void 0,"js"]]),x,e((t(),o("pre",null,[s(`const array = ["a", "b"];
const elements = [0, 1, 2];
《array.push(...elements);》
console.info(array); // ["a", "b", 0, 1, 2]`)])),[[a,void 0,"js"]]),v,q,j,e((t(),o("pre",null,[s(`const numbers = [5, 6, 2, 3, 7];

// 这等价于 Math.max(numbers[0], …) 或 Math.max(5, 6, …)
let max = 《c;;Math.max.apply(null, numbers)》;
let min = 《c;;Math.min.apply(null, numbers)》;

console.log('max: '+ max)
console.log('min: '+ min)`)])),[[a,void 0,"js"]]),A,e((t(),o("pre",null,[s(`const numbers = [5, 6, 2, 3, 7];

let max = -Infinity;
let min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log('max: '+ max)
console.log('min: '+ min)`)])),[[a,void 0,"js"]])],64)}const sn=r(m,[["render",M]]);export{sn as default};
