import{_ as d}from"./index-C58PDwY0.js";import{ao as i,o as r,c as o,a4 as n,q as e,e as t,F as p,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},m=t("h1",null,"draggable",-1),g=t("p",null,"draggable 属性规定元素是否可拖动。链接和图像默认是可拖动的。",-1),c=t("p",null,"拖放是一种常见的特性，即抓取对象以后拖到另一个位置。任何元素都能够拖放。",-1),u=s('<figure><table><tr><th style="width:20%;">值</th><th>描述</th></tr><tr><td>true</td><td>规定元素是可拖动的。</td></tr><tr><td>false</td><td>规定元素是不可拖动的。</td></tr><tr><td>auto</td><td>使用浏览器的默认特性。</td></tr></table></figure><p><strong>首先</strong>，为了使元素可拖动，把 【draggable】 属性设置为 【true】。</p><p><strong>然后</strong>，规定当元素被拖动时，会发生什么。【ondragstart】 属性调用一个函数：【drag(event)】，它规定了被拖动的数据。【dataTransfer.setData()】 方法设置被拖数据的数据类型和值。</p><p><strong>接着</strong>，【ondragover】 事件规定在何处放置被拖动的数据。默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式。</p><p><strong>最后</strong>，当放置被拖数据时，会发生 【drop】 事件。</p>',5),v=t("p",null,"调用 【preventDefault()】 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）",-1),_=t("p",null,'通过 【dataTransfer.getData("Text")】 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。',-1),h=t("p",null,'被拖数据是被拖元素的 id ("drag")',-1),f=t("p",null,"把被拖元素追加到放置元素（目标元素）中",-1);function D(x,b){const a=i("code");return r(),o(p,null,[m,g,c,n((r(),o("pre",null,[e('<element draggable="true|false|auto">')])),[[a,void 0,"html"]]),u,t("pre",null,[e("	"),n((r(),o("code",null,[e(`<style>
  #div {
    width: 350px;
    height: 70px;
    padding: 10px;
    border: 1px solid #aaaaaa;
  }
</style>

<script>
  function allowDrop(ev) { ev.preventDefault(); }
  function drag(ev) { ev.dataTransfer.setData("Text", ev.target.id); }
  function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  }
<\/script>

<div id="div" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<p id="drag" draggable="true" ondragstart="drag(event)">这是一段可移动的段落。请把该段落拖入上面的矩形。</p>
`)])),[[a,void 0,"html"]]),e(`
`)]),v,_,h,f],64)}const $=d(l,[["render",D]]);export{$ as default};
