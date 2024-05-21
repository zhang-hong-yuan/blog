import{_ as p}from"./index-C58PDwY0.js";import{ao as s,o,c as e,a4 as r,q as n,F as c,at as l,e as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},a=l("<h1>深浅拷贝</h1><p>浅拷贝和深拷贝只针对引用类型。浅拷贝拷贝的是地址；深拷贝拷贝的是对象。</p><p>比如：<code>Object.assgin()</code>、<code>{...obj}</code>、<code>Array.prototype.concat()</code> 和 <code>[...arr]</code> 都是<strong>浅拷贝</strong>。</p><ul><li>直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址</li><li>浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响</li></ul><p><strong>深拷贝</strong>常见方法：⓵递归；⓶lodash/cloneDeep；⓷JSON.stringify()</p><p>递归函数是指一个函数在内部调用其本身。由于递归很容易发生“栈溢出”错误(stack overflow)，所以必须要加退出条件 return。</p>",6),d=i("p",null,"js库 lodash 里面 cloneDeep：",-1),j=i("p",null,"通过JSON.stringify()",-1);function b(O,_){const t=s("code");return o(),e(c,null,[a,r((o(),e("pre",null,[n(`function deepCopy(newObj, oldObj) {
    for (let k in oldObj) {
        if (oldObj[k] instanceof Array) {
            newObj[k] = []
            deepCopy(newObj[k], oldObj[k])
        } else if (oldObj[k] instanceof Object) {
            newObj[k] = {}
            deepCopy(newObj[k], oldObj[k])
        } else {
            newObj[k] = oldObj[k]
        }
    }
}`)])),[[t,void 0,"js"]]),d,r((o(),e("pre",null,[n(`const obj = { ... }
const o = _.cloneDeep(obj)`)])),[[t,void 0,"js"]]),j,r((o(),e("pre",null,[n(`const obj = { ... }
const o = JSON.parse(JSON.stringify(obj))`)])),[[t,void 0,"js"]])],64)}const U=p(m,[["render",b]]);export{U as default};
