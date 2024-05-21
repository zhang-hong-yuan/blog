import{P as a}from"./prismjs-Cy_Hpibq.js";import{y as l,ao as r,o as i,c as s,e,q as t,a4 as n,F as c,at as d}from"./@vue-DejhS5Sx.js";import"./@babel-Cpj98o6Y.js";const h=e("h1",null,"File Highlight",-1),u=e("p",null,"Fetch external files and highlight them with Prism. Used on the Prism website itself.",-1),p=e("blockquote",null,[t(" 官网："),e("a",{href:"https://prismjs.com/plugins/file-highlight/"},"https://prismjs.com/plugins/file-highlight/")],-1),g=e("h2",null,"How to use",-1),f=e("p",null,"You don't need to specify the language, it's automatically determined by the file extension. If, however, the language cannot be determined from the file extension or the file extension is incorrect, you may specify a language as well (with the usual class name way).",-1),m=e("p",null,[t("Use the "),e("code",null,"data-range"),t(" attribute to display only a selected range of lines from the file, like so:")],-1),_=d("<p>Lines start at 1, so <code>&quot;1,5&quot;</code> will display line 1 up to and including line 5. It&#39;s also possible to specify just a single line (e.g. <code>&quot;5&quot;</code> for just line 5) and open ranges (e.g. <code>&quot;3,&quot;</code> for all lines starting at line 3). Negative integers can be used to specify the n-th last line, e.g. -2 for the second last line.</p><p>When <code>data-range</code> is used in conjunction with the Line Numbers plugin, this plugin will add the proper <code>data-start</code> according to the specified range. This behavior can be overridden by setting the <code>data-start</code> attribute manually. </p><p>Please note that the files are fetched with XMLHttpRequest. This means that if the file is on a different origin, fetching it will fail, unless CORS is enabled on that website.</p>",3),x={__name:"___6",setup(y){return l(()=>{a.highlightAll()}),(b,v)=>{const o=r("code");return i(),s(c,null,[h,u,p,g,e("p",null,[t("Use the data-src attribute on empty "),n((i(),s("code",null,[t("<pre>")])),[[o,void 0,void 0,{html:!0}]]),t(" elements, like so:")]),n((i(),s("pre",null,[t(`		<pre data-src="myfile.js"></pre>
	`)])),[[o,void 0,void 0,{html:!0,escape:!0}]]),f,m,n((i(),s("pre",null,[t(`
	<pre data-src="myfile.js" data-range="1,5"></pre>

	`)])),[[o,void 0,void 0,{html:!0,escape:!0}]]),_],64)}}};export{x as default};