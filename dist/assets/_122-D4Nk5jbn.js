import{f as i}from"./flex-CEQKt5Ic.js";import{ao as s,o as r,c as l,e as o,q as e,a4 as n,m as c,L as d,F as p,at as a}from"./@vue-DejhS5Sx.js";import"./index-C58PDwY0.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const x=o("h1",null,"flex-grow",-1),g=o("p",null,"CSS 属性 ‘flex-grow’ 设置 flex 项 主尺寸 的 flex 增长系数。",-1),m=o("p",null,"这个属性规定了 ‘flex-grow’ 项在 flex 容器中分配剩余空间的相对比例。如果所有的兄弟项目都有相同的 ‘flex-grow’ 系数，那么所有的项目将剩余空间按相同比例分配(88、100 或 1.2 都可——这只是个比例)，否则将根据不同的 ‘flex-grow’ 定义的比例进行分配。",-1),f=o("p",null,"‘flex-grow’ 若被赋值为一个正整数，flex 元素会以 ‘flex-basis’ 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。",-1),u=o("p",null,"如果给上例中的所有元素设定 ‘flex-grow’ 值为 ‘1’，容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。",-1),b=o("p",null,"‘flex-grow’ 属性可以按比例分配空间。如果第一个元素 ‘flex-grow’ 值为 ‘2’，其他元素值为 ‘1’，则第一个元素将占有 ‘2/4’（上例中，即为 200px 中的 100px）, 另外两个元素各占有 ‘1/4’（各 50px）。",-1),v=o("h6",null,"设置 flex 项目增长因子",-1),w=o("p",null,"CSS",-1),_=a('<p>结果</p><figure id="demo-20240409-0847"><h4>这展示了 flex 增长</h4><p>A,B,C 和 F 具有 flex-grow:1</p><p>D 和 E 具有 flex-grow:2</p><div id="content"><div class="box" style="background-color:red;">A</div><div class="box" style="background-color:lightblue;">B</div><div class="box" style="background-color:yellow;">C</div><div class="box1" style="background-color:brown;">D</div><div class="box1" style="background-color:lightgreen;">E</div><div class="box" style="background-color:brown;">F</div></div></figure>',2),ro={__name:"_122",setup(h){return(y,k)=>{const t=s("code");return r(),l(p,null,[x,g,m,o("pre",null,[e("		"),n((r(),l("code",null,[e(`
/* <number> 值。负值无效，默认为 0。*/
flex-grow: 3;
flex-grow: 0.6;

/* 全局值 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: unset;
		`)])),[[t,void 0,"css"]]),e(`
	`)]),f,c(d(i)),u,b,v,o("pre",null,[e("		"),n((r(),l("code",null,[e(`
<h4>这展示了 flex 增长</h4>
<p>A,B,C 和 F 具有 flex-grow:1</p>
<p>D 和 E 具有 flex-grow:2</p>
<div id="content">
  <div class="box"  style="background-color:red;"        >A</div>
  <div class="box"  style="background-color:lightblue;"  >B</div>
  <div class="box"  style="background-color:yellow;"     >C</div>
  <div class="box1" style="background-color:brown;"      >D</div>
  <div class="box1" style="background-color:lightgreen;" >E</div>
  <div class="box"  style="background-color:brown;"      >F</div>
</div>
		`)])),[[t,void 0,"html"]]),e(`
	`)]),w,o("pre",null,[e("	"),n((r(),l("code",null,[e(`
#content {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
	`)])),[[t,void 0,"css"]]),e(`
`)]),_],64)}}};export{ro as default};
