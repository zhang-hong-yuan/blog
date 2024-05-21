<template>
	<p><strong>解构赋值</strong>本质上仍然是为变量赋值。就是快速的从对象或者数组中取出成员的一个语法方式。</p>
	<h3>数组解构</h3>
	<p>是将数组的单元值快速批量赋值给一系列变量的简洁语法。</p>
	<pre v-code:js>const [x, y, z] = [1, 2, 3]

// 典型应用交换2个变量
let a = 1, b = 3; // 注意，这里必须加分号
[b, a] = [a, b]

// 冒泡排序中的应用
[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]</pre>
	<p>按需导入，可忽略某些返回值：</p>
	<pre v-code:js>const [A, , C, D] = ['mi', 'apple', 'huawei', 'vivo']
console.log(A) // mi
console.log(C) // huawei
console.log(D) // vivo</pre>
	<p>变量与单元值不匹配时：</p>
	<pre v-code:js>// 变量多于单元值时，多余的变量将被赋值为 undefined。解决方案：设置默认值
const [p = 'apple', q = 'mi'] = ['vivo']
console.log(p) // vivo
console.log(q) // mi
// 允许初始化变量的默认值，且只有单元值为 undefined 时默认值才会生效


// 变量少于单元值时，则多出的单元值被忽略。解决方案：剩余参数
const [m, n, ...tel] = ['mi', 'apple', 'huawei', 'vivo', 'oppo']
console.log(m)   // mi
console.log(n)   // apple
console.log(tel) // ['huawei', 'vivo', 'oppo']
// 剩余参数返回的是一个数组，但只能置于最末位</pre>
	<p>支持多维数组的结构：</p>
	<pre v-code:js>const [P, Q] = ['apple', ['mi', 'vivo']]
console.log(P) // apple
console.log(Q) // ['mi', 'vivo']

const [X, [Y, Z]] = ['apple', ['mi', 'vivo']]
console.log(X) // apple
console.log(Y) // mi
console.log(Z) // vivo</pre>
	<br>
	<h3>对象解构</h3>
	<p>是将对象属性和方法快速批量赋值给一系列变量的简洁语法。</p>
	<ul>
		<li>对象属性的值将被赋值给与属性名相同的变量 <em style="color:#c1283d;">(对象解构顺序可以是乱的，但数组解构必须有序)</em></li>
		<li>解构的变量名不能和其他的变量名冲突</li>
		<li>对象中没有与变量名一致的属性时变量值为 <code>undefined</code></li>

	</ul>
	<p>给新的变量名赋值：</p>
	<pre v-code:js>const user = {
    name: 'kitten',
    age: 18
}

const { name: uName, age } = user // 冒号表示“什么值：赋值给谁”
console.log(uName) // kitten
console.log(age)   // 18</pre>
	<p>数组对象解构：</p>
	<pre v-code:js>const pig = [
    {
        name: '佩奇',
        age: 6
    }
]

const [{ name, age }] = pig
console.log(name, age) // 佩奇 6</pre>
	<p>多级对象解构：</p>
	<pre v-code:js>const pig = {
    name: '佩奇',
    family: {
        mother: '猪妈妈',
        father: '猪爸爸',
        sister: '乔治'
    },
    age: 6
}

const { name, family: { mother, father, sister } } = pig
console.log(name)   // 佩奇
console.log(mother) // 猪妈妈
console.log(father) // 猪爸爸
console.log(sister) // 乔治</pre>
	<h3>字符串解构</h3>
	<pre v-code:js>let myname = &quot;kerwin&quot;

let [x,y,z] = myname
console.log(x,y,z) // k e r

let {length:len} = myname
console.log(len)  // 6</pre>
</template>