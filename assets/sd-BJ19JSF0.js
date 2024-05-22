import{_ as s}from"./index-C58PDwY0.js";import{ao as l,o,c as n,a4 as i,q as t,F as m,e,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},p=e("h1",null,"防抖/节流",-1),d=e("p",null,[e("strong",null,"防抖(debounce)"),t("就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。")],-1),a=e("p",null,"使用场景：搜索框防抖。假设输入就发送请求，但不能每次输入都发送请求，输入比较快发送请求会比较多。可以设定一个时间，比如300ms。",-1),_=e("br",null,null,-1),v=e("p",null,[e("strong",null,"节流(throttle)"),t("就是指连续触发事件但是在 n 秒中只执行一次函数。思路：刚触发的时间 - 开始触发的时间 >= n 才去执行回调函数。")],-1),f=e("p",null,"使用定时器：",-1),h=c("<p> </p><p><strong>节流阀</strong>防止轮播图按钮连续点击造成播放过快。当上一个函数动画执行完毕，再去执行下一个函数动画，让事件无法连续触发。思路：添加一个变量来控制，锁住函数和解锁函数。</p><ul><li>开始在回调函数外面设置一个变量 <code>var flag = true</code></li><li>在回调函数里面判断<code>if (flag) {flag = false; do something}</code> 关闭水龙头</li><li>动画函数执行完毕，<code>flag = true</code> 打开水龙头</li></ul><p> </p><p>Lodash 库实现节流和防抖：</p>",5),g=e("p",null,"案例：自动定位到上次播放位置",-1);function x(T,b){const r=l("code");return o(),n(m,null,[p,d,a,i((o(),n("pre",null,[t(`var timer = null

function debounceSearch(keywords) {
   timer = setTimeout(function() {
    	getSuggestList(keywords)
   }, 500)
}

$('#ipt').on('keyup', function() {
   clearTimeout(timer)
   // ...省略其他代码
   debounceSearch(keywords)
})
`)])),[[r,void 0,"js"]]),_,v,i((o(),n("pre",null,[t(`const box = document.querySelector('.box')

let i = 1
function mouseMove() {
    box.innerHTML = i++
}

function throttle(fn, t = 500) {
    let startTime = 0
    return function () {
        let now = Date.now()
        if (now - startTime >= t) {
            fn()
            startTime = now
        }
    }
}

box.addEventListener('mousemove', throttle(mouseMove, 500))
`)])),[[r,void 0,"js"]]),f,i((o(),n("pre",null,[t(`var timer = null
$(document).on('mousemove', function (e) {
	if (timer) return  // 如果不为空，则证明距离上次执行间隔不足16毫秒
  
	timer = setTimeout(function () {
		$(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
		timer = null
	}, 16)
})
`)])),[[r,void 0,"js"]]),h,i((o(),n("pre",null,[t(`box.addEventListener('mousemov', _.debounce(mouseMove, 500))
box.addEventListener('mousemove', _.throttle(mouseMove, 500))
`)])),[[r,void 0,"js"]]),g,i((o(),n("pre",null,[t(`const video = document.querySelector('video')

video.ontimeupdate = _.throttle(() => {
    localStorage.setItem('currentTime', video.currentTime)
}, 1000)

video.onloadeddata = () => {
    video.currentTime = localStorage.getItem('currentTime') || 0
}
`)])),[[r,void 0,"js"]])],64)}const Z=s(u,[["render",x]]);export{Z as default};
