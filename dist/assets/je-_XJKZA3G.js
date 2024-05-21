import{_ as l}from"./index-C58PDwY0.js";import{ao as c,o,c as t,a4 as n,q as r,F as p,e,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d="/blog/assets/defineproperty-COxnmsgL.png",a={},m=e("h2",null,"defineproperty()",-1),u=e("p",null,[e("strong",null,[e("code",null,"Object.defineProperty()")]),r(" 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。")],-1),g=s("<ul><li><p><code>obj</code> 要定义属性的对象</p></li><li><p><code>prop</code> 要定义或修改的属性的名称或 Symbol</p></li><li><p><code>descriptor</code> 要定义或修改的属性描述符。</p><ul><li><code>value</code> 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）</li><li><code>enumerable</code> 控制属性是否可以枚举</li><li><code>writable</code> 控制属性是否可以被修改</li><li><code>configurable</code> 控制属性是否可以被删除</li><li><code>get</code> 当访问该属性时，会调用此函数。执行时不传入任何参数。该函数的返回值会被用作属性的值</li><li><code>set</code> 当属性值被修改时，会调用此函数。该方法接受一个参数(也就是被赋予的新值)</li></ul><blockquote><p>get 和 set 是函数名。get/set 和函数体统称为 getter/setter。</p><p>getter 需要有返回值，setter 不需要。</p></blockquote></li></ul><p><strong>描述符默认值汇总</strong></p><ul><li>拥有布尔值的键 <code>configurable</code>、<code>enumerable</code> 和 <code>writable</code> 的默认值都是 <code>false</code>。 </li><li>属性值和函数的键 <code>value</code>、<code>get</code> 和 <code>set</code> 字段的默认值为 <code>undefined</code>。</li></ul><p>示例：number 和 person.age 建立联系</p>",4),_=e("picture",{style:{"text-align":"left"}},[e("img",{src:d,alt:"defineproperty",style:{width:"300px"}})],-1),b=e("blockquote",null,[e("p",null,"颜色淡的属性(age 和 __proto__)不参与枚举。")],-1);function f(v,h){const i=c("code");return o(),t(p,null,[m,u,n((o(),t("pre",null,[r("Object.defineProperty(obj, prop, descriptor)")])),[[i,void 0,"js"]]),g,n((o(),t("pre",null,[r(`let number = 18
let person = {
    name: '张三',
    sex: '男',
}

Object.defineProperty(person, 'age', {
    value: 18,
    enumerable: false,
    writable: true,
    configurable: true,

    //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get() {
        console.log('有人读取age属性了')
        return number
    },

    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value) {
        console.log('有人修改了age属性，且值是', value)
        number = value
    }
})

console.log(person)`)])),[[i,void 0,"js"]]),_,b],64)}const Y=l(a,[["render",f]]);export{Y as default};
