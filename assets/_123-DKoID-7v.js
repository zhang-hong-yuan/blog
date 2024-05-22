import{f as a}from"./flex-CEQKt5Ic.js";import{ao as x,o as n,c as l,e as t,q as e,a4 as i,m as f,L as r,F as c,at as o}from"./@vue-DejhS5Sx.js";import"./index-C58PDwY0.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p=t("h1",null,"flex-basis",-1),d=t("p",null,"CSS 属性 ‘flex-basis’ 指定了 flex 元素在主轴方向上的初始大小。如果不使用 ‘box-sizing’ 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒 ‘content-box’ 的尺寸。",-1),b=o('<section class="note"><strong>备注：</strong> 当一个元素同时被设置了 ‘flex-basis’ (除值为 ‘auto’ 外) 和 ‘width’ (或者在 ‘flex-direction: column’ 情况下设置了‘height’) , ‘flex-basis’ 具有更高的优先级。 </section><figure><table><tr><th>属性值</th><th>描述</th></tr><tr><td>‘&lt;&#39;width&#39;&gt;’</td><td>‘width’ 值可以是 ‘&lt;length&gt;;’ 该值也可以是一个相对于其父弹性盒容器主轴尺寸的百分数 。负值是不被允许的。默认为 ‘auto’。</td></tr><tr><td>‘content’</td><td>基于 flex 的元素的内容自动调整大小。这会导致即使元素设置了宽度，‘flex-basis’ 还是会根据内容大小进行设置。也可以通过设置 ‘flex-basis’ 为 ‘auto’ 并确保元素没有设置宽度来达到相同的效果，以便它能自动调整大小。</td></tr></table></figure><h6>示例</h6>',3),u=o(`<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>`,1),m=t("ul",{class:"container"},[e(`
  `),t("li",{class:"flex flex6"},"6: flex-basis test"),e(`
`)],-1),h=t("p",null,"CSS",-1),_=o('<p>结果</p><figure id="demo-20240409-0820"><ul class="container"><li class="flex flex1">1: flex-basis test</li><li class="flex flex2">2: flex-basis test</li><li class="flex flex3">3: flex-basis test</li><li class="flex flex4">4: flex-basis test</li><li class="flex flex5">5: flex-basis test</li></ul><ul class="container"><li class="flex flex6">6: flex-basis test</li></ul></figure><p>‘flex-basis’ 定义了该元素的<strong>空间大小</strong>，flex 容器里除了元素所占的空间以外的富余空间就是<strong>可用空间</strong>。该属性的默认值是 ‘auto’。此时，浏览器会检测这个元素是否具有确定的尺寸。在下面的例子中，所有元素都设定了宽度（width）为 100px，所以 ‘flex-basis’ 的值为 100px。</p>',3),g=t("p",null,"如果没有给元素设定尺寸，‘flex-basis’ 的值采用元素内容的尺寸。这就解释了：只要给 Flex 元素的父元素声明 ‘display: flex’，所有子元素就会排成一行，且自动分配小大以充分展示元素的内容。",-1),v=t("p",null,"空间分配时，如果你想要弹性盒子完全忽略元素的尺寸就需要设置 ‘flex-basis’ 为 0。这显式地说明弹性盒子可用抢占所有空间，并按比例进行分配。",-1),w=t("h2",null,"控制弹性元素在主轴上的比例",-1),S=t("p",null,"‘flex-basis’ 属性在任何空间分配发生之前初始化弹性元素的尺寸。此属性的初始值为 ‘auto’。如果 ‘flex-basis’ 设置为 auto，浏览器会先检查元素的主尺寸是否设置了绝对值再计算出它们的初始值。比如说已经给元素设置了 200px 的宽，则 200px 就是这个元素的 ‘flex-basis’。",-1),k=t("p",null,"如果元素为自动调整大小，则 ‘auto’ 会解析为其内容的大小。即，弹性盒子会将元素的 ‘max-content’ 大小作为 ‘flex-basis’。下面的实例可以证明这一点。",-1),y=t("p",null,"在这个示例中创建了一些固定的盒子，它们的 ‘flex-grow’ 和 ‘flex-shrink’ 都设置为 0。第一个元素，显式地设置其宽度为 150px，作为主尺寸，即设置 ‘flex-basis’ 为 150px，而另外两个元素没有设置宽度而是根据它们内容的宽度设置尺寸。",-1),z=t("div",{class:"box"},[e(`
  `),t("div",null,"One"),e(`
  `),t("div",null,"Two"),e(`
  `),t("div",null,"Three"),e(`
`)],-1),T=t("p",null,"CSS",-1),N=t("p",null,"结果：",-1),V=t("figure",{id:"demo-20240409-0805"},[t("div",{class:"box"},[t("div",null,"One"),t("div",null,"Two"),t("div",null,"Three")])],-1),rt={__name:"_123",setup(B){return(C,F)=>{const s=x("code");return n(),l(c,null,[p,d,t("pre",null,[e("		"),i((n(),l("code",null,[e(`
/* 指定 <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在 flex item 内容上的自动尺寸 */
flex-basis: content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
	`)])),[[s,void 0,"css"]]),e(`
`)]),b,t("pre",null,[e("	"),i((n(),l("code",null,[e(`
`),u,e(`

`),m,e(`
	`)])),[[s,void 0,"html",{escape:!0}]]),e(`
`)]),h,t("pre",null,[e("	"),i((n(),l("code",null,[e(`
		.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 { flex-basis: auto; }
.flex2 { flex-basis: max-content; }
.flex3 { flex-basis: min-content; }
.flex4 { flex-basis: fit-content; }
.flex5 { flex-basis: content; }
.flex6 { flex-basis: fill; }

.flex1:after { content: "auto"; }
.flex2:after { content: "max-content"; }
.flex3:after { content: "min-content"; }
.flex4:after { content: "fit-content"; }
.flex5:after { content: "content"; }
.flex6:after { content: "fill/-webkit-fill-available/-moz-available"; }
	`)])),[[s,void 0,"css"]]),e(`
`)]),_,f(r(a)),g,v,w,S,k,y,t("pre",null,[e("	"),i((n(),l("code",null,[e(`
`),z,e(`
	`)])),[[s,void 0,"html",{escape:!0}]]),e(`
`)]),T,t("pre",null,[e("	"),i((n(),l("code",null,[e(`
	.box {
		display: flex;
		border: 2px dotted #698aa5;
	}

	.box :first-child {
		width: 150px;
	}

	.box > * {
		flex: 0 0 auto;
		border: 2px solid #698aa5;
		border-radius: 8px;
		background-color: #e1e8ed;
	}
	`)])),[[s,void 0,"css"]]),e(`
`)]),N,V],64)}}};export{rt as default};
