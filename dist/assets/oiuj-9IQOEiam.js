import{_ as a}from"./index-C58PDwY0.js";import{ao as i,o as n,c as o,e,q as t,a4 as r,F as p,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},h=e("h1",null,"Dependencies",-1),c=e("p",null,"Languages and plugins can depend on each other, so Prism has its own dependency system to declare and resolve dependencies.",-1),u=e("h2",null,"Declaring dependencies",-1),m=e("p",null,"You declare a dependency by adding a property to the entry of your language or plugin in the ‘components.json’ file. The name of the property will be dependency kind and its value will be the component id of the dependee. If multiple languages or plugins are depended upon then you can also declare an array of component ids.",-1),g=e("p",null,"In the following example, we will use the ‘require’ dependency kind to declare that a fictional language Foo depends on the JavaScript language and that another fictional language Bar depends on both JavaScript and CSS.",-1),f=s("<h4>Dependency kinds</h4><p>There are 3 kinds of dependencies:</p><h4>‘require’:</h4><p>Prism will ensure that all dependees are loaded before the depender.</p><p>You are not allowed to modify the dependees unless they are also declared as ‘modify’.</p><p>This kind of dependency is most useful if you e.g. extend another language or dependee as an embedded language (e.g. like PHP is embedded in HTML).</p><h4>‘optional’:</h4><p>Prism will ensure that an optional dependee is loaded before the depender if the dependee is loaded. Unlike ‘require’ dependencies which also guarantee that the dependees are loaded, ‘optional’ dependencies only guarantee the order of loaded components.</p><p>You are not allowed to modify the dependees. If you need to modify the optional dependee, declare it as ‘modify’ instead.</p><p>This kind of dependency is useful if you have embedded languages but you want to give the users a choice as to whether they want to include the embedded language. By using ‘optional’ dependencies, users can better control the bundle size of Prism by only including the languages they need.</p><p>E.g. HTTP can highlight JSON and XML payloads but it doesn&#39;t force the user to include these languages.</p><h4>‘modify’:</h4><p>This is an ‘optional’ dependency which also declares that the depender might modify the dependees.</p><p>This kind of dependency is useful if your language modifies another language (e.g. by adding tokens).</p><p>E.g. CSS Extras adds new tokens to the CSS language.</p><br><p>To summarize the properties of the different dependency kinds:</p><table><tbody><tr><th></th><th>Non-optional</th><th>Optional</th></tr><tr><th>Read only</th><td>‘require’</td><td>‘optional’</td></tr><tr><th>Modifiable</th><td></td><td>‘modify’</td></tr></tbody></table><blockquote>Note: You can declare a component as both require and modify</blockquote>",19);function y(b,_){const d=i("code");return n(),o(p,null,[h,c,u,m,g,e("pre",null,[t("			"),r((n(),o("code",null,[t(`
				{
	"languages": {
		"javascript": { "title": "JavaScript" },
		"css": { "title": "CSS" },
		...,
		"foo": {
			"title": "Foo",
			"require": "javascript"
		},
		"bar": {
			"title": "Bar",
			"require": ["css", "javascript"]
		}
	}
}
			`)])),[[d,void 0,"json---8,12"]]),t(`
		`)]),f],64)}const W=a(l,[["render",y]]);export{W as default};
