import{_ as s}from"./index-C58PDwY0.js";import{ao as l,o as n,c as o,e,a4 as r,q as t,F as a,at as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},h=e("h1",null,"Helper functions",-1),c=e("p",null,"Prism also provides some useful function for creating and modifying language definitions.",-1),m=e("h2",null,"extend",-1),p=e("p",null,[t("Creates a deep copy of the language with the given id and appends the given tokens. "),e("strong",null,"Return"),t(" The new language created.")],-1),g=d("<h4>Parameters:</h4><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>‘id’</td><td>‘string’</td><td><p>The id of the language to extend. This has to be a key in ‘Prism.languages’.</p></td></tr><tr><td>‘redef’</td><td>‘Grammar’</td><td><p>The new tokens to append.</p></td></tr></tbody></table><p>If a token in ‘redef’ also appears in the copied language, then the existing token in the copied language will be overwritten at its original position.</p><h4>Best practices</h4><p>Since the position of overwriting tokens (token in ‘redef’ that overwrite tokens in the copied language) doesn&#39;t matter, they can technically be in any order. However, this can be confusing to others that trying to understand the language definition because, normally, the order of tokens matters in Prism grammars.</p><p>Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens. Furthermore, all non-overwriting tokens should be placed after the overwriting ones.</p><h4>Example</h4>",7),f=e("h2",null,"insertBefore",-1),_=e("p",null,[t("Inserts tokens before another token in a language definition or any other grammar. "),e("strong",null,"Return"),t(": The new grammar object.")],-1),b=e("h4",null,"Parameters:",-1),k=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),v=e("td",null,"‘inside’",-1),y=e("td",null,[e("code",null,"string")],-1),w=e("code",null,"root",-1),j=e("tr",null,[e("td",null,"‘before’"),e("td",null,[e("code",null,"string")]),e("td",null,[e("p",null,"The key to insert before.")])],-1),P=e("tr",null,[e("td",null,"‘insert’"),e("td",null,[e("code",null,"Grammar")]),e("td",null,[e("p",null,"An object containing the key-value pairs to be inserted.")])],-1),S=e("td",null,"‘root’",-1),T=e("td",null,[e("code",null,"Object.<string, any>")],-1),x=e("p",null,[t("The object containing "),e("code",null,"inside"),t(", i.e. the object that contains the object to be modified.")],-1),B=e("h4",null,"Usage",-1),C=e("p",null,"then the ‘style’ token will be added (and processed) at the end. ‘insertBefore’ allows you to insert tokens before existing tokens. For the CSS example above, you would use it like this:",-1),D=e("h4",null,"Special cases",-1),F=e("p",null,"If the grammars of ‘inside’ and ‘insert’ have tokens with the same name, the tokens in ‘inside’'s grammar will be ignored.",-1),H=e("p",null,"This behavior can be used to insert tokens after ‘before’:",-1),I=e("h4",null,"Limitations",-1),M=e("p",null,"The main problem ‘insertBefore’ has to solve is iteration order. Since ES2015, the iteration order for object properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave differently when keys are deleted and re-inserted. So ‘insertBefore’ can't be implemented by temporarily deleting properties which is necessary to insert at arbitrary positions.",-1),N=e("p",null,"To solve this problem, ‘insertBefore’ doesn't actually insert the given tokens into the target object. Instead, it will create a new object and replace all references to the target object with the new one. This can be done without temporarily deleting properties, so the iteration order is well-defined.",-1),G=e("p",null,"However, only references that can be reached from ‘Prism.languages’ or ‘insert’ will be replaced. I.e. if you hold the target object in a variable, then the value of the variable will not change.",-1);function E(V,L){const i=l("code");return n(),o(a,null,[h,c,m,e("p",null,[r((n(),o("code",null,[t("Prism.languages.extend")])),[[i,void 0,"js"]]),t(" is useful for when your language is very similar to another existing language.")]),p,e("pre",null,[t("			"),r((n(),o("code",null,[t(`
				(static) extend(id, redef) → {Grammar}
			`)])),[[i,void 0,"ts"]]),t(`
		`)]),g,e("pre",null,[t("			"),r((n(),o("code",null,[t(`
				Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
    // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
    // at its original position
    'comment': { ... },
    // CSS doesn't have a 'color' token, so this token will be appended
    'color': /\\b(?:red|green|blue)\\b/
})
			`)])),[[i,void 0,"js"]]),t(`
		`)]),f,e("p",null,[r((n(),o("code",null,[t("Prism.languages.insertBefore")])),[[i,void 0,"js"]]),t(" can be used to modify existing languages definitions.")]),_,e("pre",null,[t("		"),r((n(),o("code",null,[t(`
			(static) insertBefore(inside, before, insert, rootopt) → {Grammar}
		`)])),[[i,void 0,"ts"]]),t(`
	`)]),b,e("table",null,[k,e("tbody",null,[e("tr",null,[v,y,e("td",null,[e("p",null,[t("The property of "),w,t(" (e.g. a language id in "),r((n(),o("code",null,[t("Prism.languages")])),[[i,void 0,"js"]]),t(") that contains the object to be modified.")])])]),j,P,e("tr",null,[S,T,e("td",null,[x,e("p",null,[t("Defaults to "),r((n(),o("code",null,[t("Prism.languages")])),[[i,void 0,"js"]]),t(".")])])])])]),B,e("p",null,[t("This helper method makes it easy to modify existing languages. For example, the CSS language definition not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded in HTML through "),r((n(),o("code",null,[t("<style>")])),[[i,void 0,"html"]]),t(" elements. To do this, it needs to modify "),r((n(),o("code",null,[t("Prism.languages.markup")])),[[i,void 0,"js"]]),t(" and add the appropriate tokens. However, "),r((n(),o("code",null,[t("Prism.languages.markup")])),[[i,void 0,"js"]]),t(" is a regular JavaScript object literal, so if you do this: ")]),e("pre",null,[t("				"),r((n(),o("code",null,[t(`
					Prism.languages.markup.style = {
    // token
}
				`)])),[[i,void 0,"js"]]),t(`
			`)]),C,e("pre",null,[t("			"),r((n(),o("code",null,[t(`
				Prism.languages.insertBefore('markup', 'cdata', {
    'style': {
        // token
    }
})
			`)])),[[i,void 0,"js"]]),t(`
		`)]),D,F,H,e("pre",null,[t("			"),r((n(),o("code",null,[t(`
				Prism.languages.insertBefore('markup', 'comment', {
    'comment': Prism.languages.markup.comment,
    // tokens after 'comment'
})
			`)])),[[i,void 0,"js"]]),t(`
		`)]),I,M,N,G,e("pre",null,[t("			 "),r((n(),o("code",null,[t(`
				var oldMarkup = Prism.languages.markup
var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... })

assert(oldMarkup !== Prism.languages.markup)
assert(newMarkup === Prism.languages.markup)
			 `)])),[[i,void 0,"js"]]),t(`
		`)])],64)}const _e=s(u,[["render",E]]);export{_e as default};
