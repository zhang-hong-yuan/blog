<template>
	<h1>【in】 操作符</h1>

	<p>【in】操作符，如果所指定的属性确实存在于所指定的对象中，则会返回【true】，语法如下：</p>

	<pre v-code:js>propNameOrNumber in objectName;</pre>

	<p>在这里【propNameOrNumber】可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，而【objectName】则是一个对象名。</p>

	<p>下面的例子是 【in】 操作的常见用法：</p>

	<pre v-code:js>// Arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");

0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)


// Predefined objects
"PI" in Math; // returns true

var myString = new String("coral");
"length" in myString; // returns true


// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true</pre>
</template>