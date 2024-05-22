import{_ as l}from"./index-C58PDwY0.js";import{ao as a,o as t,c as i,e,q as n,a4 as s,F as c,at as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},h=e("h1",null,":where()",-1),d=e("p",null,"‘:where()’ CSS 伪类函数接受选择器列表作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。",-1),m=e("p",null,"‘:where()’ 和 ‘:is()’ 的不同之处在于，‘:where()’ 的优先级总是为 0，但是 ‘:is()’ 的优先级是由它的选择器列表中优先级最高的选择器决定的。",-1),u=e("h3",null,"可容错选择器解析",-1),_=e("p",null,"规范将 ‘:is()’ 和 ‘:where()’ 定义为接受一个可容错选择器列表。",-1),f=e("p",null,"在 CSS 中使用选择器列表时，如果任何选择器无效，则整个列表被视为无效。当使用 ‘:is()’ 或 ‘:where()’ 而不是整个选择器列表时，如果某个选择器无法解析，则被视为无效，不正确或不受支持的选择器将被忽略，其他选择器将被使用。",-1),g=e("p",null,"即使在不支持 ‘:unsupported’ 的浏览器中，仍将正确解析 ‘:valid’，而：",-1),y=e("p",null,"在不支持 ‘:unsupported’ 浏览器中即使它们支持 ‘:valid’，仍将忽略。",-1),w=e("h6",null,"比较 :where() 和 :is()",-1),v=e("p",null,"该示例展示了 ‘:where()’ 是如何起作用的，并且也阐述了 ‘:where()’ 和 ‘:is()’ 的区别。",-1),k=r(`<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>`,1),T=r(`<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>`,1),z=e("p",null,"在这个例子中，有两篇文章，每篇文章包含一个段落、一个侧边栏和一个页脚。它们由于使用标记子元素的不同而不同。",-1),H=e("p",null,"为了使选择它们内部的链接更简单，但仍然不同，我们可以使用 ‘:is()’ 或 ‘:where()’，方式如下：",-1),b=e("p",null,"然而，以后想使用一个简单选择器覆盖页脚的链接应该怎么办？",-1),S=r('<p>这个红色的链接不起作用，因为 ‘:is()’ 中的选择器会计入整体选择器的优先级，并且类选择器的优先级高于元素选择器。</p><p>然而，‘:where()’ 中的选择器的优先级是 0，所以橘色的页脚链接将被简单选择器覆盖。</p><figure id="demo-20240401-1909"><article><h2>:is()-styled links</h2><section class="is-styling"><p> Here is my main content. This <a href="https://mozilla.org">contains a link</a>. </p></section><aside class="is-styling"><p> Here is my aside content. This <a href="https://developer.mozilla.org">also contains a link</a>. </p></aside><footer class="is-styling"><p> This is my footer, also containing <a href="https://github.com/mdn">a link</a>. </p></footer></article><article><h2>:where()-styled links</h2><section class="where-styling"><p> Here is my main content. This <a href="https://mozilla.org">contains a link</a>. </p></section><aside class="where-styling"><p> Here is my aside content. This <a href="https://developer.mozilla.org">also contains a link</a>. </p></aside><footer class="where-styling"><p> This is my footer, also containing <a href="https://github.com/mdn">a link</a>. </p></footer></article></figure>',3);function x(B,N){const o=a("code");return t(),i(c,null,[h,d,e("pre",null,[n("		"),s((t(),i("code",null,[n(`
/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
		`)])),[[o,void 0,"css"]]),n(`
	`)]),m,u,_,f,e("pre",null,[n("			"),s((t(),i("code",null,[n(`
:is(:valid, :unsupported) {
  /* … */
}
			`)])),[[o,void 0,"css"]]),n(`
		`)]),g,e("pre",null,[n("			"),s((t(),i("code",null,[n(`
:valid,
:unsupported {
  /* … */
}
			`)])),[[o,void 0,"css"]]),n(`
		`)]),y,w,v,e("pre",null,[n("		"),s((t(),i("code",null,[n(`
`),k,n(`

`),T,n(`
		`)])),[[o,void 0,"html",{escape:!0}]]),n(`
	`)]),z,H,e("pre",null,[n("	"),s((t(),i("code",null,[n(`
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
	`)])),[[o,void 0,"css"]]),n(`
`)]),b,e("pre",null,[n("	"),s((t(),i("code",null,[n(`
footer a {
  color: blue;
}
	`)])),[[o,void 0,"css"]]),n(`
`)]),S],64)}const an=l(p,[["render",x]]);export{an as default};
