import{_ as i}from"./index-C58PDwY0.js";import{ao as m,o as n,c as e,e as o,q as t,a4 as p,F as s,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},c=o("h1",null,"@keyframes",-1),f=o("p",null,"关键帧 ‘@keyframes’ at-rule 规则通过在动画序列中定义关键帧的样式来控制 CSS 动画序列中的中间步骤。和 转换 ‘transition’ 相比，关键帧 ‘keyframes’ 可以控制动画序列的中间步骤。 ",-1),_=a("<p>要使用关键帧，先创建一个带名称的 ‘@keyframes’ 规则，以便后续使用 ‘animation-name’ 属性将动画同其关键帧声明匹配。每个 ‘@keyframes’ 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。</p><p>可以按任意顺序列出关键帧百分比；它们将按照其应该发生的顺序来处理。‘from’ 等价于 ‘0%’。‘to’ 等价于 ‘100%’。</p><h3>让关键帧序列生效</h3><p>如果一个关键帧规则没有指定动画的开始或结束状态（也就是，‘0%’/‘from’ 和 ‘100%’/‘to’，浏览器将使用元素的现有样式作为起始/结束状态。这可以用来从初始状态开始元素动画，最终返回初始状态。</p><p>如果在关键帧的样式中使用了不能用作动画的属性，那么这些属性会被忽略掉，支持动画的属性仍然是有效的，不受波及。</p><h3>重复定义</h3><p>如果多个关键帧使用同一个名称，以最后一次定义的为准。 ‘@keyframes’ 不存在层叠样式 (cascade) 的情况，所以动画在一个时刻（阶段）只会使用一个的关键帧的数据。</p><p>如果一个 ‘@keyframes’ 内的关键帧的百分比存在重复的情况，则 ‘@keyframes’ 规则中该百分比的所有关键帧都将用于该帧。如果多个关键帧指定了相同的百分比值，则 ‘@keyframes’ 规则内是可以使用层叠样式的。</p><h3>属性个数不定</h3><p>如果一个关键帧中没有出现其他关键帧中的属性，那么这个属性将使用插值（不能使用插值的属性除外，这些属性会被忽略掉）。例如：</p>",10),d=o("p",null,"例子中，‘top’ 属性分别出现在关键帧 ‘0%’、‘30%’ 和 ‘100%’ 的中，而 ‘left’ 属性分别出现在关键帧 ‘0%’、‘68%’、‘72%’ 和 ‘100%’ 中。",-1),u=o("h3",null,"同一关键帧中的相同属性被重复定义",-1),h=o("p",null,"如果某一个关键帧出现了重复的定义，且重复的关键帧中的 CSS 属性值不同，则以最后一次定义的属性为准。例如：",-1),x=o("p",null,"上面这个例子中，‘50%’ 关键帧中分别最后设置的属性 ‘top: 10px’ 和 ‘left: 20px’ 是有效的，但是其他的属性会被忽略。",-1),k=o("h3",null,"关键帧中的 !important",-1),y=o("p",null,"关键帧中出现的 ‘!important’ 将会被忽略。",-1);function g(v,S){const r=m("code");return n(),e(s,null,[c,f,o("pre",null,[t("		"),p((n(),e("code",null,[t(`
@keyframes slidein {
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
}
		`)])),[[r,void 0,"css"]]),t(`
	`)]),_,o("pre",null,[t("		"),p((n(),e("code",null,[t(`
@keyframes identifier {
  0%       { top: 0;     left: 0;    }
  30%      { top: 50px;              }
  68%, 72% {             left: 50px; }
  100%     { top: 100px; left: 100%; }
}
		`)])),[[r,void 0,"css"]]),t(`
	`)]),d,u,h,o("pre",null,[t("		"),p((n(),e("code",null,[t(`
@keyframes identifier {
  0%   { top: 0;                }
  50%  { top: 30px; left: 20px; }
  50%  { top: 10px;             }
  100% { top: 0;                }
}
		`)])),[[r,void 0,"css"]]),t(`
	`)]),x,k,y,o("pre",null,[t("		"),p((n(),e("code",null,[t(`
@keyframes important1 {
  from { margin-top: 50px; }
  50%  { margin-top: 150px !important; } /* 忽略 */
  to   { margin-top: 100px; }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* 忽略 */
    margin-bottom: 50px;
  }
}
		`)])),[[r,void 0,"css"]]),t(`
	`)])],64)}const tt=i(l,[["render",g]]);export{tt as default};
