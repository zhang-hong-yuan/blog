import{_ as r}from"./index-C58PDwY0.js";import{ao as p,o as t,c as i,a4 as l,q as n,F as s,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=o("h1",null,"递归函数",-1),u=o("p",null,[n("一个函数可以指向并调用自身，调用自身的函数称之为"),o("strong",null,"递归函数"),n("。有三种方法可以达到这个目的：")],-1),d=o("ol",null,[o("li",null,"函数名"),o("li",null,"【arguments.callee】"),o("li",null,"作用域内一个指向该函数的变量名")],-1),_=o("p",null,"在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件(避免无限循环，或者在这种情况下更确切地说是无限递归)。",-1),a=o("p",null,"例如：",-1),f=o("p",null,"递归函数的写法：",-1),h=o("p",null,"不过，有些算法并不能简单的用迭代来实现。例如，获取树结构(【DOM】)中所有的节点时，使用递归实现要容易得多：",-1),x=o("p",null,"跟 【loop】 函数相比，这里每个递归调用都产生了更多的递归调用。将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。",-1),v=o("p",null,[n("事实上，递归本身就使用了栈："),o("u",null,"函数栈"),n("。类似栈的行为可以在以下示例中看到：")],-1);function g(j,k){const e=p("code");return t(),i(s,null,[m,u,d,l((t(),i("pre",null,[n(`const foo = function bar() {
	// 在这个函数体内，以下的语句是等价的：
	bar()
	arguments.callee()
	foo()
};`)])),[[e,void 0,"js"]]),_,a,l((t(),i("pre",null,[n(`let x = 0;
// “x < 10”是循环条件
while (x < 10) {
  // 做些什么
  x++;
}`)])),[[e,void 0,"js"]]),f,l((t(),i("pre",null,[n(`function loop(x) {
  // “x >= 10”是退出条件（等同于“!(x < 10)”）
  if (x >= 10) return;

  // 做些什么
  loop(x + 1); // 递归调用
}

loop(0);`)])),[[e,void 0,"js"]]),h,l((t(),i("pre",null,[n(`function walkTree(node) {
  if (node === null) return;
  // 对节点做些什么
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}`)])),[[e,void 0,"js"]]),x,v,l((t(),i("pre",null,[n(`function foo(i) {
  if (i < 0) return;
	
  console.log(\`开始：\${i}\`);
  foo(i - 1);
  console.log(\`结束：\${i}\`);
}
foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3`)])),[[e,void 0,"js"]])],64)}const Z=r(c,[["render",g]]);export{Z as default};
