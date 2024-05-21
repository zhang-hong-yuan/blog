import{_ as p}from"./index-C58PDwY0.js";import{ao as r,o as e,c as l,e as t,q as n,a4 as i,F as d,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},u=t("h1",null,":placeholder-shown",-1),a=t("input",null,null,-1),h=[a],m=t("h6",null,"基础示例",-1),_=t("p",null,"该示例中，输入框在显示占位符时将应用特殊字体和边框样式。",-1),b=t("input",{placeholder:"在这里输入一些东西！"},null,-1),f=t("p",null,"CSS",-1),v=t("p",null,"渲染结果：",-1),g=t("figure",{id:"demo-20240331-1835"},[t("input",{placeholder:"在这里输入一些东西！"})],-1),w=t("h6",null,"文本溢出",-1),x=t("p",null,"当表单字段太小时，占位文本可能会以不良方式被裁剪。可以使用 ‘text-overflow’ 属性来更改溢出文本的显示方式。",-1),S=t("input",{id:"input1",placeholder:"名字、排行和序号"},null,-1),y=t("br",null,null,-1),D=t("br",null,null,-1),k=t("input",{id:"input2",placeholder:"名字、排行和序号"},null,-1),I=t("p",null,"CSS",-1),C=t("p",null,"渲染结果：",-1),B=t("figure",{id:"demo-20240331-1850"},[t("input",{id:"input1",placeholder:"名字、排行和序号"}),n(),t("br"),t("br"),t("input",{id:"input2",placeholder:"名字、排行和序号"})],-1),N=t("h6",null,"自定义输入框",-1),V=t("p",null,"以下示例使用自定义样式突出显示了学生 ID 字段。",-1),F=t("p",null,"CSS",-1),q=s('<p>渲染结果：</p><figure id="demo-20240331-1853"><form id="test"><p><label for="name">输入学生姓名：</label><input id="name" placeholder="学生姓名"></p><p><label for="branch">输入学生分会：</label><input id="branch" placeholder="学生分会"></p><p><label for="sid">输入学生 ID：</label><input type="number" pattern="[0-9]{8}" title="8 digit ID" id="sid" class="studentid" placeholder="8 digit id"></p><input type="submit"></form></figure>',2);function E(T,j){const o=r("code");return e(),l(d,null,[u,t("p",null,[n("‘:placeholder-shown’ CSS 伪类表示当前显示占位符文本的任何 "),i((e(),l("code",null,h)),[[o,void 0,"html",{escape:!0}]]),n(" 或 "),i((e(),l("code",null,[n("<textarea>")])),[[o,void 0,"html"]]),n(" 元素。")]),t("pre",null,[n(""),i((e(),l("code",null,[n(`
:placeholder-shown {
  /* ... */
}
`)])),[[o,void 0,"css"]]),n(`
`)]),m,_,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		`),b,n(`
	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),f,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
	input {
		border: 3px solid black;
		outline: none;
		padding: 3px;
	}

	input:placeholder-shown {
		border-color: teal;
		font-style: italic;
	}

	input::placeholder {
		color: purple;
	}
	`)])),[[o,void 0,"css"]]),n(`
`)]),v,g,w,x,t("pre",null,[n("		"),i((e(),l("code",null,[n(`
`),S,n(`
`),y,D,n(`
`),k,n(`
		`)])),[[o,void 0,"html",{escape:!0}]]),n(`
	`)]),I,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
	input {
		width: 6em;
	}

	#input2:placeholder-shown {
		text-overflow: ellipsis;
	}
	`)])),[[o,void 0,"css"]]),n(`
`)]),C,B,N,V,t("pre",null,[n("		"),i((e(),l("code",null,[n(`
<form id="test">
  <p>
    <label for="name">输入学生姓名：</label>
    <input id="name" placeholder="学生姓名" />
  </p>
  <p>
    <label for="branch">输入学生分会：</label>
    <input id="branch" placeholder="学生分会" />
  </p>
  <p>
    <label for="sid">输入学生 ID：</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8 digit id" />
  </p>
  <input type="submit" />
</form>
		`)])),[[o,void 0,"html"]]),n(`
	`)]),F,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
	`)])),[[o,void 0,"css"]]),n(`
`)]),q],64)}const ht=p(c,[["render",E]]);export{ht as default};
