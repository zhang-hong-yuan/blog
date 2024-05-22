import{_ as r}from"./index-C58PDwY0.js";import{ao as c,o as n,c as e,a4 as t,q as s,F as i,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},a=o("h1",null,"数组解构",-1),d=o("p",null,"数组解构调用右侧的迭代协议。因此，任何可迭代对象(不一定是数组)都可以解构。",-1),u=o("p",null,"不可迭代对象不能解构为数组。",-1),_={class:"error"},h=o("br",null,null,-1),b=o("h5",null,"基本变量赋值：",-1),m=o("br",null,null,-1),g=o("h5",null,"解析一个从函数返回的数组",-1),f=o("p",null,"从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。",-1),v=o("br",null,null,-1),j=o("h5",null,"交换变量",-1),w=o("p",null,"可以在一个解构表达式中交换两个变量的值。没有解构赋值的情况下，交换两个变量需要一个临时变量。",-1),x=o("br",null,null,-1),y=o("h5",null,"忽略某些返回值",-1),z=o("p",null,"可以忽略不需要的返回值：",-1),N=o("br",null,null,-1),S=o("h5",null,"解构比源更多的元素",-1),E=o("p",null,"如果赋值语句左侧的变量数量大于要解构的数组长度，则多余变量的值将是未定义。",-1),F=o("br",null,null,-1),L=o("h5",null,"使用绑定模式作为剩余属性",-1),R=o("p",null,"数组解构赋值的剩余属性可以是另一个数组或对象绑定模式。这允许你同时提取数组的属性和索引。",-1),U=o("p",null,"这些绑定模式甚至可以嵌套，只要每个剩余属性都在列表的最后。",-1),B=o("p",null,"另一方面，对象解构只能有一个标识符作为剩余属性。",-1),C={class:"error"},J=o("br",null,null,-1),W=o("h5",null,"从正则表达式匹配项中提取值",-1),k=o("p",null,"当正则表达式的 【exec()】 方法找到匹配项时，它将返回一个数组，该数组首先包含字符串的整个匹配部分，然后返回与正则表达式中每个括号组匹配的字符串部分。解构赋值允许你轻易地提取出需要的部分，如果不需要，则忽略完整匹配。",-1);function D(P,T){const l=c("code");return n(),e(i,null,[a,d,t((n(),e("pre",null,[s(`const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);

console.log(a, b); // [1, 2] [3, 4]`)])),[[l,void 0,"js"]]),u,t((n(),e("pre",_,[s(`const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable`)])),[[l,void 0,"js"]]),h,b,t((n(),e("pre",null,[s(`const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;

console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // "three"`)])),[[l,void 0,"js"]]),m,g,f,t((n(),e("pre",null,[s(`function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2`)])),[[l,void 0,"js"]]),v,j,w,t((n(),e("pre",null,[s(`let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]`)])),[[l,void 0,"js"]]),x,y,z,t((n(),e("pre",null,[s(`function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1`)])),[[l,void 0,"js"]]),N,S,E,t((n(),e("pre",null,[s(`const foo = ["one", "two"];
const [red, yellow, green, blue] = foo;

console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // undefined
console.log(blue);   // undefined`)])),[[l,void 0,"js"]]),F,L,R,t((n(),e("pre",null,[s(`const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]

const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4`)])),[[l,void 0,"js"]]),U,t((n(),e("pre",null,[s(`const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6`)])),[[l,void 0,"js"]]),B,t((n(),e("pre",C,[s(`const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: \`...\` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: \`...\` must be followed by an assignable reference in assignment contexts`)])),[[l,void 0,"js"]]),J,W,k,t((n(),e("pre",null,[s(`function parseProtocol(url) {
  const parsedURL = /^(\\w+):\\/\\/([^/]+)\\/(.*)$/.exec(url);
  if (!parsedURL) return false;

  console.log(parsedURL);
  // ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "zh-CN/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"),
);
// "https"`)])),[[l,void 0,"js"]])],64)}const fo=r(p,[["render",D]]);export{fo as default};
