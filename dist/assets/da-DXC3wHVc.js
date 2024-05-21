import{_ as s}from"./index-C58PDwY0.js";import{ao as r,o as e,c as l,a4 as i,q as n,F as p,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=o("p",null,[o("strong",null,"解构赋值"),n("本质上仍然是为变量赋值。就是快速的从对象或者数组中取出成员的一个语法方式。")],-1),a=o("h3",null,"数组解构",-1),u=o("p",null,"是将数组的单元值快速批量赋值给一系列变量的简洁语法。",-1),d=o("p",null,"按需导入，可忽略某些返回值：",-1),_=o("p",null,"变量与单元值不匹配时：",-1),g=o("p",null,"支持多维数组的结构：",-1),v=o("br",null,null,-1),h=o("h3",null,"对象解构",-1),f=o("p",null,"是将对象属性和方法快速批量赋值给一系列变量的简洁语法。",-1),j=o("ul",null,[o("li",null,[n("对象属性的值将被赋值给与属性名相同的变量 "),o("em",{style:{color:"#c1283d"}},"(对象解构顺序可以是乱的，但数组解构必须有序)")]),o("li",null,"解构的变量名不能和其他的变量名冲突"),o("li",null,[n("对象中没有与变量名一致的属性时变量值为 "),o("code",null,"undefined")])],-1),y=o("p",null,"给新的变量名赋值：",-1),x=o("p",null,"数组对象解构：",-1),k=o("p",null,"多级对象解构：",-1),w=o("h3",null,"字符串解构",-1);function b(D,N){const t=r("code");return e(),l(p,null,[m,a,u,i((e(),l("pre",null,[n(`const [x, y, z] = [1, 2, 3]

// 典型应用交换2个变量
let a = 1, b = 3; // 注意，这里必须加分号
[b, a] = [a, b]

// 冒泡排序中的应用
[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]`)])),[[t,void 0,"js"]]),d,i((e(),l("pre",null,[n(`const [A, , C, D] = ['mi', 'apple', 'huawei', 'vivo']
console.log(A) // mi
console.log(C) // huawei
console.log(D) // vivo`)])),[[t,void 0,"js"]]),_,i((e(),l("pre",null,[n(`// 变量多于单元值时，多余的变量将被赋值为 undefined。解决方案：设置默认值
const [p = 'apple', q = 'mi'] = ['vivo']
console.log(p) // vivo
console.log(q) // mi
// 允许初始化变量的默认值，且只有单元值为 undefined 时默认值才会生效


// 变量少于单元值时，则多出的单元值被忽略。解决方案：剩余参数
const [m, n, ...tel] = ['mi', 'apple', 'huawei', 'vivo', 'oppo']
console.log(m)   // mi
console.log(n)   // apple
console.log(tel) // ['huawei', 'vivo', 'oppo']
// 剩余参数返回的是一个数组，但只能置于最末位`)])),[[t,void 0,"js"]]),g,i((e(),l("pre",null,[n(`const [P, Q] = ['apple', ['mi', 'vivo']]
console.log(P) // apple
console.log(Q) // ['mi', 'vivo']

const [X, [Y, Z]] = ['apple', ['mi', 'vivo']]
console.log(X) // apple
console.log(Y) // mi
console.log(Z) // vivo`)])),[[t,void 0,"js"]]),v,h,f,j,y,i((e(),l("pre",null,[n(`const user = {
    name: 'kitten',
    age: 18
}

const { name: uName, age } = user // 冒号表示“什么值：赋值给谁”
console.log(uName) // kitten
console.log(age)   // 18`)])),[[t,void 0,"js"]]),x,i((e(),l("pre",null,[n(`const pig = [
    {
        name: '佩奇',
        age: 6
    }
]

const [{ name, age }] = pig
console.log(name, age) // 佩奇 6`)])),[[t,void 0,"js"]]),k,i((e(),l("pre",null,[n(`const pig = {
    name: '佩奇',
    family: {
        mother: '猪妈妈',
        father: '猪爸爸',
        sister: '乔治'
    },
    age: 6
}

const { name, family: { mother, father, sister } } = pig
console.log(name)   // 佩奇
console.log(mother) // 猪妈妈
console.log(father) // 猪爸爸
console.log(sister) // 乔治`)])),[[t,void 0,"js"]]),w,i((e(),l("pre",null,[n(`let myname = "kerwin"

let [x,y,z] = myname
console.log(x,y,z) // k e r

let {length:len} = myname
console.log(len)  // 6`)])),[[t,void 0,"js"]])],64)}const to=s(c,[["render",b]]);export{to as default};
