import{ao as a,o as s,c as r,a4 as n,e as t,F as c,at as m}from"./@vue-DejhS5Sx.js";const o="/blog/assets/planets-tmhtKw9Y.gif",p=t("h1",null,"<map>",-1),l=t("p",null,"点击太阳或其他行星，注意变化：",-1),i=m('<section><a href="https://www.runoob.com/try/try.php?filename=tryhtml_areamap" target="_blank"><img decoding="async" src="'+o+'" width="145" height="126" alt="Planets" usemap="#planetmap"></a></section><p>【&lt;map&gt;】 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。</p><p>【&lt;img&gt;】 中的 usemap 属性可引用 【&lt;map&gt;】 中的 id 或 name 属性(取决于浏览器)，所以我们应同时向 【&lt;map&gt;】 添加 id 和 name 属性。以创建图像与映射之间的关系。 </p><table><tr><th>属性</th><th>值</th><th>描述</th></tr><tr><td>name</td><td>mapname 必需。</td><td>为 image-map 规定的名称。</td></tr></table>',4),h=`<img decoding="async" src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
 
<map name="planetmap">
	<area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
	<area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
	<area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
</map>`,f={__name:"map",setup(d){return(_,u)=>{const e=a("code");return s(),r(c,null,[p,l,n(t("pre",{textContent:h},null,512),[[e,void 0,"html"]]),i],64)}}};export{f as default};
