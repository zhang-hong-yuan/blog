<template>
	<h1>query</h1>

	<p>传递参数：</p>

	<pre v-code:html>
<div v-pre>&lt;!-- 跳转并携带query参数（to的字符串写法） --&gt;
&lt;router-link to="/news/detail【?】a=1【a;;&】b=2【a;;&】content=欢迎你"&gt;
  跳转
&lt;/router-link&gt;
				
&lt;!-- 跳转并携带query参数（to的对象写法） --&gt;
&lt;RouterLink 
  :to="{
    // name: 'xiang', //用name也可以跳转
    path: '/news/detail',
    【query】: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  }"
&gt;
  {{ news.title }}
&lt;/RouterLink&gt;</div>
</pre>

	<p>接收参数：</p>

	<pre v-code:js>
import {useRoute} from 'vue-router'
const route = useRoute()
// 打印query参数
console.log(【route.query】)
</pre>
</template>