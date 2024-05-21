import{ao as r,o as c,c as l,a4 as s,e as t,F as n}from"./@vue-DejhS5Sx.js";const d=t("h1",null,"<colgroup>",-1),a=t("p",null,"【<colgroup>】 标签用于对表格中的列进行组合，以便对其进行格式化。通过使用 【<colgroup>】 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。",-1),p=t("p",null,"【<col>】 标签规定了 【<colgroup>】 元素内部的每一列的列属性。",-1),u=t("p",null,"只能在 【<table>】 元素之内，在任何一个 【<caption>】 元素之后，在任何一个 【<thead>】、【<tbody>】、【<tfoot>】、【<tr>】 元素之前使用 【<colgroup>】 标签。如果想对 【<colgroup>】 中的某列定义不同的属性，请在 【<colgroup>】 标签内使用 【<col>】 标签。",-1),o=`<table border="1">
  <colgroup>
    <col span="2" style="background-color:pink">
    <col style="background-color:skyblue">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>5869207</td>
    <td>My first CSS</td>
    <td>$49</td>
  </tr>
</table>`,b={__name:"colgroup",setup(i){return(_,h)=>{const e=r("code");return c(),l(n,null,[d,a,p,s(t("pre",{textContent:o},null,512),[[e,void 0,"html"]]),t("section",{innerHTML:o}),u],64)}}};export{b as default};
