<template>
	<h1>对象解构</h1>
	<h5>基本赋值</h5>
	<pre v-code:js>const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true</pre>

	<br>
	<h5>赋值给新的变量名</h5>

	<p>可以从对象中提取属性，并将其赋值给名称与对象属性不同的变量。</p>
	<pre v-code:js>const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true</pre>
	<p>举个例子，【const { p: foo } = o】 从对象 【o】 中获取名为 【p】 的属性，并将其赋值给名为 【foo】 的局部变量。</p>

	<br>
	<h5>赋值到新的变量名并提供默认值</h5>
	<p>一个属性可以同时是两者：</p>
	<ul>
		<li>从对象提取并分配给具有不同名称的变量。</li>
		<li>指定一个默认值，以防获取的值为 【undefined】。</li>
	</ul>

	<pre v-code:js>const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5</pre>

	<br>
	<h5>解构对象时查找原型链</h5>
	<p>当解构一个对象时，如果属性本身没有被访问，它将沿着原型链继续查找。</p>

	<pre v-code:js>const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain)</pre>

	<br>
	<h5>解构嵌套对象和数组</h5>

	<pre v-code:js>const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/zh-CN/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // rename
  translations: [
    { title: localeTitle, // rename },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"</pre>

	<br>

	<h5>For of 迭代和解构</h5>

	<pre v-code:js>const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"</pre>

	<br>
	<h5>从作为函数参数传递的对象中提取属性</h5>
	<p>传递给函数参数的对象也可以提取到变量中，然后可以在函数体内访问这些变量。</p>

	<pre v-code:js>const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function userId({ id }) { return id; }
console.log(userId(user)); // 42

function userDisplayName({ displayName: dname }) { return dname; }
console.log(userDisplayName(user)); // `jdoe`

function whois({ displayName, fullName: { firstName: name } }) { return `${displayName} is ${name}`; }
console.log(whois(user)); // "jdoe is Jane"</pre>

	<br>
	<h5>设置函数参数的默认值</h5>
	<p>默认值可以使用 【=】 指定，如果指定的属性在传递的对象中不存在，则将其用作变量值。</p>
	<p>下面展示了一个默认大小为 【big】 的函数，默认坐标为 【x: 0, y: 0】，默认半径为 25。</p>

	<pre v-code:js>function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});</pre>

	<p>在上面 【drawChart】 的函数签名中，解构的左侧具有空对象 【= {}】 的默认值。</p>
</template>