import{ao as a,o as r,c as s,a4 as n,e as t,q as c,F as d,at as l}from"./@vue-DejhS5Sx.js";const p=t("h1",null,"<progress>",-1),i=t("p",null,"【<progress>】标签与 JavaScript 一起使用来显示任务的进度。",-1),u=t("p",null,"下载代码：",-1),m=l("<p>【&lt;progress&gt;】标签不适合用来表示度量衡(例如，磁盘空间使用情况或相关的查询结果)。表示度量衡，使用 【&lt;meter&gt;】 标签代替。</p><table><tr><th>属性</th><th>值</th><th>描述</th></tr><tr><td>max</td><td><em>number</em></td><td>规定需要完成的值。</td></tr><tr><td>value</td><td><em>number</em></td><td>规定进程的当前值。</td></tr></table>",2),o=`<progress id='progress' value="0" max="100"></progress>
<button>下载</button>`,b={__name:"progress",setup(_){return(g,h)=>{const e=a("code");return r(),s(d,null,[p,i,n(t("pre",{textContent:o},null,512),[[e,void 0,"html"]]),t("section",{innerHTML:o}),u,n((r(),s("pre",null,[c(`<progress id='progress' value="0" max="100"></progress>
<button onclick="start_run(100)">下载</button>

<script>
  function start_run(n) {
    if (n \`= 0) alert("下载完成")
    
    var progress = document.getElementById("progress")

    progress.value = 100 - --n
    setTimeout("start_run(" + n + ")", 100)
  }
<\/script>`)])),[[e,void 0,"html"]]),m],64)}}};export{b as default};
