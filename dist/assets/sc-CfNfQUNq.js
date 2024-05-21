import{_ as d}from"./index-C58PDwY0.js";import{ao as s,o as t,c as e,a4 as i,q as a,F as o,e as l,at as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},p=l("h1",null,"事件对象",-1),f=l("p",null,"event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。",-1),g=r('<p>这个 event 就是事件对象，习惯的写成 e 或者 evt。是个形参，当注册事件时，event 对象就被系统自动创建，不需要传递实参。</p><p>在 IE6~8 中，事件对象本身的获取存在兼容问题。解决: e = e || window.event;</p><figure><table><thead><tr><th style="text-align:left;">事件对象属性方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">e.target</td><td style="text-align:left;">返回触发事件的对象(标准)</td></tr><tr><td style="text-align:left;">e.type</td><td style="text-align:left;">返回事件的类型，比如 click mouseover 不带 on</td></tr><tr><td style="text-align:left;">e.preventDefault()</td><td style="text-align:left;">该方法阻止默认事件(默认行为)标准，比如不让链接跳转或者让提交按钮不提交</td></tr><tr><td style="text-align:left;">e.returnValue</td><td style="text-align:left;">该属性阻止默认事件(默认行为)非标准 ie6-8使用，比如不让链接跳转<code>return false</code> 也能阻止默认行为，没有兼容性问题。只限于传统的注册方式</td></tr><tr><td style="text-align:left;">e.stopPropagation()</td><td style="text-align:left;">阻止冒泡，标准。(捕获阶段也有效)</td></tr><tr><td style="text-align:left;">e.cancelBubble = true;</td><td style="text-align:left;">该属性阻止冒泡 非标准 ie6-8使用</td></tr></tbody></table></figure><blockquote><p>e.target 和 this 的区别：</p><ul><li>this 是事件绑定的元素，这个函数的调用者。</li><li>e.target 是事件触发的元素。</li></ul></blockquote><p>阻止事件冒泡的兼容性解决方案</p>',5),u=l("br",null,null,-1),v=l("p",null,"事件委托也称为事件代理， 在 jQuery 里面称为事件委派。原理：事件监听器设置在父节点上，然后利用冒泡原理影响每个子节点。",-1),m=l("p",null,"案例：tab栏切换",-1),h=r('<h3>鼠标事件对象</h3><figure><table><thead><tr><th style="text-align:left;">鼠标事件对象</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">offsetX 和 offsetY</td><td style="text-align:left;">鼠标相对于当前DOM元素左上角的位置</td></tr><tr><td style="text-align:left;">e.clientX 和 e.clientY</td><td style="text-align:left;">鼠标相对于浏览器窗口可视区的坐标</td></tr><tr><td style="text-align:left;">e.pageX 和 e.pageY</td><td style="text-align:left;">鼠标相对于文档页面的坐标。IE9+支持</td></tr><tr><td style="text-align:left;">e.screenX 和 e.screenY</td><td style="text-align:left;">鼠标相对于电脑屏幕的坐标</td></tr></tbody></table></figure><p>禁止鼠标右键菜单：<code>document.addEventListener(&#39;contextmenu&#39;, function(e){e.preventDefault();})</code></p><p>禁止鼠标选中：<code>document.addEventListener(&#39;selectstart&#39;, function(e){e.preventDefault();})</code></p><h3>键盘事件对象</h3><figure><table><thead><tr><th style="text-align:left;">键盘事件对象属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">key (只读属性)</td><td style="text-align:left;">返回该键的名称</td></tr><tr><td style="text-align:left;">keyCode (已弃用)</td><td style="text-align:left;">返回该键的ASCⅡ值</td></tr></tbody></table></figure><h3>触摸事件对象</h3><figure><table><thead><tr><th style="text-align:left;">触摸列表</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">touches</td><td style="text-align:left;">正在触摸屏幕的所有手指的一个列表</td></tr><tr><td style="text-align:left;">targetTouches</td><td style="text-align:left;">正在触摸当前 DOM 元素上的手指的一个列表当前手指的坐标值：targetTouches[0] 的 pageX 和 pageY</td></tr><tr><td style="text-align:left;">changedTouches</td><td style="text-align:left;">手指状态发生了改变的列表，从无到有，从有到无变化</td></tr></tbody></table></figure><p>移动端拖动元素：</p>',9);function y(x,b){const n=s("code");return t(),e(o,null,[p,f,i((t(),e("pre",null,[a(`eventTarget.onclick = function(event) {} 
eventTarget.addEventListener('click', function(event) {})
`)])),[[n,void 0,"js"]]),g,i((t(),e("pre",null,[a(`if(e && e.stopPropagation){
    e.stopPropagation();
} else {
    window.event.cancelBubble = true;
}
`)])),[[n,void 0,"js"]]),u,v,m,i((t(),e("pre",null,[a(`<div class="tab">
    <div class="tab-nav">
        <h3>每日特价</h3>
        <ul>
            <li><a data-id="0" class="active">精选</a></li>
            <li><a data-id="1">美食</a></li>
            <li><a data-id="2">百货</a></li>
            <li><a data-id="3">个护</a></li>
            <li><a data-id="4">预告</a></li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="item active">精选部分</div>
        <div class="item">美食部分</div>
        <div class="item">百货部分</div>
        <div class="item">个护部分</div>
        <div class="item">预告部分</div>
    </div>
</div>

<script>
    const ul = document.querySelector('.tab-nav ul')
    const items = document.querySelectorAll('.tab-content .item')

    ul.addEventListener('click', function (e) {
        if (e.target.tagName \`= 'A') {
            document.querySelector('.tab-nav .active').classList.remove('active')
            e.target.classList.add('active')

            const i = +e.target.dataset.id
            document.querySelector('.tab-content .active').classList.remove('active')
            items[i].classList.add('active')
        }
    })
<\/script>
`)])),[[n,void 0,"html"]]),h,i((t(),e("pre",null,[a(`var div = document.querySelector('div')

var startX = startY = 0
var x = y = 0

div.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX
    startY = e.targetTouches[0].pageY

    x = this.offsetLeft
    y = this.offsetTop
})

div.addEventListener('touchmove', function (e) {
    var moveX = e.targetTouches[0].pageX - startX
    var moveY = e.targetTouches[0].pageY - startY

    this.style.left = x + moveX + 'px'
    this.style.top = y + moveY + 'px'

    e.preventDefault()
})
`)])),[[n,void 0,"js"]])],64)}const Z=d(c,[["render",y]]);export{Z as default};
