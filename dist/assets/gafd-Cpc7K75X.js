import{_ as l}from"./index-C58PDwY0.js";import{ao as i,o,c as n,e,q as t,a4 as s,F as r,at as u}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},h=e("h1",null,"Creating a new language definition",-1),p=e("p",null,"This section will explain the usual workflow of creating a new language definition.",-1),c=e("p",null,"As an example, we will create the language definition of the fictional Foo's Binary, Artistic Robots™ language or just Foo Bar for short.",-1),g=e("br",null,null,-1),m=e("p",null,"1.Create a new file ‘components/prism-foo-bar.js’.",-1),f=e("p",null,"In this example, we choose ‘foo-bar’ as the id of the new language. The language id has to be unique and should work well with the ‘language-xxxx’ CSS class name Prism uses to refer to language definitions. Your language id should ideally match the regular expression ‘/^[a-z][a-z\\d]*(?:-[a-z][a-z\\d]*)*$/’.",-1),_=e("br",null,null,-1),b=e("p",null,"2.Edit ‘components.json’ to register the new ‘language’ by adding it to the languages object. (Please note that all language entries are sorted alphabetically by title.) Our new entry for this example will look like this:",-1),y=u("<blockquote> Note: Any changes made to ‘components.json’ require a rebuild (see step 3). </blockquote><br><p>3.Rebuild Prism by running ‘npm run build’.</p><p>You have to reload the test page to apply changes made to ‘prism-foo-bar.js’ but you don&#39;t have to rebuild Prism itself. However, if you change ‘components.json’ (e.g. because you added a dependency) then these changes will not show up on the test page until you rebuild Prism.</p><br><p>4.Write the language definition.</p><p>The above section already explains the makeup of language definitions.</p><br><p>5.Adding aliases.</p><p>Aliases for are useful if your language is known under more than just one name or there are very common abbreviations for your language (e.g. JS for JavaScript). Keep in mind that aliases are very similar to language ids in that they also have to be unique (i.e. there cannot be an alias which is the same as another alias of language id) and work as CSS class names.</p><p>In this example, we will register the alias ‘foo’ for ‘foo-bar’ because Foo Bar code is stored in ‘.foo’ files.</p><p>To add the alias, we add this line at the end of ‘prism-foo-bar.js’:</p>",12),w=e("p",null,"Aliases also have to be registered in ‘components.json’ by adding the ‘alias’ property to the language entry. In this example, the updated entry will look like this:",-1),v=e("blockquote",null," Note: ‘alias’ can also be a string array if you need to register multiple aliases. ",-1),k=e("p",null,"Using ‘aliasTitles’, it's also possible to give aliases specific titles. In this example, this won't be necessary but a good example as to where this is useful is the markup language:",-1),x=e("br",null,null,-1),j=e("p",null,"6.Adding tests.",-1),T=e("p",null,"Create a folder ‘tests/languages/foo-bar/’. This is where your test files will live. The test format and how to run tests is described here.",-1),q=e("p",null,"You should add a test for every major feature of your language. Test files should test the common case and certain edge cases (if any). Good examples are the tests of the JavaScript language.",-1),S=e("p",null,"You can use this template for new .test files:",-1),F=e("p",null,"For every test file:",-1),A=e("li",null,"Add the code to test and a brief description.",-1),B=e("li",null,[t("Verify that your language definition correctly highlights the test code. This can be done using your local version of the test page. "),e("blockquote",null,"Note: Using the Show tokens options, you see the token stream your language definition created. ")],-1),C=e("p",null,"This command will take the token stream your language definition currently produces and inserted into the test file. The empty space between the two lines separating the code and the description of test case will be replaced with a simplified version of the token stream.",-1),N=e("li",null,"Carefully check that the inserted token stream JSON is what you expect.",-1),P=e("br",null,null,-1),Y=e("p",null,"7.Add an example page.",-1),I=e("p",null,"Create a new file ‘examples/prism-foo-bar.html’. This will be the template containing the example markup. Just look at other examples to see how these files are structured.",-1),J=e("p",null,"We don't have any rules as to what counts as an example, so a single Full example section where you present the highlighting of the major features of the language is enough.",-1),M=e("br",null,null,-1),R=e("br",null,null,-1),V=e("p",null,"Your language definition is now ready!",-1);function z(G,H){const a=i("code");return o(),n(r,null,[h,p,c,g,m,f,_,b,e("pre",null,[t("			"),s((o(),n("code",null,[t(`
				"foo-bar": {
	"title": "Foo Bar",
	"owner": "Your GitHub name"
}
			`)])),[[a,void 0,"json"]]),t(`
		`)]),e("p",null,[t("If your language definition depends any other languages, you have to specify this here as well by adding a "),s((o(),n("code",null,[t('"require"')])),[[a,void 0,"js"]]),t(" property. E.g. "),s((o(),n("code",null,[t('"require": "clike"')])),[[a,void 0,"js"]]),t(", or "),s((o(),n("code",null,[t('"require": ["markup", "css"]')])),[[a,void 0,"js"]]),t(". For more information on dependencies read the declaring dependencies section.")]),y,e("pre",null,[t("		"),s((o(),n("code",null,[t(`
			Prism.languages.foo = Prism.languages['foo-bar']
		`)])),[[a,void 0,"js"]]),t(`
	`)]),w,e("pre",null,[t("			"),s((o(),n("code",null,[t(`
				"foo-bar": {
	"title": "Foo Bar",
	"alias": "foo",
	"owner": "Your GitHub name"
}
			`)])),[[a,void 0,"json"]]),t(`
		`)]),v,k,e("pre",null,[t("			"),s((o(),n("code",null,[t(`
				"markup": {
	"title": "Markup",
	"alias": ["html", "xml", "svg", "mathml"],
	"aliasTitles": {
		"html": "HTML",
		"xml": "XML",
		"svg": "SVG",
		"mathml": "MathML"
	},
	"option": "default"
}
			`)])),[[a,void 0,"json"]]),t(`
		`)]),x,j,T,q,S,e("pre",null,[t("			"),s((o(),n("code",null,[t(`
				The code to test.

----------------------------------------------------

----------------------------------------------------

Brief description.
			`)])),[[a,void 0,"json"]]),t(`
		`)]),F,e("ol",null,[A,B,e("li",null,[t("Once you carefully checked that the test case is handled correctly (i.e. by using the test page), run the following command: "),e("p",null,[s((o(),n("code",null,[t("npm run test:languages -- --language=foo-bar --accept")])),[[a,void 0,"bash"]])]),C]),N,e("li",null,[t("Re-run "),s((o(),n("code",null,[t("npm run test:languages -- --language=foo-bar")])),[[a,void 0,"bash"]]),t(" to verify that the test passes. ")])]),P,Y,I,J,M,e("p",null,[t("8.Run "),s((o(),n("code",null,[t("npm test")])),[[a,void 0,"bash"]]),t(" to check that all tests pass, not just your language tests. This will usually pass without problems. If you can't get all the tests to pass, skip this step.")]),R,e("p",null,[t("9.Run "),s((o(),n("code",null,[t("npm run build")])),[[a,void 0,"bash"]]),t(" again.")]),V],64)}const we=l(d,[["render",z]]);export{we as default};