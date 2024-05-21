import{_ as i}from"./index-C58PDwY0.js";import{ao as e,o as t,c as o,a4 as n,q as m,F as p,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},a=s("<h1>预解析</h1><p>顺序结构是最简单、最基本的流程控制，没有特定语法，程序会按照代码的先后顺序，依次执行，大多数的代码都是这样执行的。</p><p>js 引擎运行 js 代码分为两步：</p><ol><li>预解析。js 引擎会把 js 代码里面所有的 【var】 还有 【function】 提升到当前作用域的最前面。</li><li>代码执行。按照代码书写的顺序从上往下执行。</li></ol><p>预解析分为<u>变量预解析(变量提升)</u>和<u>函数预解析(函数提升)</u>。</p><ul><li><strong>变量提升</strong>就是把所有的变量声明提升到当前的作用域最前面，不提升赋值操作。</li><li><strong>函数提升</strong>就是把所有的函数声明提升到当前作用域的最前面，不调用函数。注意：函数提升仅适用于函数声明，而不适用于函数表达式。</li></ul><br><p>【let】 和 【const】 同样会被提升变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误(ReferenceError)。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。</p><p><strong>注意：</strong>let 和 const 会发生暂存性死区，var 不会：</p>",9);function l(u,_){const r=e("code");return t(),o(p,null,[a,n((t(),o("pre",null,[m(`let myname = "kerwin"
test()
function test() {
	console.log(myname)  // 报错
	let myname = "tiechui"
}

//----------------------
const myname ="kerwin"
test()
function test(){
    console.log(myname)  // 报错
    const myname = "tiechui"
}`)])),[[r,void 0,"js"]])],64)}const O=i(c,[["render",l]]);export{O as default};
