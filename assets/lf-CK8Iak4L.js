import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as t,c as n,a4 as i,q as e,F as a,e as o,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},d=o("h1",null,"array.join()",-1),_=o("p",null,"【join()】 方法将一个数组（或一个类数组对象）的所有元素连接成一个《a;;字符串》并返回这个《a;;字符串》，用《b;;逗号》或《b;;指定的分隔符字符串》分隔。",-1),u=o("p",null,"如果数组只有一个元素，那么将返回该元素而《不使用::是否使用？》分隔符。",-1),j={class:"nocopy"},m=c('<dl><dt>【separator】<span class="optional">可选</span></dt><dd><p>指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为《字符串》。</p><ul><li>如果省略该参数，则使用《逗号【,】》作为分隔符。</li><li>如果 【separator】 是空字符串【&quot;&quot;】，则所有元素之间都《没有任何字符》。</li></ul></dd></dl><br><p>如果一个元素是 【undefined】 或 【null】，它将被转换为《空字符串》，而不是字符串 【&quot;undefined&quot;】 或 【&quot;null&quot;】。</p><p>当在稀疏数组上使用时，【join()】 方法迭代空槽，就像它们的值为 【《undefined》】 一样。</p><h6>使用不同的方式连接数组</h6>',5),h=o("h6",null,"在稀疏数组上使用 join()",-1),g=o("h6",null,"在非数组对象上调用 join()",-1),y=o("p",null,"【join()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。",-1),S=o("hr",null,null,-1),f=o("h1",null,"array.toString()",-1),v=o("p",null,"【toString()】 方法返回一个《字符串》，表示指定的数组及其元素。",-1),b={class:"nocopy"},W=o("p",null,"当数组需要被表示为《文本》值，或者当数组在字符串拼接中被引用时，JavaScript 会自动调用 【toString()】 方法。",-1),A=o("p",null,"Array 对象覆盖了 Object 的 【toString()】 方法。数组的 【toString()】 方法实际上在内部调用了 【《join()》】 方法来拼接数组并返回一个包含所有数组元素的字符串，元素之间用《逗号》分隔。如果 【join()】 方法不可用或者不是函数，则会使用 【Object.toString()】 来代替，并返回 【《[object Array]》】。",-1),q=o("h6",null,"示例",-1),F=o("h6",null,"在稀疏数组中使用 toString()",-1),k=o("p",null,"与 【join()】 的行为一致，【toString()】 将空槽视为 【undefined】 并生成一个额外的分隔符：",-1),x=o("h6",null,"在非数组对象中使用 toString()",-1),O=o("p",null,"【toString()】 是通用的。它期望 【this】 具有 【join()】 方法；如果不存在，则使用 【Object.toString()】。",-1);function B(L,N){const r=s("code");return t(),n(a,null,[d,_,u,i((t(),n("pre",j,[e(`array.join()
array.join(separator)`)])),[[r,void 0,"js"]]),m,i((t(),n("pre",null,[e(`const a = ["Wind", "Water", "Fire"];
a.join();      // 'Wind,Water,Fire'
a.join(", ");  // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join("");    // 'WindWaterFire'`)])),[[r,void 0,"js"]]),h,i((t(),n("pre",null,[e(`console.log([1, , 3].join());          // 《c;;'1,,3'》
console.log([1, undefined, 3].join()); // 《c;;'1,,3'》`)])),[[r,void 0,"js"]]),g,y,i((t(),n("pre",null,[e(`const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.join.call(arrayLike));      // 2,3,4
console.log(Array.prototype.join.call(arrayLike, ".")); // 2.3.4`)])),[[r,void 0,"js"]]),S,f,v,i((t(),n("pre",b,[e("array.toString()")])),[[r,void 0,"js"]]),W,A,i((t(),n("pre",null,[e(`const arr = [];
arr.join = 1; // 将 \`join\` 重新赋值为非函数的值
console.log(arr.toString()); // 《[object Array]》

console.log(Array.prototype.toString.call({ join: () => 1 })); // 《1》`)])),[[r,void 0,"js"]]),q,i((t(),n("pre",null,[e(`const array = [1, 2, "a", "1a"];
console.log(array.toString()); // 《"1,2,a,1a"》`)])),[[r,void 0,"js"]]),F,k,i((t(),n("pre",null,[e("console.log([1, , 3].toString()); // 《'1,,3'》")])),[[r,void 0,"js"]]),x,O,i((t(),n("pre",null,[e(`console.log(Array.prototype.toString.call({ join: () => 1 }));         // 1; 一个数字
console.log(Array.prototype.toString.call({ join: () => undefined })); // undefined
console.log(Array.prototype.toString.call({ join: "not function" }));  // "[object Object]"`)])),[[r,void 0,"js"]])],64)}const po=l(p,[["render",B]]);export{po as default};
