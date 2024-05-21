import{_ as m}from"./index-C58PDwY0.js";import{ao as a,o,c as e,e as t,q as n,a4 as r,F as u,m as p,L as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const _={},f=t("h6",null,"示例",-1),v=t("p",null,"HTML",-1),g=t("p",null,"CSS",-1),h=t("p",null,"渲染结果：",-1),b=t("figure",{id:"demo-20240330-1516"},[t("form",{action:"",id:"form1"},[t("ul",null,[n(" Values between 1 and 10 are valid. "),t("li",null,[t("input",{id:"value1",name:"value1",type:"number",placeholder:"1 to 10",min:"1",max:"10",value:"12"}),t("label",{for:"value1"},"Your value is ")])])])],-1);function x(c,s){const l=a("code");return o(),e(u,null,[f,v,t("pre",null,[n("	"),r((o(),e("code",null,[n(`
<form action="" id="form1">
<ul>
	Values between 1 and 10 are valid.
	<li>
		<input
			id="value1"
			name="value1"
			type="number"
			placeholder="1 to 10"
			min="1"
			max="10"
			value="12" />
		<label for="value1">Your value is </label>
	</li>
</ul>
</form>
	`)])),[[l,void 0,"html"]]),n(`
`)]),g,t("pre",null,[n("	"),r((o(),e("code",null,[n(`
li {
list-style: none;
margin-bottom: 1em;
}

input {
border: 1px solid black;
}

input:in-range {
background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
background-color: rgba(255, 0, 0, 0.25);
border: 2px solid red;
}

input:in-range + label::after {
	color: green;
	content: "okay.";
}

input:out-of-range + label::after {
	color: red;
	content: "out of range!";
}
	`)])),[[l,void 0,"css"]]),n(`
`)]),h,b],64)}const k=m(_,[["render",x]]),$=t("h1",null,":out-of-range",-1),V=t("input",null,null,-1),y=[V],S=t("p",null,"这个伪类很有用，可以给用户提供一个视觉提示，让他们知道字段的当前值是否超出了允许的范围。",-1),w=t("section",{class:"note"},[t("strong",null,"备注："),n("该伪类仅适用于具有（并可以接受）范围限制的元素。如果没有这样的限制，元素值就无所谓 ‘in-range’ 和 ‘out-of-range’。 ")],-1),rt={__name:"__43",setup(c){return(s,l)=>{const i=a("code");return o(),e(u,null,[$,t("p",null,[n("‘:out-of-range’ CSS 伪类表示一个 "),r((o(),e("code",null,y)),[[i,void 0,"html",{escape:!0}]]),n(" 元素，其当前值处于属性 ‘min’ 和 ‘max’ 限定的范围外。")]),t("pre",null,[n("	"),r((o(),e("code",null,[n(`
:out-of-range {
  /* ... */
}
	`)])),[[i,void 0,"css"]]),n(`
`)]),S,w,p(d(k))],64)}}};export{rt as default};
