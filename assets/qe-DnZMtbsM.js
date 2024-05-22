import{_ as d}from"./index-C58PDwY0.js";import{ao as c,o,c as t,a4 as i,q as e,F as l,at as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},m=a("<h2>创建元素</h2><p>三种动态创建元素区别：<code>document.write()</code>、<code>element.innerHTML</code>、<code>document.createElement()</code></p><ul><li><code>document.write</code> 直接将内容写入页面，但在文档完全加载后使用，将删除所有已有的 HTML。该方法仅用于测试。</li><li><code>innerHTML</code> 将内容写入某个 DOM 节点，不会导致页面全部重绘。innerHTML 创建多个元素效率更高(不要拼接字符串，采取数组形式拼接)，结构稍微复杂。</li><li><code>createElement()</code> 创建多个元素效率稍低一点点，但是结构更清晰。</li></ul><h3>innerHTML拼接字符串创建</h3>",4),s=n("h3",null,"innerHTML数组创建",-1),v=n("h3",null,"creatElement创建",-1),u=n("p",null," ",-1),h=n("p",null,[e("不同浏览器下，innerHTML 效率要比 creatElement 高。("),n("strong",null,"innerHTML数组创建 > creatElement > innerHTML拼接字符串创建"),e(")")],-1);function _(f,x){const r=c("code");return o(),t(l,null,[m,i((o(),t("pre",null,[e(`function fn() {
    var d1 = +new Date()

    var str = ''
    for (var i = 0; i < 1000; i++) {
        document.body.innerHTML += '<div style="width:100px; height:2px; border:1px solid blue;"></div>'
    }

    var d2 = +new Date()

    console.log(d2 - d1)
}

fn()
`)])),[[r,void 0,"js"]]),s,i((o(),t("pre",null,[e(`function fn() {
    var d1 = +new Date()

    var array = []
    for (var i = 0; i < 1000; i++) {
        array.push('<div style="width:100px; height:2px; border:1px solid blue;"></div>')
    }
    document.body.innerHTML = array.join('')

    var d2 = +new Date()
    
    console.log(d2 - d1)
}

fn()
`)])),[[r,void 0,"js"]]),v,i((o(),t("pre",null,[e(`function fn() {
    var d1 = +new Date()

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement('div')
        div.style.width = '100px'
        div.style.height = '2px'
        div.style.border = '1px solid red'
        document.body.appendChild(div)
    }

    var d2 = +new Date()

    console.log(d2 - d1)
}

fn()
`)])),[[r,void 0,"js"]]),u,h],64)}const X=d(p,[["render",_]]);export{X as default};
