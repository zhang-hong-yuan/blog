import{_ as l}from"./index-C58PDwY0.js";import{ao as r,o,c as e,a4 as s,q as t,F as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},c=n("h1",null,"array.unshift()",-1),p=n("p",null,"【unshift()】方法可向数组的《开头》添加一个或更多元素，并返回《新的长度》。《改变::是否改变？》数组的长度。",-1),u=n("p",null,"如果希望保持 【this】 的值不变，【unshift(v1, v2)】相应的非修改方法：【《toSpliced(0, 0, v1, v2)》】",-1),d={class:"nocopy"},f=n("dl",null,[n("dt",null,"【element0, element1, /* … ,*/ elementN】"),n("dd",null,"添加到 array 开头的元素。")],-1),m=n("p",null,"多个元素作为参数传递，它们将被插入到对象开头的块中，与它们作为参数传递的顺序完全相同。因此，调用一次 【unshift()】 方法并传递 【n】 个参数，与调用 【n】 次并传递 1 个参数（例如使用循环），《不会::会不会？》产生相同的结果。 ",-1),_=n("h6",null,"使用 unshift()",-1),y=n("h6",null,"在非数组对象中使用 unshift()",-1),g=n("p",null,"【unshift】 方法会读取 【this】 的 【length】 属性。然后，它将 【0】 到 【length - 1】 范围内的所有属性按参数数量右移，并将每个索引从 【0】 开始，并将参数传递给 【unshift()】。最后，它将 【length】 设置为之前的长度加上前置元素的数量。",-1),v=n("hr",null,null,-1),j=n("h1",null,"array.shift()",-1),k=n("p",null,[t("【shift()】方法用于《把数组的第一个元素从其中删除》，并返回《第一个元素的值》，如果数组为空则返回 【《undefined》】。"),n("em",null,"《改变::是否改变？》"),t("数组的长度！没有参数。")],-1),w={class:"nocopy"},F=n("p",null,"【shift】 方法移除索引为 0 的元素，并将后续元素的下标依次向前移动，然后返回被移除的元素。如果 【length】 属性的值为 0，则返回 【undefined】。",-1),b=n("p",null,"【shift()】 方法是一个改变方法。它改变了 【this】 的内容和长度。如果希望保持 【this】 的值不变，但返回一个删除了第一个元素的新数组，可以使用 【《arr.slice(1)》】。",-1),A=n("p",null,"【shift()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。",-1),L=n("h6",null,"移除数组中的一个元素",-1),O=n("p",null,"以下代码显示了删除其第一个元素之前和之后的 【myFish】 数组。它还显示已删除的元素：",-1),x=n("h6",null,"在 while 循环中使用 shift()",-1),N=n("p",null,"【shift()】 方法经常用于 【while】 循环的条件中。下例中每次迭代都会从一个数组中移除下一项元素，直至它成为空数组。",-1),B=n("h6",null,"在非数组对象上调用 shift()",-1),T=n("p",null,"【shift】 方法会读取 【this】 的 【length】 属性。如果规范化长度为 0，【length】 再次设置为 0（而之前可能为负值或 【undefined】）。否则，返回 0 处的属性，其余属性向左移动 1。【length】 属性递减 1。",-1);function D(G,M){const i=r("code");return o(),e(a,null,[c,p,u,s((o(),e("pre",d,[t(`array.unshift()
array.unshift(element1)
array.unshift(element1, element2)
array.unshift(element1, element2, /* …, */ elementN)`)])),[[i,void 0,"js"]]),f,m,s((o(),e("pre",null,[t(`let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr); // 《a;;[1, 2, 3, 4, 5, 6]》

arr = [4, 5, 6]; // 重置数组

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr); // 《a;;[3, 2, 1, 4, 5, 6]》
`)])),[[i,void 0,"js"]]),_,s((o(),e("pre",null,[t(`const arr = [1, 2];

arr.unshift(0); // 调用的结果是 3，这是新的数组长度。
// 数组是 [0, 1, 2]

arr.unshift(-2, -1); // 新的数组长度是 5
// 数组是 [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // 新的数组长度是 6
// 数组是 [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 新的数组长度是 8
// 数组是 [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]`)])),[[i,void 0,"js"]]),y,g,s((o(),e("pre",null,[t(`const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以这里的长的为 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }`)])),[[i,void 0,"js"]]),v,j,k,s((o(),e("pre",w,[t("array.shift()")])),[[i,void 0,"js"]]),F,b,A,L,O,s((o(),e("pre",null,[t(`const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("调用 shift 之前：", myFish);
// 调用 shift 之前： ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("调用 shift 之后：", myFish);
// 调用 shift 之后： ['clown', 'mandarin', 'surgeon']

console.log("被删除的元素：" + shifted);
// "被删除的元素：angel"`)])),[[i,void 0,"js"]]),x,N,s((o(),e("pre",null,[t(`const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== 《"undefined"》) 
  console.log(i);

// Andrew, Tyrone, Paul, Maria, Gayatri`)])),[[i,void 0,"js"]]),B,T,s((o(),e("pre",null,[t(`const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined，因为它是一个空槽
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以长度为 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }`)])),[[i,void 0,"js"]])],64)}const dn=l(h,[["render",D]]);export{dn as default};
