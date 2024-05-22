import{y as f,ao as p,o as i,c as o,e as t,q as e,a4 as a,F as c,at as r}from"./@vue-DejhS5Sx.js";const u=t("h1",null,"align-items",-1),v=t("p",null,"‘align-items’ 属性可以使元素在交叉轴方向对齐。",-1),g=t("p",null,"CSS ‘align-items’ 属性设置了所有直接子元素的 ‘align-self’ 值作为一个组。在 Flexbox 中，它控制子元素在交叉轴上的对齐。在 Grid 布局中，它控制了子元素在其网格区域内的块向轴上的对齐。",-1),m=r('<figure><table><tr><th>属性值</th><th>描述</th></tr><tr><td>‘normal’</td><td><p>这个关键字的效果取决于我们处在什么布局模式中：</p><ul><li>在绝对定位的布局中，对于被替代的绝对定位盒子，行为与 ‘start’ 类似；对于其他所有绝对定位的盒子，行为与 ‘stretch’ 类似。</li><li>在绝对定位布局的静态位置上，行为与 ‘stretch’ 类似。</li><li>对于那些 flex 元素而言，行为与 ‘stretch’ 类似。</li><li>对于那些 grid 元素而言，行为与 ‘stretch’ 类似，但对于具有长宽比或固有尺寸的盒子，其行为与 ‘start’ 类似。</li><li>这个属性不适用于块级盒子和表格。</li></ul></td></tr><tr><td>‘flex-start’</td><td>只在 flex 布局中使用，将元素与 flex 容器的主轴起点或交叉轴起点对齐。</td></tr><tr><td>‘flex-end’</td><td>只在 flex 布局中使用，将元素与 flex 容器的主轴末端或交叉轴末端对齐。</td></tr><tr><td>‘center’</td><td>flex 元素的外边距框在交叉轴上居中对齐。如果元素的交叉轴尺寸大于 flex 容器，它将在两个方向上等距溢出。</td></tr><tr><td>‘start’</td><td>将元素与容器的主轴起点或交叉轴起点对齐。</td></tr><tr><td>‘end’</td><td>将元素与容器的主轴末端或交叉轴末端对齐。</td></tr><tr><td>‘self-start’</td><td>将元素与容器的主轴起点或交叉轴起点对齐，轴起点的方向对应于元素的起始方向。</td></tr><tr><td>‘self-end’</td><td>将元素与容器的主轴末端或交叉轴末端对齐，轴末端的方向对应于元素的结尾方向。</td></tr><tr><td class="nowrap">‘baseline’<br>‘first baseline’<br>‘last baseline’</td><td>所有 flex 元素都对齐，以使它们的 flex 容器基线 对齐。距离其交叉轴起点和基线之间最远的元素与行的交叉轴起点对齐。</td></tr><tr><td>‘stretch’</td><td>如果（多个）元素的组合大小小于容器的大小，其中自动调整大小的元素将等量增大，以填满容器，同时这些元素仍然保持其宽高比例的约束。</td></tr><tr><td>‘safe’</td><td>与其它对齐值一起使用。如果所选对齐值导致元素溢出容器，则将元素按 ‘start’ 方式对齐。</td></tr><tr><td>‘unsafe’</td><td>与其它对齐值一起使用。不管元素和容器的相对尺寸以及是否会发生溢出，都会采用给定的对齐值。</td></tr></table></figure>',1),x=t("figcaption",null,"示例",-1),h=t("p",null,"CSS",-1),b=t("p",null,"HTML",-1),_=r('<p>结果</p><figure id="demo-20240409-1750"><div id="container" class="flex"><div id="item1">1</div><div id="item2">2</div><div id="item3">3</div><div id="item4">4</div><div id="item5">5</div><div id="item6">6</div></div><div class="row"><label for="display">display: </label><select id="display"><option value="flex">flex</option><option value="grid">grid</option></select></div><div class="row"><label for="values">align-items: </label><select id="values"><option value="normal">normal</option><option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center" selected>center</option><option value="baseline">baseline</option><option value="stretch">stretch</option><option value="start">start</option><option value="end">end</option><option value="self-start">self-start</option><option value="self-end">self-end</option><option value="first baseline">first baseline</option><option value="last baseline">last baseline</option><option value="safe center">safe center</option><option value="unsafe center">unsafe center</option><option value="safe right">safe right</option><option value="unsafe right">unsafe right</option><option value="safe end">safe end</option><option value="unsafe end">unsafe end</option><option value="safe self-end">safe self-end</option><option value="unsafe self-end">unsafe self-end</option><option value="safe flex-end">safe flex-end</option><option value="unsafe flex-end">unsafe flex-end</option></select></div></figure>',2),k={__name:"fdsq",setup(y){return f(()=>{const s=document.getElementById("values"),d=document.getElementById("display"),n=document.getElementById("container");s.addEventListener("change",l=>{n.style.alignItems=l.target.value}),d.addEventListener("change",l=>{n.className=l.target.value})}),(s,d)=>{const n=p("code");return i(),o(c,null,[u,v,g,t("pre",null,[e("		"),a((i(),o("code",null,[e(`
/* 基本关键字 */
align-items: normal;
align-items: stretch;

/* 定位对齐 */
/* align-items 不能设置为 left 和 right */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* 基线对齐 */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* 溢出对齐（仅用于位置对齐） */
align-items: safe center;
align-items: unsafe center;

/* 全局值 */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
		`)])),[[n,void 0,"css"]]),e(`
	`)]),m,t("figure",null,[x,h,t("pre",null,[e("	"),a((i(),o("code",null,[e(`
		#container {
		height: 200px;
		width: 240px;
		align-items: center; /* 可以在运行实例中更改 */
		background-color: #8c8c8c;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, 50px);
	}

	div > div {
		box-sizing: border-box;
		border: 2px solid #8c8c8c;
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#item1 {
		background-color: #8cffa0;
		min-height: 30px;
	}

	#item2 {
		background-color: #a0c8ff;
		min-height: 50px;
	}

	#item3 {
		background-color: #ffa08c;
		min-height: 40px;
	}

	#item4 {
		background-color: #ffff8c;
		min-height: 60px;
	}

	#item5 {
		background-color: #ff8cff;
		min-height: 70px;
	}

	#item6 {
		background-color: #8cffff;
		min-height: 50px;
		font-size: 30px;
	}

	.row {
		margin-top: 10px;

		label { width: auto; }

		select {
			width: auto;
			padding: 0;
			font-size: 16px;
		}
	}
	`)])),[[n,void 0,"less"]]),e(`
`)]),b,t("pre",null,[e("	"),a((i(),o("code",null,[e(`
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
	`)])),[[n,void 0,"html"]]),e(`
`)]),_])],64)}}};export{k as default};
