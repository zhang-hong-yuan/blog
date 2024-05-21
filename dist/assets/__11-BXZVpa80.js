import{_ as a}from"./index-C58PDwY0.js";import{ao as d,o,c as n,e,q as t,a4 as r,F as c,at as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},u=e("h1",null,"Toolbar",-1),p=e("p",null,"Attach a toolbar for plugins to easily register buttons on the top of a code block.",-1),h=e("h2",null,"How to use",-1),b=e("p",null,[t("The simplest method is through the HTML API. Add a "),e("code",null,"data-label"),t(" attribute to the "),e("code",null,"pre"),t(" element, and the Toolbar plugin will read the value of that attribute and append a label to the code snippet.")],-1),m={"data-label":"Hello World!"},g=e("p",null,[t("If you want to provide arbitrary HTML to the label, create a "),e("code",null,"template"),t(" element with the HTML you want in the label, and provide the "),e("code",null,"template"),t(" element's "),e("code",null,"id"),t(" to "),e("code",null,"data-label"),t(". The Toolbar plugin will use the template's content for the button. You can also use to declare your event handlers inline:")],-1),_={"data-label":"my-label-button"},v=i("<blockquote> vue 中最好不要使用该方式。 </blockquote><h2>Registering buttons</h2><p>For more flexibility, the Toolbar exposes a JavaScript function that can be used to register new buttons or labels to the Toolbar, <code>Prism.plugins.toolbar.registerButton</code>.</p><p>The function accepts a key for the button and an object with a <code>text</code> property string and an optional <code>onClick</code> function or a <code>url</code> string. The <code>onClick</code> function will be called when the button is clicked, while the <code>url</code> property will be set to the anchor tag&#39;s <code>href</code>. </p>",4),f=i("<blockquote> 不要重复创建！否则会 warning！(也就是不要写在指令函数内部) </blockquote><p>See how the above code registers the <code>Hello World!</code> button? You can use this in your plugins to register your own buttons with the toolbar.</p><p>If you need more control, you can provide a function to <code>registerButton</code> that returns either a <code>span</code>, <code>a</code>, or <code>button</code> element. </p>",3),w=e("p",null,"The above function creates the Select Code button you see, and when you click it, the code gets highlighted.",-1),y=e("h2",null,"Ordering buttons",-1),T=e("p",null,[t("By default, the buttons will be added to the code snippet in the order they were registered. If more control over the order is needed, the "),e("code",null,"data-toolbar-order"),t(" attribute can be used. Given a comma-separated list of button names, it will ensure that these buttons will be displayed in the given order.")],-1),k=e("p",null,"Buttons not listed will not be displayed. This means that buttons can be disabled using this technique.",-1),x=e("p",null,'Example: The "Hello World!" button will appear before the "Select Code" button and the custom label button will not be displayed.',-1),H=e("p",null,[t("The "),e("code",null,"data-toolbar-order"),t(" attribute is inherited, so you can define the button order for the whole document by adding the attribute to the "),e("code",null,"body"),t(" of the page.")],-1);function B(S,q){const l=d("code");return o(),n(c,null,[u,p,h,e("p",null,[t("The Toolbar plugin allows for several methods to register your button, using the "),r((o(),n("code",null,[t("Prism.plugins.toolbar.registerButton")])),[[l,void 0,"js"]]),t(" function.")]),b,e("pre",m,[t(""),r((o(),n("code",null,[t(`
	<pre
	data-src="plugins/toolbar/prism-toolbar.js"
	data-label="Hello World!"
>
</pre>
`)])),[[l,void 0,"html"]]),t(`
	`)]),g,e("pre",_,[t(""),r((o(),n("code",null,[t(`
<pre
	data-src="plugins/toolbar/prism-toolbar.js"
	data-label="my-label-button"
>
</pre>
`)])),[[l,void 0,"html"]]),t(`
	`)]),e("pre",null,[t("		"),r((o(),n("code",null,[t(`
<template id="my-label-button">
	<button onclick="console.log('This is an inline-handler');">
	  My button
	</button>
</template>
	`)])),[[l,void 0,"html"]]),t(`
`)]),v,e("pre",null,[t("	"),r((o(),n("code",null,[t(`
		Prism.plugins.toolbar.registerButton('hello-world', {
	text: 'Hello World!', // required
	onClick: function (env) { // optional
		alert('This code snippet is written in ' + env.language + '.');
	}
})
	`)])),[[l,void 0,"js"]]),t(`
`)]),f,e("pre",null,[t("	"),r((o(),n("code",null,[t(`
		Prism.plugins.toolbar.registerButton('select-code', function(env) {
	var button = document.createElement('button');
	button.innerHTML = 'Select Code';

	button.addEventListener('click', function () {
		// Source: http://stackoverflow.com/a/11128179/2757940
		if (document.body.createTextRange) { // ms
			var range = document.body.createTextRange();
			range.moveToElementText(env.element);
			range.select();
		} else if (window.getSelection) { // moz, opera, webkit
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(env.element);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	});

	return button;
});
	`)])),[[l,void 0,"js"]]),t(`
`)]),w,y,T,k,x,e("pre",null,[t("	"),r((o(),n("code",null,[t(`
		<pre
			data-toolbar-order="hello-world,select-code"
			data-label="Hello World!"
		>
			<code></code>
		</pre>
	`)])),[[l,void 0,"html"]]),t(`
`)]),H,e("pre",null,[t("	"),r((o(),n("code",null,[t(`
		<body data-toolbar-order="select-code,hello-world,label"></body>
	`)])),[[l,void 0,"html"]]),t(`
`)])],64)}const it=a(s,[["render",B]]);export{it as default};
