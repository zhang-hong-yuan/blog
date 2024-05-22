import{y as r,ao as d,o as t,c as o,e as n,q as e,a4 as s,F as a,at as u}from"./@vue-DejhS5Sx.js";const _=n("h1",null,"::before",-1),h=n("p",null,"CSS 中，‘::before’ 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 ‘content’ 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。",-1),p={class:"note"},f=n("strong",null,"注意：",-1),m=n("img",null,null,-1),b=n("br",null,null,-1),g=n("h6",null,"加入引用标记",-1),v=n("p",null,"使用 ‘::before’ 伪元素的一个简单示例就是用于加入引号。此处同时使用了 ‘::before’ 和 ‘::after’ 来插入引用性文本。",-1),k=n("q",null,"一些引用",-1),S=n("q",null,"比没有好。",-1),y=n("p",null,"CSS",-1),x=n("figure",{id:"demo-20240401-1950"},[n("q",null,"一些引用"),e(", 他说，"),n("q",null,"比没有好。"),e(". ")],-1),q=n("h6",null,"修饰实例",-1),w=n("p",null,"可以用几乎任何方法定义 ‘content’ 中的文字和图片样式。",-1),L=n("span",{class:"ribbon"},"Notice where the orange box is.",-1),N=n("p",null,"CSS",-1),B=n("p",null,"结果：",-1),C=n("figure",{id:"demo-20240404-0819"},[n("span",{class:"ribbon"},"Notice where the orange box is.")],-1),E=n("h6",null,"待办列表",-1),I=n("p",null,"在本例中将使用伪元素来创建一个简单的待办列表。这个方法也可用于 UI 的小幅度更改和用户体验的提升。",-1),T=u(`<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>`,1),V=n("p",null,"CSS",-1),D=n("p",null,"JavaScript",-1),F=n("p",null,"下面展示的是最终得到的结果。请注意没有使用任何图标，对勾标识实际上是使用 CSS 定义了样式的 ‘::before’ 伪元素。接下来建立几个待办事项来完成它们吧。",-1),P=n("figure",{id:"demo-20240404-0823"},[n("ul",null,[n("li",null,"Buy milk"),n("li",null,"Take the dog for a walk"),n("li",null,"Exercise"),n("li",null,"Write code"),n("li",null,"Play music"),n("li",null,"Relax")])],-1),j={__name:"__57",setup(R){return r(()=>{var c=document.querySelector("ul");c.addEventListener("click",function(i){i.target.tagName==="LI"&&i.target.classList.toggle("done")},!1)}),(c,i)=>{const l=d("code");return t(),o(a,null,[_,h,n("pre",null,[e("		"),s((t(),o("code",null,[e(`
::before {
  /* ... */
}
		`)])),[[l,void 0,"css"]]),e(`
	`)]),n("section",p,[f,e(" 由 ‘::before’ 和 ‘::after’ 生成的伪元素包含在元素格式框内，因此不能应用在替换元素上，比如 "),s((t(),o("code",null,[m,e(" 或 "),b])),[[l,void 0,"html",{escape:!0}]]),e(" 元素。 ")]),g,v,n("pre",null,[e("		"),s((t(),o("code",null,[e(`
			`),k,e(", 他说，"),S,e(`.
		`)])),[[l,void 0,"html",{escape:!0}]]),e(`
	`)]),y,n("pre",null,[e("	"),s((t(),o("code",null,[e(`
		q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
	`)])),[[l,void 0,"css"]]),e(`
`)]),x,q,w,n("pre",null,[e("	"),s((t(),o("code",null,[e(`
		`),L,e(`
	`)])),[[l,void 0,"html",{escape:!0}]]),e(`
`)]),N,n("pre",null,[e("	"),s((t(),o("code",null,[e(`
		.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
	`)])),[[l,void 0,"css"]]),e(`
`)]),B,C,E,I,n("pre",null,[e("		"),s((t(),o("code",null,[e(`
			`),T,e(`
		`)])),[[l,void 0,"html",{escape:!0}]]),e(`
	`)]),V,n("pre",null,[e("	"),s((t(),o("code",null,[e(`
		li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
	`)])),[[l,void 0,"css"]]),e(`
`)]),D,n("pre",null,[e("	"),s((t(),o("code",null,[e(`
		var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
	`)])),[[l,void 0,"js"]]),e(`
`)]),F,P],64)}}};export{j as default};
