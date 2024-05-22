import{_ as p}from"./index-C58PDwY0.js";import{ao as a,o as r,c as t,a4 as i,q as e,F as m,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},c=o("h1",null,"【for...in】 遍历",-1),l=o("p",null,"【for...in】 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。【for(变量 in 对象名) { ... }】",-1),_=o("p",null,"虽然使用 【for...in】 来迭代数组元素听起来很诱人，但是它返回的东西除了数字索引外，还有可能是自定义的属性名字。因此还是用带有数字索引的传统的 【for】 循环来迭代一个数组比较好，因为，如果需要改变数组对象，比如添加属性或者方法，【for...in】 语句迭代的是自定义的属性，而不是数组的元素。（注：【for...of】 语句和【forEach()】也是理想的选择。）",-1),d=o("h3",null,"示例：",-1),u=o("p",null,"下面的函数通过它的参数得到一个对象和这个对象的名字。然后循环这个对象的所有属性并且返回一个列出属性名和该属性值的字符串。",-1);function f(v,b){const n=a("code");return r(),t(m,null,[c,l,i((r(),t("pre",null,[e(`for(var variable in object) { // variable 在每次迭代时，都会被赋值为不同的属性名。
    console.log(variable);      // 这里得到的是属性名
    console.log(object[variable]); // 这里得到的是属性值
}`)])),[[n,void 0,"js"]]),_,d,u,i((r(),t("pre",null,[e(`function dump_props(obj, obj_name) {
	var result = "";
	for (var i in obj) {
		result += obj_name + "." + i + " = " + obj[i] + '\\n';
	}
	result += "\\n";
	return result;
}

const car = {
	make: "Ford",
	model: "Mustang"
}

console.log(dump_props(car, 'car'));
// car.make = Ford
// car.model = Mustang
// 
`)])),[[n,void 0,"js"]])],64)}const W=p(s,[["render",f]]);export{W as default};
