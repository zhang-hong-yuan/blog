import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o,c as s,e,q as t,a4 as a,F as p,at as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},d=i("<h1>Copy to Clipboard Button</h1><p>Add a button that copies the code block to the clipboard when clicked.</p><h2>How to use</h2><p>The plugin depends on the Prism <ins>Toolbar</ins> plugin. In addition to including the plugin file with your PrismJS build, ensure it is loaded before the plugin.</p><h2>Settings</h2><p>By default, the plugin shows messages in English and sets a 5-second timeout after a click. You can use the following HTML5 data attributes to override the default settings:</p><ul><li>‘data-prismjs-copy’——default message displayed by Copy to Clipboard;</li><li>‘data-prismjs-copy-error’——a message displayed after failing copying, prompting the user to press Ctrl+C;</li><li>‘data-prismjs-copy-success’——a message displayed after a successful copying;</li><li>‘data-prismjs-copy-timeout’——a timeout (in milliseconds) after copying. Once the timeout passed, the success or error message will revert back to the default message. The value should be a non-negative integer.</li></ul><p>The plugin traverses up the DOM tree to find each of these attributes. The search starts at every ‘pre code’ element and stops at the closest ancestor element that has a desired attribute or at the worst case, at the ‘html’ element.</p><p>Warning! Although possible, you definitely shouldn&#39;t add these attributes to the ‘html’ element, because a human-readable text should be placed after the character encoding declaration (‘&lt;meta charset=&quot;...&quot;&gt;’), and the latter must be serialized completely within the first 512 (in older browsers) or 1024 bytes of the document. Consider using the ‘body’ element or one of its descendants.</p><h2>Styling</h2><p>This plugin supports customizing the style of the copy button. To understand how this is done, let&#39;s look at the HTML structure of the copy button:</p>",11),u=e("span",null,"Copy",-1),h=i("<p>The ‘copy-to-clipboard-button’ class can be used to select the button. The ‘data-copy-state’ attribute indicates the current state of the plugin with the 3 possible states being:</p><ul><li>‘data-copy-state=&quot;copy&quot;’——default state;</li><li>‘data-copy-state=&quot;copy-error&quot;’——the state after failing copying;</li><li>‘data-copy-state=&quot;copy-success&quot;’——the state after successful copying;</li></ul><p>These 3 states should be conveyed to the user either by different styling or displaying the button text.</p><br><h2>Examples</h2><h4>Sharing</h4><p>The following code blocks show modified messages and both use a half-second timeout. The other settings are set to default.</p><p>Source code:</p>",8),m=e("p",null,"Output:",-1),y={"data-prismjs-copy-timeout":"500"},g={"data-prismjs-copy":"Copy the JavaScript snippet!"},b=e("pre",null,[t("		"),e("code",{class:"language-c","data-prismjs-copy":"Copy the C snippet!"},`
int main() {
	return 0;
}
		`),t(`
	`)],-1),f=e("h3",null,"Inheritance",-1),_=e("p",null,"The plugin always use the closest ancestor element that has a desired attribute, so it's possible to override any setting on any descendant. In the following example, the ‘baz’ message is used. The other settings are set to default.",-1),v=e("p",null,"Source code:",-1),j=e("p",null,"Output:",-1),w={"data-prismjs-copy":"baz"};function C(T,S){const n=l("code");return o(),s(p,null,[d,e("pre",null,[t("		"),a((o(),s("code",null,[t(`
<button
	class="copy-to-clipboard-button"
	type="button"
	data-copy-state="copy"
>
	`),u,t(`
</button>
		`)])),[[n,void 0,void 0,{html:!0,escape:!0}]]),t(`
	`)]),h,e("pre",null,[t("		"),a((o(),s("code",null,[t(`

<body data-prismjs-copy-timeout="500">
	<pre>
		<code class="language-js" data-prismjs-copy="Copy the JavaScript snippet!">
			console.log('Hello, world!');
		</code>
	</pre>

	<pre>
		<code class="language-c" data-prismjs-copy="Copy the C snippet!">
			int main() {
				return 0;
			}
		</code>
	</pre>
</body>

		`)])),[[n,void 0,void 0,{html:!0}]]),t(`
	`)]),m,e("div",y,[e("pre",null,[t("		"),a((o(),s("code",g,[t(`
			console.log('Hello, world!');
		`)])),[[n,void 0,void 0,{js:!0}]]),t(`
	`)]),b]),f,_,v,e("pre",null,[t("	"),a((o(),s("code",null,[t(`

<body data-prismjs-copy="foo">
	<main data-prismjs-copy="bar">
		<pre>
			<code class="language-js" data-prismjs-copy="baz">
				const arraySparse = [1, 3, /* empty */, 7];
				let numCallbackRuns = 0;

				arraySparse.forEach((element) => {
					console.log({ element });
					numCallbackRuns++;
				});
			</code>
		</pre>
	</main>
</body>

	`)])),[[n,void 0,void 0,{html:!0}]]),t(`
`)]),j,e("pre",null,[t("	"),a((o(),s("code",w,[t(`

const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

	`)])),[[n,void 0,void 0,{js:!0}]]),t(`
`)])],64)}const st=r(c,[["render",C]]);export{st as default};
