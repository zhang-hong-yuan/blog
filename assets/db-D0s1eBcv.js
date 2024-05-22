import{_ as m}from"./index-C58PDwY0.js";import{ao as p,o,c as e,a4 as i,q as r,F as s,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},l=t("h1",null,"query",-1),a=t("p",null,"传递参数：",-1),u=t("div",null,`<!-- 跳转并携带query参数（to的字符串写法） -->
<router-link to="/news/detail【?】a=1【a;;&】b=2【a;;&】content=欢迎你">
  跳转
</router-link>
				
<!-- 跳转并携带query参数（to的对象写法） -->
<RouterLink 
  :to="{
    // name: 'xiang', //用name也可以跳转
    path: '/news/detail',
    【query】: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  }"
>
  {{ news.title }}
</RouterLink>`,-1),d=t("p",null,"接收参数：",-1);function _(h,f){const n=p("code");return o(),e(s,null,[l,a,i((o(),e("pre",null,[r(""),u,r(`
`)])),[[n,void 0,"html"]]),d,i((o(),e("pre",null,[r(`import {useRoute} from 'vue-router'
const route = useRoute()
// 打印query参数
console.log(【route.query】)
`)])),[[n,void 0,"js"]])],64)}const U=m(c,[["render",_]]);export{U as default};
