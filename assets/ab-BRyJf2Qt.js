import{_ as p}from"./index-C58PDwY0.js";import{ao as c,o,c as r,a4 as n,q as i,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},l=t("h1",null,"异常处理",-1),a=t("p",null,"异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行。",-1),_=t("p",null,"通过【try/catch】捕获错误信息(浏览器提供的错误信息)。如果【try】代码段中出现错误后，会执行【catch】代码段，并截获到错误信息。【finally】不管是否有错误，都会执行。",-1),d=t("p",null,"【throw】抛出异常信息，程序也会终止执行；【Error】对象配合【throw】使用，能够设置更详细的错误信息。",-1),h=t("p",null,"【throw】可以抛出任意表达式而不是特定一种类型的表达式。下面的代码抛出了几个不同类型的表达式：",-1),u=t("p",null,"【debugger】相当于打断点。",-1);function f(y,g){const e=c("code");return o(),r(m,null,[l,a,_,n((o(),r("pre",null,[i(`try {
	const p = document.querySelector('.p')
	p.style.color = 'red'
} catch (err) {
	console.log(err.message) // Cannot read properties of null (reading 'style')
	throw new Error('选择器错误') // Uncaught Error: 选择器错误
}

finally {
	alert('弹出对话框')
}

console.log(11) // 不执行`)])),[[e,void 0,"js"]]),d,h,n((o(),r("pre",null,[i(`throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};`)])),[[e,void 0,"js"]]),u],64)}const X=p(s,[["render",f]]);export{X as default};
