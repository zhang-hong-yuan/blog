import{_ as p}from"./index-C58PDwY0.js";import{ao as m,o as t,c as e,a4 as i,q as r,F as l,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},c=o("h1",null,"RouterView 插槽",-1),u=o("p",null,"RotuerView 组件暴露了一个插槽，可以用来渲染路由组件：",-1),v=o("p",null,"上面的代码等价于不带插槽的 ‘【<router-view />】’，但是当想要获得其他功能时，插槽提供了额外的扩展性。",-1),a=o("h2",null,"KeepAlive & Transition",-1),_=o("p",null,"当在处理 ‘KeepAlive’ 组件时，通常是想要保持【路由】组件活跃，而不是 ‘RouterView’ 本身。为了实现这个目的，可以将 ‘KeepAlive’ 组件放置在插槽内：",-1),d=o("p",null,"类似地，插槽允许使用一个 ‘Transition’ 组件来实现在路由组件之间切换时实现过渡效果：",-1),h=o("p",null,"也可以在 ‘Transition’ 组件内使用 ‘KeepAlive’ 组件：",-1),w=o("h2",null,"模板引用",-1),C=o("p",null,"使用插槽可以直接将模板引用放置在路由组件上：",-1),f=o("p",null,"而如果将引用放在 ‘<router-view>’ 上，那引用将会被 ‘RouterView’ 的实例填充，而不是路由组件本身。",-1);function k(V,x){const n=m("code");return t(),e(l,null,[c,u,i((t(),e("pre",null,[r(`<router-view v-slot="{ Component }">
  <【component】 :is="Component" />
</router-view>
`)])),[[n,void 0,"html"]]),v,a,_,i((t(),e("pre",null,[r(`<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
`)])),[[n,void 0,"html"]]),d,i((t(),e("pre",null,[r(`<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
`)])),[[n,void 0,"html"]]),h,i((t(),e("pre",null,[r(`<router-view 【v-slot】="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
`)])),[[n,void 0,"html"]]),w,C,i((t(),e("pre",null,[r(`<router-view v-slot="{ Component }">
  <component :is="Component" 【ref】="mainContent" />
</router-view>
`)])),[[n,void 0,"html"]]),f],64)}const oo=p(s,[["render",k]]);export{oo as default};
