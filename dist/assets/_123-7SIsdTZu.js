import{_ as p}from"./index-C58PDwY0.js";import{ao as n,o,c as r,a4 as l,q as e,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},a=t("h1",null,"组件作用域 CSS",-1),c=t("p",null,"当 【<style>】 标签带有 【scoped】 attribute 的时候，它的 CSS 只会影响当前组件的元素：",-1),d=t("p",null,"转换为：",-1),_=t("p",null,"使用 【scoped】 后，父组件的样式将不会渗透到子组件中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。",-1),u=t("section",{class:"warning"},[t("header",null,"注意"),t("p",null,[t("b",null,"作用域样式并没有消除对 class 的需求。"),e("由于浏览器渲染各种各样 CSS 选择器的方式，【p { color: red }】 结合作用域样式使用时 (即当与 attribute 选择器组合的时候) 会慢很多倍。如果你使用 class 或者 id 来替代，例如 【.example { color: red }】，那你几乎就可以避免性能的损失。")]),t("p",null,[t("b",null,"小心递归组件中的后代选择器！"),e("对于一个使用了 【.a .b】 选择器的样式规则来说，如果匹配到 【.a】 的元素包含了一个递归的子组件，那么所有的在那个子组件中的 【.b】 都会匹配到这条样式规则。")])],-1);function h(v,f){const i=n("code");return o(),r(m,null,[a,c,l((o(),r("pre",null,[e(`<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
`)])),[[i,void 0,"html"]]),d,l((o(),r("pre",null,[e(`<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
`)])),[[i,void 0,"html"]]),_,u],64)}const W=p(s,[["render",h]]);export{W as default};
