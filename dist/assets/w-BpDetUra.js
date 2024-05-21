import{_ as s}from"./index-C58PDwY0.js";import{ao as i,o as e,c as t,a4 as l,q as r,F as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},c=n("h2",null,"Generator",-1),g=n("p",null,"Generator 函数是 ES6 提供的一种异步编程解决方案Generator 函数是一个状态机，封装了多个内部状态。",-1),u=n("p",null,"执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。",-1),p=n("blockquote",null,[n("p",null,"yield(产出)表达式是暂停执行的标记，而next方法可以恢复执行。")],-1),m=n("h3",null,"next() 的返回值",-1),_=n("h3",null,"yield 的返回值",-1),x=n("br",null,null,-1),h=n("h3",null,"异步流程",-1),f=n("p",null,[n("strong",null,"手动版本")],-1),v=n("p",null,[n("strong",null,"自动版本")],-1);function j(y,G){const o=i("code");return e(),t(a,null,[c,g,u,l((e(),t("pre",null,[r(`function *gen(){
    console.log(1)
    yield;
    console.log(2)
    yield;
    console.log(3)
}

let g = gen()
g.next() // 1
g.next() // 2
g.next() // 3
`)])),[[o,void 0,"js"]]),p,m,l((e(),t("pre",null,[r(`function *gen(){
    yield  1;
    yield  2;
}

let g = gen()

let res1 = g.next()
console.log(res1)   // {value: 1, done: false}

let res2 = g.next()
console.log(res2)   // text.html:22 {value: 2, done: false}

let res3 = g.next()
console.log(res3)   // text.html:24 {value: undefined, done: true}
`)])),[[o,void 0,"js"]]),_,l((e(),t("pre",null,[r(`function *gen(){
    let res1 = yield;
    console.log(res1) // data-2

    let res2 = yield;
    console.log(res2) // data-3
}

let g = gen()
g.next("data-1") // 第一个next()传参没有意义
g.next("data-2")
g.next("data-3")
`)])),[[o,void 0,"js"]]),x,h,f,l((e(),t("pre",null,[r(`function *gen(){
    let res1 = yield ajax("1.json")
    console.log(res1)
    let res2 = yield ajax("2.json")
    console.log(res2)
}

let g = gen()   

g.next().value.then(data=>{
    g.next(data).value.then(data=>{
        g.next(data)
    })
}) 
`)])),[[o,void 0,"js"]]),v,l((e(),t("pre",null,[r(`function* gen() {
    let res1 = yield ajax("1.json")
    console.log(res1)
    let res2 = yield ajax("2.json")
    console.log(res2)
}


function AutoRun(gen) {
    let g = gen();

    function next(data) {
        let res = g.next(data);
        if (res.done) return 
        res.value.then(function (data) {
            next(data);
        });
    }

    next();
}

AutoRun(gen);
`)])),[[o,void 0,"js"]])],64)}const nn=s(d,[["render",j]]);export{nn as default};
