import{_ as a}from"./index-C58PDwY0.js";import{ao as e,o,c as l,a4 as i,q as s,F as r,e as t,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},d=t("h1",null,"function.call()",-1),u=t("p",null,"【Function】 实例的 【call()】 方法会《以给定的 【this】 值》和《逐个提供的参数》调用该函数。",-1),h=t("p",null,"【call()】 返回值就是《函数的返回值》，因为它就是调用函数。",-1),m={class:"nocopy"},_=c('<dl><dt>【thisArg】</dt><dd>在调用 【func】 时要使用的 【《this》】 值。如果函数不在严格模式下，【null】 和 【undefined】 将被替换为《全局对象》，并且原始值将被转换为对象。</dd><dt>【arg1, …, argN】<span class="optional">可选</span></dt><dd>函数的《参数》。</dd></dl><section class="note"><header>备注：<span>这个函数几乎与 【《apply()》】 相同，只是函数的参数以《列表》的形式逐个传递给 【call()】，而在 【apply()】 中它们被组合在一个对象中，通常是一个《数组》——例如，【func.call(this, 《&quot;eat&quot;, &quot;bananas&quot;》)】 与 【func.apply(this, 《[&quot;eat&quot;, &quot;bananas&quot;]》)】。</span></header></section><p>通常，在调用函数时，函数内部的 【this】 值是《访问该函数的对象》。使用 【call()】，可以在调用现有函数时将任意值分配给 【this】，而无需首先将函数附加到对象上作为属性。这样可以将一个对象的方法用作《通用的实用函数》。 </p><h6>使用 call() 调用函数并指定 this 值</h6><p>在下面的示例中，当调用 【greet】 时，【this】 的值将绑定到对象 【obj】，即使 【greet】 不是 【obj】 的方法。</p>',5),g=t("h6",null,"使用 call() 在不指定第一个参数的情况下调用函数",-1),b=t("p",null,"如果省略第一个 【thisArg】 参数，则默认为 【《undefined》】。在非严格模式下，【this】 值将被替换为 【《globalThis》】（类似于全局对象）。",-1),f=t("h6",null,"将方法转换为实用函数",-1),y=t("p",null,"【call()】 几乎等同于《普通函数调用》，只是将 【《this》】 作为普通参数传入，而不是作为函数所在的对象值。这类似于通用的实用函数的工作方式：可以使用 【map(array, callback)】 来代替 【array.map(callback)】，这样可以避免对 【Array.prototype】 进行修改，还可以将 【map】 用于不是数组的类数组对象（例如 【arguments】）。",-1),A=t("p",null,"以 【Array.slice()】 为例，将类数组对象转换为真正的数组。可以创建一个类似这样的快捷方式：",-1),j=t("p",null,"请注意，不能将 【slice.call】 保存并将其作为普通函数调用，因为 【call()】 方法也会读取它的 【this】 值，而这个值应该是它要调用的函数。在这种情况下，可以使用 【bind()】 来绑定 【call()】 的 【this】 值。在下面的代码片段中，【slice()】 是一个绑定了 【this】 值为 【Array.slice()】 的 【Function.call()【 的版本。这意味着额外的 【call()】 调用可以被省略：",-1);function q(v,F){const n=e("code");return o(),l(r,null,[d,u,h,i((o(),l("pre",m,[s(`func.call(thisArg)
func.call(thisArg, arg1)
func.call(thisArg, arg1, arg2)
func.call(thisArg, arg1, arg2, /* …, */ argN)`)])),[[n,void 0,"js"]]),_,i((o(),l("pre",null,[s(`function greet() {
  console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}

const obj = {
  animal: "猫",
  sleepDuration: "12 到 16 小时",
};

《greet.call(obj)》; // 猫 的睡眠时间一般在 12 到 16 小时 之间`)])),[[n,void 0,"js"]]),g,b,i((o(),l("pre",null,[s(`globalThis.globProp = "Wisen";

function display() {
  console.log(\`globProp 的值是 \${this.globProp}\`);
}

《display.call();》 // 输出“globProp 的值是 Wisen”`)])),[[n,void 0,"js"]]),f,y,A,i((o(),l("pre",null,[s(`const slice = Array.prototype.slice;
// ...
slice.call(arguments);`)])),[[n,void 0,"js"]]),j,i((o(),l("pre",null,[s(`// 与前面示例中的“slice”相同
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);
// ...
slice(arguments);`)])),[[n,void 0,"js"]])],64)}const lt=a(p,[["render",q]]);export{lt as default};
