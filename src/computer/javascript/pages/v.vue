<template>
	<h2>Promise</h2>
	<p>Promise 是异步编程的一种解决方案。Promise 指定回调函数方式更灵活易懂。并且解决了 <strong>回调地狱</strong> 的问题。</p>
	<blockquote>
		<p>回调地狱：当一个回调函数嵌套一个回调函数的时候，就会出现一个嵌套结构。当嵌套的多了就会出现回调地狱的情况。<strong>回调地狱，其实就是回调函数嵌套过多导致的</strong>。</p>
		<p>当代码成为这个结构以后，已经没有维护的可能了。</p>
	</blockquote>
	<br>
	<p>Promise 语法：</p>
	<pre v-code:js>new Promise(function (resolve, reject) {
  // resolve 表示成功的回调
  // reject 表示失败的回调
}).then(function (res) {
  // 成功的函数
}).catch(function (err) {
  // 失败的函数
})
</pre>
	<p>示例：</p>
	<pre v-code:js>function ajax(url) {
	return new Promise((resolve, reject) =&gt; {
		let xhr = new XMLHttpRequest()
		xhr.open(&quot;get&quot;, url, true)
		xhr.send()
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) {
					resolve(JSON.parse(xhr.responseText))
				} else {
					reject(xhr.responseText)
				}
			}
		}
	})
}


ajax(&quot;1.json&quot;).then(res =&gt; {
	console.log(res)
}).catch(err =&gt; {
	console.log(err)
})
</pre>
	<br>
	<h3>Promise 对象的状态</h3>
	<p>Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。</p>
	<ul>
		<li>异步操作未完成 (pending)</li>
		<li>异步操作成功 (fulfilled)</li>
		<li>异步操作失败 (rejected)</li>

	</ul>
	<p>这三种的状态的变化途径只有两种：<code>未完成 ⇢ 成功</code> 和 <code>未完成 ⇢ 失败</code>。一旦状态发生变化，就凝固了，不会再有新的状态变化。这也意味着，Promise
		实例的状态变化只可能发生一次。因此，Promise 的最终结果只有两种。</p>
	<ul>
		<li>异步操作成功，Promise 实例传回一个值 (value)，状态变为 fulfilled</li>
		<li>异步操作失败，Promise 实例抛出一个错误 (error)，状态变为 rejected</li>

	</ul>

	<pre v-code:mermaid>graph LR
	subgraph pendding状态
		a[&quot;new Pormise( )&quot;]
	end
	
		b{执行异步操作}

	subgraph fulfilled状态
		c[promise对象]
	end
	
	subgraph rejected状态
		d[promise对象]
	end
	
	subgraph then函数
		e[&quot;回调onResolived()&quot;]
	end
		
	subgraph then/catch函数
		f[&quot;回调onRejected()&quot;]
	end
	
		g[新的promise对象]

a--&gt;b
b--&gt;|&quot;成功了，执行resolve()&quot;|c--&gt;e
b--&gt;|&quot;失败了，执行rejected()&quot;|d--&gt;f
e &amp; f--&gt;g

style pendding状态 fill:transparent,stroke:none
style fulfilled状态 fill:transparent,stroke:none
style rejected状态 fill:transparent,stroke:none

style then函数 fill:transparent,stroke:none
style then/catch函数 fill:transparent,stroke:none</pre>



	<p>.then.then 链式调用</p>
	<pre v-code:js>let pro = new Promise(function (resolve, reject) {
	//执行器函数
	setTimeout(() =&gt; {
		resolve(1000)
		// reject(&quot;no 1111&quot;)
	}, 1000)
})


pro.then((res) =&gt; {
	console.log(&quot;奖金1&quot;, res)
	//如果return 非promise类型，pending-fulfilled
	//如果return promise类型，根据这个新的promise对象的结果，决定pending-fulfilled pending-rejected
	return res
}).then((res) =&gt; {
	console.log(&quot;奖金2&quot;, res)
}).catch((err) =&gt; {
	console.log(&quot;没有&quot;, err)
})
</pre>
	<p>&nbsp;</p>
	<br>
	<h3>Promise.all()</h3>
	<p><code>Promise.all()</code>方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。</p>
	<pre v-code:js>const p = Promise.all([p1, p2, p3])
</pre>
	<p>p的状态由 p1,p2,p3 决定，分成两种情况：</p>
	<ul>
		<li>
			只有<code>p1</code>、<code>p2</code>、<code>p3</code>的状态都变成<code>fulfilled</code>，<code>p</code>的状态才会变成<code>fulfilled</code>，此时<code>p1</code>、<code>p2</code>、<code>p3</code>的返回值组成一个数组，传递给<code>p</code>的回调函数。
		</li>
		<li>
			只要<code>p1</code>、<code>p2</code>、<code>p3</code>之中有一个被<code>rejected</code>，<code>p</code>的状态就变成<code>rejected</code>，此时第一个被<code>reject</code>的实例的返回值，会传递给<code>p</code>的回调函数。
		</li>

	</ul>
	<p>如：</p>
	<pre v-code:js>let pro1 = new Promise(function (resolve, reject) {
	setTimeout(() =&gt; { resolve(1000) }, 1000)
})

let pro2 = new Promise(function (resolve, reject) {
	setTimeout(() =&gt; { resolve(2000) }, 2000)
})

let pro3 = new Promise(function (resolve, reject) {
	setTimeout(() =&gt; { resolve(3000) }, 3000)
})


//showloading
Promise.all([pro1, pro2, pro3]).then(res =&gt; {
	//hideloading
	console.log(res)
}).catch(err =&gt; {
	console.log(err)
})
</pre>
	<br>
	<h3>Promise.race()</h3>
	<p><code>Promise.race()</code>方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。</p>
	<pre v-code:js>const p = Promise.race([p1, p2, p3]);
</pre>
	<p>只要<code>p1</code>、<code>p2</code>、<code>p3</code>之中有一个实例率先改变状态，<code>p</code>的状态就跟着改变。那个率先改变的 Promise
		实例的返回值，就传递给<code>p</code>的回调函数。如：</p>
	<pre v-code:js>let pro1 = new Promise(function (resolve, reject) {
	setTimeout(() =&gt; { resolve(&quot;成功的结果&quot;) }, 30000)
})

let pro2 = new Promise(function (resolve, reject) {
	setTimeout(() =&gt; { reject(2000) }, 2000)
})


Promise.race([pro1, pro2]).then(res =&gt; {
	console.log(res)
}).catch(err =&gt; {
	console.log(err, &quot;超时了&quot;)
})
</pre>
	<br>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>