import{_ as c}from"./index-C58PDwY0.js";import{ao as s,o as e,c as t,e as r,a4 as l,q as o,F as d,at as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},a=n("<h2>操作元素</h2><p>改变元素内容：</p><ul><li><code>element.innerText</code> 从起始位置到终止位置的内容, 但它去除 html 标签，同时空格和换行也会去掉。</li><li><code>element.innerHTML</code> 起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行。</li><li>innerText不返回隐藏元素的文本，而textContent返回所有文本。</li></ul><p> </p><p>常用元素的属性操作：src、href、id、alt、title</p><p> </p><p>利用 DOM 可以操作如下表单元素的属性：type、value、checked、selected、disabled</p><p>表单元素常见方法：reset()、submit()、focus()</p>",8),m=r("p",null,"注意：focus() 和 parentElement 只能在 DOM 结构形成之后使用！",-1),u=n("<p> </p><p>视频、音频远到的 currentTime 属性是当前的播放时间。</p><p> </p><h3>样式属性操作</h3><ul><li><code>element.style</code> 行内样式操作，权重比较高</li><li><code>element.className</code> 类名样式操作</li><li><code>getComputedStyle(element, [pseudoElt])</code> 返回一个实时的 CSSStyleDeclaration 对象(只读)</li></ul><p>classList 属性(注：所有类名都不带点)</p><ul><li>添加类：<code>element.classList.add(’类名’)</code></li><li>移除类：<code>element.classList.remove(’类名’)</code></li><li>切换类：<code>element.classList.toggle(’类名’)</code></li><li>判断类：<code>element.classList.contains(’类名’)</code> 返回 true 或 false</li></ul><p> </p><h3>轮播图案例</h3>",9),g=n("<h3>Swiper</h3><p>swiper的使用：</p><p>① 先引入两个文件：swiper.min.css和swiper.min.js</p><p>② 然后在官网上找到类似案例，复制html、css和js(最好展示页面 查看网页源代码)</p><p>③ 根据需求定制修改模块：</p><ul><li>查阅API文档(关键字检索)</li><li>用立即执行函数包裹script代码</li><li>为防止同一页面多个swiper相互冲突，应同时修改类名(html和js实例化一致)</li></ul><h3>自定义属性的操作</h3><p>以上都是元素本身自带的属性。</p><ul><li>获取内置属性值：<code>element.属性</code></li><li>设置内置属性值：<code>element.属性 = ‘值’</code></li></ul><p>自定义属性是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。</p><p>自定义属性以data-开头作为属性名并且赋值。</p><ul><li>设置属性值：<code>element.setAttribute(&#39;属性&#39;, &#39;值&#39;);</code></li><li>获取属性值：<code>element.getAttribute(&#39;属性&#39;);</code></li><li>移除属性：<code>element.removeAttribute(&#39;属性&#39;);</code></li></ul><p> </p>",13);function v(b,h){const i=s("code");return e(),t(d,null,[a,r("blockquote",null,[m,l((e(),t("pre",null,[o(`<style>
	.demo {
		background-color: orange;
	}
</style>

<button id="btn">点我创建一个输入框</button>

<script>
	const btn = document.getElementById('btn')

	btn.onclick = () => {
		const input = document.createElement('input')

		input.className = 'demo'
		input.value = 99
		input.onclick = () => { alert(1) }

		document.body.appendChild(input)

		// 这两个语句必须写在 document.body.appendChild(input) 的后面
		input.focus()
		input.parentElement.style.backgroundColor = 'skyblue'
	}
<\/script>
`)])),[[i,void 0,"html"]])]),u,l((e(),t("pre",null,[o(`<div class="slider">
    <div class="slider-wrapper">
        <!-- <img src="./images/slider01.jpg" alt="" /> -->
    </div>
    <div class="slider-footer">
        <p>对人类来说会不会太超前了？</p>
        <ul class="slider-indicator">
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="toggle">
          <button class="prev"><</button>
          <button class="next">></button>
        </div>
    </div>
</div>
  
<script>
    const data = [
        { url: './images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)' },
        { url: './images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)' },
        { url: './images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)' },
        { url: './images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)' },
        { url: './images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)' },
        { url: './images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)' },
        { url: './images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)' },
        { url: './images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)' },
    ]

    const img = document.querySelector('.slider-wrapper img')
    const p = document.querySelector('.slider-footer p')
    const footer = document.querySelector('.slider-footer')

    function toggle() {
        img.src = data[i].url
        p.innerHTML = data[i].title
        footer.style.backgroundColor = data[i].color

        document.querySelector('.slider-indicator .active').classList.remove('active')
        document.querySelector(\`.slider-indicator li:nth-child(\${i + 1})\`).classList.add('active')
    }

    // 1.右按钮业务
    const next = document.querySelector('.next')
    let i = 0  // 控制播放图片张数
    next.addEventListener('click', function () {
        i++
        i = i >= data.length ? 0 : i
        toggle()
    })

    // 2.左侧按钮业务
    const prev = document.querySelector('.prev')
    prev.addEventListener('click', function () {
        i--
        i = i < 0 ? data.length - 1 : i
        toggle()
    })

    // 3.自动播放模块
    let timerId = setInterval(function () {
        next.click()
    }, 1000)

    // 4.鼠标经过大盒子，停止定时器
    const slider = document.querySelector('.slider')
    slider.addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })

    // 5.鼠标离开大盒子，开启定时器
    slider.addEventListener('mouseleave', function () {
        if (timerId) clearInterval(timerId)
        timerId = setInterval(function () {
            next.click()
        }, 1000)
    })
<\/script>
`)])),[[i,void 0,"html"]]),g],64)}const R=c(p,[["render",v]]);export{R as default};
