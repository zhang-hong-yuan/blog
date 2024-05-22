import{_ as r}from"./index-C58PDwY0.js";import{ao as a,o as n,c as l,e,q as t,a4 as o,F as d,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c="/blog/assets/offset_client_scroll-B9aqgvNg.png",m={},p=s('<h2>尺寸、位置操作</h2><p> </p><h3>元素可视区 client 系列</h3><p>client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。</p><figure><table><thead><tr><th style="text-align:left;">client 系列属性</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">element.clientTop 和 element.clientLeft</td><td style="text-align:left;">返回元素上/左边框的大小(只读属性)</td></tr><tr><td style="text-align:left;">element.clientWidth 和 element.clientHeight</td><td style="text-align:left;">返回自身包括padding、内容区的宽/高度，不含边框(只读属性)</td></tr></tbody></table></figure><p> </p><h3>元素滚动 scroll 系列</h3><p>scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。</p><figure><table><thead><tr><th style="text-align:left;">scroll系列属性</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">element.scrollTop 和 element.scrollLeft</td><td style="text-align:left;">返回被卷去的上/左侧距离(可读写)</td></tr><tr><td style="text-align:left;">element.scrollWidth 和 element.scrollHeight</td><td style="text-align:left;">返回自身实际的宽/高度，不含边框(只读属性)</td></tr></tbody></table></figure><blockquote><p>注：页面滚动的距离通过 window.pageXOffset 获得。</p><p>滚动窗口至文档中的特定位置：window.scroll(x, y); 注意，不跟单位，直接写数字。</p></blockquote><h3>三大系列总结</h3><figure><table><thead><tr><th style="text-align:left;">三大系列大小对比</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">element.offsetWidth</td><td style="text-align:left;">content + padding + border</td></tr><tr><td style="text-align:left;">element.clientWidth</td><td style="text-align:left;">content + padding</td></tr><tr><td style="text-align:left;">element.scrollWidth</td><td style="text-align:left;">实际的宽度，不含边框</td></tr></tbody></table></figure><p>注：返回的数值都不带单位。</p><picture><img src="'+c+'" alt="offset_client_scroll.png"></picture><h3>animation</h3>',15),g=e("p",null," ",-1),u=e("h3",null,"案例：产品图放大效果",-1),f=e("h3",null,"案例：模态框拖拽",-1),y=e("ol",null,[e("li",null,"点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层。"),e("li",null,"点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。"),e("li",null,"鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。"),e("li",null,"鼠标松开，可以停止拖动模态框移动。")],-1);function v(h,x){const i=a("code");return n(),l(d,null,[p,e("pre",null,[t(`
	`),o((n(),l("code",null,[t(`function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
`)])),[[i,void 0,"js"]]),t(`
`)]),g,u,e("pre",null,[t("	"),o((n(),l("code",null,[t(`<div class="pictrue">
    <div class="middle">
        <img>
        <div class="layer"></div>
    </div>
    <div class="small">
        <ul>
            <li class="active"><img></li>
            <li><img></li>
            <li><img></li>
            <li><img></li>
            <li><img></li>
        </ul>
    </div>
    <div class="large"></div>
</div>

<script>
    const small = document.querySelector('.small')
    const middle = document.querySelector('.middle')
    const large = document.querySelector('.large')

    small.addEventListener('mouseover', function (e) {
        if (e.target.tagName \`= 'IMG') {
            this.querySelector('.active').classList.remove('active')
            e.target.parentNode.classList.add('active')

            middle.querySelector('img').src = e.target.src
            large.style.backgroundImage = \`url(\${e.target.src})\`
        }
    })


    middle.addEventListener('mouseenter', show)
    middle.addEventListener('mouseleave', hide)

    let timeId = null

    function show() {
        clearTimeout(timeId)
        large.style.display = 'block'
    }

    function hide() {
       timeId = setTimeout(() => large.style.display = 'none', 200)
    }

    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)


    const layer = document.querySelector('.layer')

    middle.addEventListener('mouseenter', () => layer.style.display = 'block')
    middle.addEventListener('mouseleave', () => layer.style.display = 'none')

    middle.addEventListener('mousemove', function (e) {
        let x = e.pageX - middle.getBoundingClientRect().left
        let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

        if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {

            let mx = 0, my = 0
            if (x < 100) mx = 0
            if (x >= 100 && x <= 300) mx = x - 100
            if (x > 300) mx = 200

            if (y < 100) my = 0
            if (y >= 100 && y <= 300) my = y - 100
            if (y > 300) my = 200

            layer.style.left = mx + 'px'
            layer.style.top = my + 'px'

            // 大盒子的背景图片要跟随 中等盒子移动  存在的关系是 2倍
            large.style.backgroundPositionX = -2 * mx + 'px'
            large.style.backgroundPositionY = -2 * my + 'px'
        }
    })
<\/script>
`)])),[[i,void 0,"html"]]),t(`

`)]),f,y,e("pre",null,[t("	"),o((n(),l("code",null,[t(`<div><a id="link">点击，弹出登录框</a></div>
<div class="login">
    <div id="title">登录会员<a id="closeBtn">关闭</a></div>
    <div>
        <div>
            <label>用户名：</label>
            <input type="text" placeholder="请输入用户名">
        </div>
        <div>
            <label>登录密码：</label>
            <input type="password" placeholder="请输入登录密码">
        </div>
    </div>
    <div><a>登录会员</a></div>
</div>
<!-- 遮盖层 -->
<div id="bg" class="login-bg"></div>

<script>
  var login = document.querySelector('.login');
  var mask = document.querySelector('.login-bg');
  var link = document.querySelector('#link');
  var closeBtn = document.querySelector('#closeBtn');
  var title = document.querySelector('#title');

  link.addEventListener('click', function () {
      mask.style.display = 'block';
      login.style.display = 'block';
  })

  closeBtn.addEventListener('click', function () {
      mask.style.display = 'none';
      login.style.display = 'none';
  })

  title.addEventListener('mousedown', function (e) {
      var x = e.pageX - login.offsetLeft;
      var y = e.pageY - login.offsetTop;

      document.addEventListener('mousemove', move)

      function move(e) {
          login.style.left = e.pageX - x + 'px';
          login.style.top = e.pageY - y + 'px';
      }

      document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', move);
       })
  })
<\/script>
`)])),[[i,void 0,"html"]]),t(`
`)])],64)}const Q=r(m,[["render",v]]);export{Q as default};
