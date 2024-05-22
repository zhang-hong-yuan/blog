import{_ as e}from"./index-C58PDwY0.js";import{ao as c,o,c as s,a4 as r,q as t,F as n,at as d,e as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},m=d("<h2>修改样式</h2><p>可以使用 <code>css()</code> 方法来修改简单元素行内样式；也可以修改多个行内样式。</p><ul><li>获取值：<code>var strColor = $(this).css(&#39;color&#39;)</code></li><li>修改单一样式：<code>$(this).css(&quot;color&quot;, &quot;red&quot;)</code> 属性必须加引号，值如果是数字可以不用跟单位和引号</li><li>修改多组样式：<code>$(this).css({&quot;color&quot;:&quot;white&quot;,&quot;font-size&quot;:&quot;20px&quot;})</code> 参数可以是对象形式。属性名和属性值用冒号隔开，属性可以不用加引号</li></ul><p>jQuery 里面的排他思想：</p>",4),p=i("p",null,"jQuery类作用等同于 classList，可以操作类样式。注意操作类里面的参数不要加点。",-1),u=i("ul",null,[i("li",null,[t("添加类："),i("code",null,'$("div").addClass("current")')]),i("li",null,[t("删除类："),i("code",null,'$("div").removeClass("current")'),t(" (移除全部类可以省略参数)")]),i("li",null,[t("切换类："),i("code",null,'$("div").toggleClass("current")')])],-1),v=i("br",null,null,-1),_=i("h3",null,"案例：tab栏切换",-1);function h(q,$){const l=c("code");return o(),s(n,null,[m,r((o(),s("pre",null,[t(`$(this).css('color','red')
$(this).siblings().css('color','')

$(this).css('color', 'red').sibling().css('color', '') // 链式编程`)])),[[l,void 0,"js"]]),p,u,v,_,r((o(),s("pre",null,[t(`<div class="tab">
    <div class="tab_list">
        <ul>
            <li class="current">商品介绍</li>
            <li>规格与包装</li>
            <li>售后保障</li>
            <li>商品评价（50000）</li>
            <li>手机社区</li>
        </ul>
    </div>
    <div class="tab_con">
        <div class="item" style="display: block;">商品介绍模块内容</div>
        <div class="item">规格与包装模块内容</div>
        <div class="item">售后保障模块内容</div>
        <div class="item">商品评价（50000）模块内容</div>
        <div class="item">手机社区模块内容</div>
    </div>
</div>
​
<script>
    $(function() {
        $(".tab_list li").click(function() {
            $(this).addClass("current").siblings().removeClass("current")
            var index = $(this).[...]
            $(".tab_con .item").eq(index).show().siblings().hide()
        });
    })
<\/script>`)])),[[l,void 0,"html"]])],64)}const W=e(a,[["render",h]]);export{W as default};
