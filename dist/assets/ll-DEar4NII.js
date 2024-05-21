import{_ as r}from"./index-C58PDwY0.js";import{ao as p,o as t,c as e,a4 as l,q as s,F as i,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=o("h1",null,"array.push()",-1),h=o("p",null,"【push()】方法《向数组的末尾添加一个或多个元素》，并返回《新的长度》。此方法《改变::是否改变？》数组的长度。",-1),m={class:"nocopy"},_=o("dl",null,[o("dt",null,"【elementN】"),o("dd",null,"添加到数组末尾的元素。")],-1),d=o("br",null,null,-1),u=o("p",null,"【push()】 方法是一个修改方法。它改变了 【this】 的内容和长度。如果希望 【this】 的值保持不变，但返回一个末尾追加了元素的新数组，可以使用 【《arr.concat([element0, element1, /* ... ,*/ elementN])》】 来代替。请注意，这些元素需要被包装在一个额外的数组中——否则，如果元素本身是一个数组，由于 【concat()】 的行为，它将《被展开而不是作为单个元素添加到原数组的末尾》。",-1),g=o("p",null,"【push()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适用于它，因为字符串是不可变的。",-1),y=o("h6",null,"在数组中添加元素",-1),b=o("h6",null,"合并两个数组",-1),v=o("p",null,"这个示例使用展开语法来将第二个数组的所有元素添加到第一个数组中。",-1),f=o("hr",null,null,-1),j=o("h1",null,"array.pop()",-1),k=o("p",null,"【pop()】方法用于《删除数组的最后一个元素》并返回《删除的元素》。此方法《改变::是否改变？》数组的长度！",-1),w={class:"nocopy"},F=o("p",null,"【pop()】 是修改方法。其改变了 【this】 的长度和内容。如果需要 【this】 不变，但是返回一个新的最后一个元素被移除的数组，可以使用 【《arr.slice(0, -1)》】 来代替。",-1),N=o("p",null,"【pop()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类数组对象，但是由于其不能被修改，所以 【pop()】 方法并不能应用在字符串上。",-1),x=o("h6",null,"删除掉数组的最后一个元素",-1),V=o("h6",null,"在非数组对象上调用 pop()",-1),B=o("p",null,"【pop()】 方法会读取 【this】 上的 【length】 属性。如果规范化的 【length】 属性为 0，【length】 会被再次设置为 0（鉴于之前可能是负数或者 【undefined】）。否则，返回并删除位于 【length - 1】 处的属性。",-1);function L(O,A){const n=p("code");return t(),e(i,null,[c,h,l((t(),e("pre",m,[s(`array.push()
array.push(element0)
array.push(element0, element1)
array.push(element0, element1, /* … ,*/ elementN)`)])),[[n,void 0,"js"]]),_,d,u,g,y,l((t(),e("pre",null,[s(`const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4`)])),[[n,void 0,"js"]]),b,v,l((t(),e("pre",null,[s(`const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 合并第二个数组到第一个数组中
vegetables.push(《...moreVegs》);
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']`)])),[[n,void 0,"js"]]),f,j,k,l((t(),e("pre",w,[s("array.pop()")])),[[n,void 0,"js"]]),F,N,x,l((t(),e("pre",null,[s(`const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'`)])),[[n,void 0,"js"]]),V,B,l((t(),e("pre",null,[s(`const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

console.log(Array.prototype.pop.call(arrayLike)); // 4
console.log(arrayLike); // { length: 2, unrelated: 'foo' }

const plainObj = {}; // 没有 length 属性，所以长度为 0
Array.prototype.pop.call(plainObj);

console.log(plainObj); // { length: 0 }`)])),[[n,void 0,"js"]])],64)}const ao=r(a,[["render",L]]);export{ao as default};
