import{_ as l}from"./index-C58PDwY0.js";import{ao as a,o,c as n,a4 as e,q as i,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},s=t("h1",null,"【label】 语句",-1),u=t("p",null,"一个 【label】 提供了一个在程序中其他位置引用它的标识符。例如，可以用 label 标识一个循环，然后使用 【break】 或者 【continue】 来指出程序是否该停止循环还是继续循环。",-1),c=t("p",null,"【label】 的值可以是任何的非保留字的 JavaScript 标识符， 【statement】 可以是任意你想要标识的语句(块)。",-1),_=t("p",null,[t("strong",null,"示例："),i("在这个例子里，标记 【markLoop】 标识了一个 【while】 循环。")],-1),d=t("p",null,"举一个比较典型的例子，看完即明白 Label 的应用：",-1),j=t("p",null,"未添加 Label：",-1),v=t("p",null,"添加 Label 后：",-1),f=t("p",null,"使用 continue 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：",-1),h=t("p",null,"从 【alert(num)】 的值可以看出，【continue outPoint;】 语句的作用是跳出当前循环，并跳转到 【outPoint】(标签)下的 【for】 循环继续执行。",-1);function b(k,P){const r=a("code");return o(),n(m,null,[s,u,c,e((o(),n("pre",null,[i(`label :
	statement`)])),[[r,void 0,"js"]]),_,e((o(),n("pre",null,[i(`markLoop: while (theMark == true) {
	doSomething();
}`)])),[[r,void 0,"js"]]),d,j,e((o(),n("pre",null,[i(`var num = 0;
for (var i = 0; i < 10; i++) { // i 循环
	for (var j = 0; j < 10; j++) { // j 循环
		if (i == 5 && j == 5) {
			break; // i = 5，j = 5 时，会跳出 j 循环
		} // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
		num++;
	}
}

alert(num); // 输出 95`)])),[[r,void 0,"js"]]),v,e((o(),n("pre",null,[i(`var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
			// 返回到整个 outPoint 下方，继续执行
		}
		num++;
	}
}

alert(num); // 输出 55`)])),[[r,void 0,"js"]]),f,e((o(),n("pre",null,[i(`var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
for (var j = 0; j < 10; j++) {
	if (i == 5 && j == 5) {
		continue outPoint;
	}
	num++;
}
}
alert(num); // 95`)])),[[r,void 0,"js"]]),h],64)}const $=l(p,[["render",b]]);export{$ as default};
