import{ao as t,o,c as n,a4 as r,e,F as s}from"./@vue-DejhS5Sx.js";const i=e("h1",null,"<label>",-1),m=e("p",null,"【<label>】 标签为 input 元素定义标注(标签)。【<label>】 标签用于绑定一个表单元素，当点击【<label>】 标签内的文本时，浏览器就会自动将焦点(光标)转到或者选择对应的表单元素上，用来增加用户体验。",-1),c=e("p",null,"【<label>】 标签的 for 属性应当与相关元素的 id 属性相同。label 元素不会向用户呈现任何特殊效果。",-1),a=`<form>

	Man<input type="radio" name="sex" value="man"><br>
	Woman<input type="radio" name="sex" value="woman"><br><br>

	<label for="male">Male</label>
	<input type="radio" name="sex" id="male" value="male"><br>

	<label for="female">Female</label>
	<input type="radio" name="sex" id="female" value="female">

</form>`,b={__name:"labels",setup(p){return(u,d)=>{const l=t("code");return o(),n(s,null,[i,m,r(e("pre",{textContent:a},null,512),[[l,void 0,"html"]]),e("section",{innerHTML:a}),c],64)}}};export{b as default};
