<template>
	<h1>分支结构</h1>
	<p>条件判断语句指的是根据指定的条件所返回的结果(真或假或其他预定义的)，来执行特定的语句。即，根据不同的条件，执行不同的代码(多选一)，从而得到不同的结果。</p>
	<p>js 把 【null】、【undefined】、【0】、【NaN】和空字符串【&#39;&#39;】视为<b>false</b>，其他值一概视为<b>true</b>。注意不要混淆原始的布尔值【true】和【false】 与
		【Boolean】对象的真和假。例如：</p>
	<pre v-code:js>var b = new Boolean(false);
		
if (b)         // 结果视为真
if (b == true) // 结果视为假</pre>
</template>