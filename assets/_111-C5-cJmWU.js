import{_ as r}from"./index-C58PDwY0.js";import{ao as d,o as e,c as o,e as n,q as t,a4 as i,F as c,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const x={},a=n("h1",null,"flex-shrink",-1),p=n("p",null,[t("‘flex-shrink’ 属性指定了"),n("strong",null,"弹性收缩因子"),t("（flex shrink factor），它确定在分配负可用空间时，弹性元素相对于弹性容器中其余弹性元素收缩的程度。")],-1),h=n("p",null,"‘flex-shrink’ 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 ‘flex-shrink’ 的值。",-1),u=n("p",null,"该属性用于处理浏览器计算弹性元素的 ‘flex-basis’ 值，并发现它们太大以至于无法适应弹性容器的情形。只要 ‘flex-shrink’ 有正值，元素就会收缩以至于它们不会溢出容器。",-1),f=n("p",null,"因此 ‘flex-grow’ 用于添加可用空间，而 ‘flex-shrink’ 减少空间来使盒子适应它们的容器而不溢出。",-1),_=n("figcaption",null,"示例",-1),v=n("p",null,"下面示例中弹性容器有三个元素，每一个设置了 200px 的宽度，并且设置容器为 500px 宽。分别设置 ‘flex-shrink’ 为 0 和 1。",-1),b=n("ul",null,[n("li",null,"‘flex-shrink’ 为 0 的元素不允许收缩，以使它们溢出了盒子；"),n("li",null,"‘flex-shrink’ 值为 1 的元素都收缩了同样大小的量，以至所有元素都适应盒子。这样做后它们已变得比它们的初始宽度还小。")],-1),m=n("div",{class:"box shrink-0"},[t(`
  `),n("div",null,"One"),t(`
  `),n("div",null,"Two"),t(`
  `),n("div",null,"Three has more content"),t(`
`)],-1),k=n("div",{class:"box shrink-1"},[t(`
  `),n("div",null,"One"),t(`
  `),n("div",null,"Two"),t(`
  `),n("div",null,"Three has more content"),t(`
`)],-1),g=n("p",null,"CSS",-1),w=n("p",null,"结果",-1),y=n("figure",{id:"demo-20240409-1019"},[n("div",{class:"box shrink-0"},[n("div",null,"One"),n("div",null,"Two"),n("div",null,"Three has more content")]),n("div",{class:"box shrink-1"},[n("div",null,"One"),n("div",null,"Two"),n("div",null,"Three has more content")])],-1),T=n("figcaption",null,"示例",-1),D=n("p",null,"HTML",-1),B=n("p",null,"CSS",-1),C=s('<p>结果</p><figure id="demo-20240409-1003"><p>the width of content is 500px, flex-basic of flex item is 120px.</p><p>A, B, C are flex-shrink:1. D and E are flex-shrink:2</p><p>the width of D is not the same as A&#39;s</p><div id="content"><div class="box" style="background-color:red;">A</div><div class="box" style="background-color:lightblue;">B</div><div class="box" style="background-color:yellow;">C</div><div class="box1" style="background-color:brown;">D</div><div class="box1" style="background-color:lightgreen;">E</div></div></figure>',2),S=n("p",null,"如果 flex 容器中没有足够排列 flex 元素的空间（即：只有在 flex 元素总和超出主轴才会生效），那么可以把 flex 元素 ‘flex-shrink’ 属性设置为正整数来缩小它所占空间到 ‘flex-basis’ 以下。",-1),A=n("p",null,"与 ‘flex-grow’ 属性一样，可以赋予不同的值来控制 flex 元素收缩的程度——给 ‘flex-shrink’ 属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。",-1),O=n("p",null,"在计算 flex 元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上 ‘flex-shrink’ 属性可能会和 ‘flex-grow’ 属性表现的不一致。",-1),E=n("br",null,null,-1),N=n("section",{class:"note"},[n("strong",null,"备注："),t(" 在给 ‘flex-grow’ 和 ‘flex-shrink’ 赋值时要注意比例。如果给所有 flex 元素的 ‘flex’ 属性赋值为 ‘1 1 200px’ ，并且希望其中一个元素可以增加到 2 倍，可以给该元素的 ‘flex’ 属性赋值为 ‘2 1 200px’。当然，也可以选择赋值为 ‘flex: 10 1 200px’ 和 ‘flex: 20 1 200px’。 ")],-1),V=n("figcaption",null,"给元素设置不同的 flex-shrink 因子",-1),F=n("p",null,"在 ‘flex-grow’ 值相同的情形下，可以给弹性元素设置不同的 ‘flex-shrink’ 因子。假如想让一个元素比它的兄弟元素收缩的更快或更慢，或者不再收缩，这会改变它的默认行为。",-1),q=n("p",null,"在下面的示例中第一个元素设置 ‘flex-shrink’ 的值为 1、第二个为 0（因此它将不会收缩）、第三个为 4。第三个元素比第一个收缩的更快。任意设置不同的值——可以给 ‘flex-grow’ 使用小数或者大一点的数。 ",-1),G=n("div",{class:"box"},[t(`
  `),n("div",{class:"one"},"One"),t(`
  `),n("div",{class:"two"},"Two"),t(`
  `),n("div",{class:"three"},"Three"),t(`
`)],-1),H=n("p",null,"CSS",-1),L=s('<p>结果</p><figure id="demo-20240409-1505"><div class="box"><div class="one">One</div><div class="two">Two</div><div class="three">Three</div></div></figure>',2);function M(j,z){const l=d("code");return e(),o(c,null,[a,p,h,n("pre",null,[t("		"),i((e(),o("code",null,[t(`
/* 初始值为 1，只能是 <number>，不允许负值 */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
		`)])),[[l,void 0,"css"]]),t(`
	`)]),u,f,n("figure",null,[_,v,b,n("pre",null,[t("		"),i((e(),o("code",null,[t(`
`),m,t(`

`),k,t(`
		`)])),[[l,void 0,"html",{escape:!0}]]),t(`
	`)]),g,n("pre",null,[t("	"),i((e(),o("code",null,[t(`
		.box {
		display: flex;
		width: 500px;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.box > * {
		width: 200px;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}

	.shrink-0 > * { flex: 0 0 auto; }
	.shrink-1 > * { flex: 0 1 auto; }
	`)])),[[l,void 0,"css"]]),t(`
`)]),w,y]),n("figure",null,[T,D,n("pre",null,[t("	"),i((e(),o("code",null,[t(`
<p>the width of content is 500px, flex-basic of flex item is 120px.</p>
<p>A, B, C are flex-shrink:1. D and E are flex-shrink:2</p>
<p>the width of D is not the same as A's</p>
<div id="content">
  <div class="box"  style="background-color:red;"       >A</div>
  <div class="box"  style="background-color:lightblue;" >B</div>
  <div class="box"  style="background-color:yellow;"    >C</div>
  <div class="box1" style="background-color:brown;"     >D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
	`)])),[[l,void 0,"html"]]),t(`
`)]),B,n("pre",null,[t("	"),i((e(),o("code",null,[t(`
#content {
  display: flex;
  width: 500px;
	border: 1px solid #ccc;
	padding: 5px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box  { flex-shrink: 1; }
.box1 { flex-shrink: 2; }
	`)])),[[l,void 0,"css"]]),t(`
`)]),C]),S,A,O,E,N,n("figure",null,[V,F,q,n("pre",null,[t("			"),i((e(),o("code",null,[t(`
`),G,t(`
			`)])),[[l,void 0,"html",{escape:!0}]]),t(`
		`)]),H,n("pre",null,[t("			"),i((e(),o("code",null,[t(`
				.box {
		display: flex;
		width: 500px;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.box > * {
		width: 200px;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}

	.one   { flex: 1 1 auto; }
	.two   { flex: 1 0 auto; }
	.three { flex: 2 4 auto; }
			`)])),[[l,void 0,"css"]]),t(`
		`)]),L])],64)}const kn=r(x,[["render",M]]);export{kn as default};
