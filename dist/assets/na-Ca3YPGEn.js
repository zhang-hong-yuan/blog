import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o as e,c as n,a4 as i,q as r,F as l,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},p=t("h1",null,"时间戳",-1),c=t("p",null,"时间戳是指1970年01月01日00时00分00秒（北京时间1970年01月01日08时00分00秒）起至现在的《总秒数》。",-1),d=t("p",null,"JavaScript 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。",-1),u=t("br",null,null,-1),_=t("p",null,"获得时间戳的方式的三种：【《+new Date()》】、【《date.getTime()》】、【《Date.now()》】。",-1),h={class:"nocopy"},v=t("p",null,"其内部实际是执行了将【new Date()】转换成【《Number》】类型，如果转换失败，就返回【《NaN》】。",-1),D=t("p",null,"【+new Date】会调用【Date.valueOf()】方法；【valueOf()】和直接 【《getTime()》】 是一样的效果。所以，以下是等价的：",-1),w=t("h1",null,"date.getTime()",-1),f=t("p",null,"【getTime()】 方法返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒距离该 Date 对象所代表时间的《毫秒数》（更早的时间会用负数表示）。",-1),g=t("p",null,"可以使用这个方法把一个日期时间赋值给另一个Date 对象。这个方法的功能和 【《valueOf()》】 方法一样。",-1),T={class:"nocopy"},y=t("h6",null,"测量代码执行时间",-1),I=t("p",null,"连续调用两个新生成的日期对象的 【getTime()】 方法，根据两次调用的返回值求得时间差。这可以用于计算某些操作的执行时间。避免生成不必要的Date对象另见【Date.now()】",-1),O=t("hr",null,null,-1),j=t("h1",null,"Date.now()",-1),N=t("p",null,"【Date.now()】 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。",-1),x={class:"nocopy"},k=t("p",null,"【Date.now()】只能得到《当前的时间戳》，其他方法可以返回指定时间的时间戳",-1),B=t("hr",null,null,-1),S=t("p",null,"倒计时效果：输入时间减去现在时间得到剩余的时间，即倒计时，但得用时间戳来做。",-1),b=t("ul",null,[t("li",null,"days = parseInt(《总秒数/60/60/24》);"),t("li",null,"hours = parseInt(《总秒数/60/60%24》);"),t("li",null,"minutes = parseInt(《总秒数/60%60》);"),t("li",null,"seconds = parseInt(《总秒数%60》);")],-1),q=t("div",null,`<template>
  <div>
    <time>距离{{ year }}年{{ month }}月{{ date }}还有：</time>
    <span>{{ remainder.day }}</span> 天
    <span>{{ remainder.hour }}</span> 时
    <span>{{ remainder.minute }}</span> 分
    <span>{{ remainder.second }}</span> 秒
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const targetTime = '2024-2-22'
const [year, month, date] = targetTime.split('-')
const remainder = reactive({ day: 0, hour: 0, minute: 0, second: 0 })

const timer = setInterval(countDown, 1000)
countDown()

function countDown() {
  const times = parseInt((+new Date(《year, month - 1, date》) - +new Date()) / 1000)
  if (times < 0) return clearInterval(timer)
  
  const format = value => parseInt(value).toString().padStart(2, '0')
  
  remainder.day    = format(times / 60 / 60 / 24)
  remainder.hour   = format(times / 60 / 60 % 24)
  remainder.minute = format(times / 60 % 60)
  remainder.second = format(times % 60)
}
<\/script>`,-1);function C(F,M){const o=a("code");return e(),n(l,null,[p,c,d,u,_,i((e(),n("pre",h,[r("var now = +new Date();")])),[[o,void 0,"js"]]),v,D,i((e(),n("pre",null,[r(`《+new Date()》
 《new Date().valueOf()》
 《new Date().getTime()》`)])),[[o,void 0,"js"]]),w,f,g,i((e(),n("pre",T,[r(`date.getTime()
date.valueOf()
`)])),[[o,void 0,"js"]]),y,I,i((e(),n("pre",null,[r(`var end, start, i;

start = 《a;;new Date()》;
for (i = 0; i < 100000; i++) Math.sqrt(i);
end = 《a;;new Date()》;

console.log("Operation took " + (《end.getTime() - start.getTime()》) + " msec");
`)])),[[o,void 0,"js"]]),O,j,N,i((e(),n("pre",x,[r("var timeInMs = 《Date.now()》;")])),[[o,void 0,"js"]]),k,B,S,b,i((e(),n("pre",null,[q,r(`
`)])),[[o,void 0,"html"]])],64)}const ut=s(m,[["render",C]]);export{ut as default};
