import{_ as i}from"./index-C58PDwY0.js";import{ao as c,o as t,c as o,a4 as l,q as n,F as p,e,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},u=e("h2",null,"Promise",-1),m=e("p",null,[n("Promise 是异步编程的一种解决方案。Promise 指定回调函数方式更灵活易懂。并且解决了 "),e("strong",null,"回调地狱"),n(" 的问题。")],-1),a=e("blockquote",null,[e("p",null,[n("回调地狱：当一个回调函数嵌套一个回调函数的时候，就会出现一个嵌套结构。当嵌套的多了就会出现回调地狱的情况。"),e("strong",null,"回调地狱，其实就是回调函数嵌套过多导致的"),n("。")]),e("p",null,"当代码成为这个结构以后，已经没有维护的可能了。")],-1),h=e("br",null,null,-1),_=e("p",null,"Promise 语法：",-1),f=e("p",null,"示例：",-1),P=s("<br><h3>Promise 对象的状态</h3><p>Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。</p><ul><li>异步操作未完成 (pending)</li><li>异步操作成功 (fulfilled)</li><li>异步操作失败 (rejected)</li></ul><p>这三种的状态的变化途径只有两种：<code>未完成 ⇢ 成功</code> 和 <code>未完成 ⇢ 失败</code>。一旦状态发生变化，就凝固了，不会再有新的状态变化。这也意味着，Promise 实例的状态变化只可能发生一次。因此，Promise 的最终结果只有两种。</p><ul><li>异步操作成功，Promise 实例传回一个值 (value)，状态变为 fulfilled</li><li>异步操作失败，Promise 实例抛出一个错误 (error)，状态变为 rejected</li></ul>",6),j=e("p",null,".then.then 链式调用",-1),v=e("p",null," ",-1),g=e("br",null,null,-1),x=e("h3",null,"Promise.all()",-1),b=e("p",null,[e("code",null,"Promise.all()"),n("方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。")],-1),w=s("<p>p的状态由 p1,p2,p3 决定，分成两种情况：</p><ul><li> 只有<code>p1</code>、<code>p2</code>、<code>p3</code>的状态都变成<code>fulfilled</code>，<code>p</code>的状态才会变成<code>fulfilled</code>，此时<code>p1</code>、<code>p2</code>、<code>p3</code>的返回值组成一个数组，传递给<code>p</code>的回调函数。 </li><li> 只要<code>p1</code>、<code>p2</code>、<code>p3</code>之中有一个被<code>rejected</code>，<code>p</code>的状态就变成<code>rejected</code>，此时第一个被<code>reject</code>的实例的返回值，会传递给<code>p</code>的回调函数。 </li></ul><p>如：</p>",3),T=e("br",null,null,-1),k=e("h3",null,"Promise.race()",-1),y=e("p",null,[e("code",null,"Promise.race()"),n("方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。")],-1),N=e("p",null,[n("只要"),e("code",null,"p1"),n("、"),e("code",null,"p2"),n("、"),e("code",null,"p3"),n("之中有一个实例率先改变状态，"),e("code",null,"p"),n("的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给"),e("code",null,"p"),n("的回调函数。如：")],-1),R=e("br",null,null,-1);function q(B,S){const r=c("code");return t(),o(p,null,[u,m,a,h,_,l((t(),o("pre",null,[n(`new Promise(function (resolve, reject) {
  // resolve 表示成功的回调
  // reject 表示失败的回调
}).then(function (res) {
  // 成功的函数
}).catch(function (err) {
  // 失败的函数
})
`)])),[[r,void 0,"js"]]),f,l((t(),o("pre",null,[n(`function ajax(url) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest()
		xhr.open("get", url, true)
		xhr.send()
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText))
				} else {
					reject(xhr.responseText)
				}
			}
		}
	})
}


ajax("1.json").then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})
`)])),[[r,void 0,"js"]]),P,l((t(),o("pre",null,[n(`graph LR
	subgraph pendding状态
		a["new Pormise( )"]
	end
	
		b{执行异步操作}

	subgraph fulfilled状态
		c[promise对象]
	end
	
	subgraph rejected状态
		d[promise对象]
	end
	
	subgraph then函数
		e["回调onResolived()"]
	end
		
	subgraph then/catch函数
		f["回调onRejected()"]
	end
	
		g[新的promise对象]

a-->b
b-->|"成功了，执行resolve()"|c-->e
b-->|"失败了，执行rejected()"|d-->f
e & f-->g

style pendding状态 fill:transparent,stroke:none
style fulfilled状态 fill:transparent,stroke:none
style rejected状态 fill:transparent,stroke:none

style then函数 fill:transparent,stroke:none
style then/catch函数 fill:transparent,stroke:none`)])),[[r,void 0,"mermaid"]]),j,l((t(),o("pre",null,[n(`let pro = new Promise(function (resolve, reject) {
	//执行器函数
	setTimeout(() => {
		resolve(1000)
		// reject("no 1111")
	}, 1000)
})


pro.then((res) => {
	console.log("奖金1", res)
	//如果return 非promise类型，pending-fulfilled
	//如果return promise类型，根据这个新的promise对象的结果，决定pending-fulfilled pending-rejected
	return res
}).then((res) => {
	console.log("奖金2", res)
}).catch((err) => {
	console.log("没有", err)
})
`)])),[[r,void 0,"js"]]),v,g,x,b,l((t(),o("pre",null,[n(`const p = Promise.all([p1, p2, p3])
`)])),[[r,void 0,"js"]]),w,l((t(),o("pre",null,[n(`let pro1 = new Promise(function (resolve, reject) {
	setTimeout(() => { resolve(1000) }, 1000)
})

let pro2 = new Promise(function (resolve, reject) {
	setTimeout(() => { resolve(2000) }, 2000)
})

let pro3 = new Promise(function (resolve, reject) {
	setTimeout(() => { resolve(3000) }, 3000)
})


//showloading
Promise.all([pro1, pro2, pro3]).then(res => {
	//hideloading
	console.log(res)
}).catch(err => {
	console.log(err)
})
`)])),[[r,void 0,"js"]]),T,k,y,l((t(),o("pre",null,[n(`const p = Promise.race([p1, p2, p3]);
`)])),[[r,void 0,"js"]]),N,l((t(),o("pre",null,[n(`let pro1 = new Promise(function (resolve, reject) {
	setTimeout(() => { resolve("成功的结果") }, 30000)
})

let pro2 = new Promise(function (resolve, reject) {
	setTimeout(() => { reject(2000) }, 2000)
})


Promise.race([pro1, pro2]).then(res => {
	console.log(res)
}).catch(err => {
	console.log(err, "超时了")
})
`)])),[[r,void 0,"js"]]),R],64)}const pe=i(d,[["render",q]]);export{pe as default};
