import{_ as r}from"./index-C58PDwY0.js";import{ao as t,o as e,c as a,a4 as s,q as i,F as o,e as N}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},u=N("h1",null,"Number.NaN",-1),m=N("p",null,"【Number.NaN】也是 《Number》 类型的静态数据，表示《非数字》值，等同于【NaN】。",-1),d=N("p",null,"【NaN】代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果。NaN 是粘性的。任何对 NaN 的操作都会返回 《NaN》。",-1),p=N("p",null,"【NaN】是全局对象的一个属性。换句话说，它是全局作用域中的一个《变量》。",-1),c=N("br",null,null,-1),_=N("p",null,"要判断一个值是否为 【NaN】，可以使用 【《a;;Number.isNaN()》】 或 【《a;;isNaN()》】 来最清楚地确定一个值是否为 【NaN】——或者，因为 【NaN】 是唯一与自身不相等的值(涉及到【NaN】的比较都是【false】)，所以可以执行类似 【《x !== x》】 这样的自我比较。",-1),b={class:"nocopy"},f=N("h6",null,"检查值是否为数字",-1),h=N("h6",null,"一些数组方法不能找到 NaN",-1),v=N("p",null,"查找《b;;索引》的（【indexOf()】、【lastIndexOf()】）不能找到【NaN】，而查找《b;;值》的（【includes()】）可以：",-1),x=N("hr",null,null,-1),j=N("h1",null,"Number.isNaN()",-1),I=N("p",null,"【Number.isNaN()】 静态方法判断传入的值是否为 【NaN】，如果输入不是数字类型，则返回 【false】。它是全局 【isNaN()】 函数更健壮的版本。",-1),w={class:"nocopy"},y=N("dl",null,[N("dt",null,"【value】"),N("dd",null,"要测试是否为 【NaN】 的值。")],-1),B=N("p",null,"注意，不能使用 【==】 或 【===】 运算符来测试值与 【NaN】 的相等性，因为与 JavaScript 中的其他值的比较不同，这些运算符在一个操作数为 【NaN】 时始终返回 【《false》】，即使另一个操作数也是 【NaN】。 ",-1),O=N("h6",null,"示例：",-1),g=N("h6",null,"isNaN() 和 Number.isNaN() 的区别",-1),k=N("p",null,"如果当前值是 【NaN】，或者将其强制转换为数字后将是 【NaN】，则【isNaN()】将返回 【true】。而【Number.isNaN()】仅当值当前为 【NaN】 时才为 【true】：",-1),D=N("p",null,"【Number.isNaN()】 《不会::会不会？》尝试将参数转换为数字，因此非数字总是返回 【false】。以下都返回 【false】：",-1),F=N("p",null,"全局 【isNaN()】 函数会将参数强制转换为数字：",-1);function V(q,z){const n=t("code");return e(),a(o,null,[u,m,d,p,c,_,s((e(),a("pre",b,[i(`NaN === NaN;        // 《false》
Number.NaN === NaN; // 《false》
isNaN(NaN);         // 《true》
isNaN(Number.NaN);  // 《true》
Number.isNaN(NaN);  // 《true》


function valueIsNaN(v) { return v !== v; }

valueIsNaN(1);          // 《false》
valueIsNaN(NaN);        // 《true》
valueIsNaN(Number.NaN); // 《true》
`)])),[[n,void 0,"js"]]),f,s((e(),a("pre",null,[i(`function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
`)])),[[n,void 0,"js"]]),h,v,s((e(),a("pre",null,[i(`const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // 《-1》
arr.includes(NaN); // 《true》

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 《2》
`)])),[[n,void 0,"js"]]),x,j,I,s((e(),a("pre",w,[i("Number.isNaN(value)")])),[[n,void 0,"js"]]),y,B,O,s((e(),a("pre",null,[i(`Number.isNaN(NaN);        // 《true》
Number.isNaN(Number.NaN); // 《true》
Number.isNaN(0 / 0);      // 《true》
Number.isNaN(37);         // 《false》
`)])),[[n,void 0,"js"]]),g,k,s((e(),a("pre",null,[i(`isNaN("hello world");        // 《c;;true》
Number.isNaN("hello world"); // 《c;;false》
`)])),[[n,void 0,"js"]]),D,s((e(),a("pre",null,[i(`Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
`)])),[[n,void 0,"js"]]),F,s((e(),a("pre",null,[i(`isNaN("NaN");     // true
isNaN(undefined); // true
isNaN({});        // true
isNaN("blabla");  // true
isNaN(true);      // false，强制转换为 1
isNaN(null);      // false，强制转换为 0
isNaN("37");      // false，强制转换为 37
isNaN("37.37");   // false，强制转换为 37.37
isNaN("");        // false，强制转换为 0
isNaN(" ");       // false，强制转换为 0
`)])),[[n,void 0,"js"]])],64)}const mN=r(l,[["render",V]]);export{mN as default};
