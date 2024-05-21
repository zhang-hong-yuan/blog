<template>
	<h1>delete 运算符</h1>

	<p>【delete】 运算符用于删除对象的一个属性；如果该属性的值是一个对象，并且没有更多对该对象的引用，该属性所持有的对象最终会自动释放。</p>

	<pre v-code:js>delete object.property
delete object[property]</pre>

	<dl>
		<dt>【object】</dt>
		<dd>对象的名称，或计算结果为对象的表达式。</dd>

		<dt>【property】</dt>
		<dd>要删除的属性。</dd>
	</dl>

	<br>
	<h5>返回值</h5>
	<p>【delete】 运算符从一个对象中删除一个给定的属性。在成功删除时，它将返回 【true】，否则将返回 【false】。以下情况需要重点考虑：</p>


	<ul>
		<li>如果你试图删除的属性不存在，那么 【delete】 将不会起任何作用，但仍会返回 【true】。</li>
		<li>【delete】 只影响自身属性。如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性。</li>
		<li>不可配置的属性不能被移除。这意味着像【Math】、【Array】、【Object】 这些内置对象的属性以及使用 【Object.defineProperty()】方法设置为不可配置的属性不能被删除。</li>
		<li>删除包括函数参数内的变量永远不会奏效。【delete variable】会在严格模式下抛出【SyntaxError】错误，非严格模式下不会有任何效果。
			<ul>
				<li>任何使用【var】声明的属性不能从全局作用域或函数的作用域中删除，因为即使它们可能附加到全局对象上，它们也是不可配置的。</li>
				<li>任何使用【let】或 【const】声明的属性不能够从它被声明的作用域中删除，因为它们没有附加到任何对象上。</li>
			</ul>
		</li>
	</ul>

	<br>
	<p>以下示例使用了仅非严格模式下的功能，如隐式创建全局变量和删除标识符，这在严格模式下是禁止的。</p>

	<pre v-code:js>// 在全局作用域创建 empCount 属性
// 因为使用了 var，它会标记为不可配置
var empCount = 43;

// 在全局作用域创建 adminName 属性
// 因为没有使用 var，它会标记为可配置
adminName = "xyz";

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete 可用于删除对象的属性
delete EmployeeDetails.name; // 返回 true

// 甚至属性不存在，它也会返回 "true"
delete EmployeeDetails.salary; // 返回 true

// EmployeeDetails 是全局作用域的一个属性。
delete EmployeeDetails; // 返回 true

// 相反，empCount 是不可配置的，
// 因为创建它时使用了 var。
delete empCount; // 返回 false

// adminName 是全局作用域的一个属性。
// 因为它不是用 var 创建的，所以可以删除。
// 因此，它是可配置的。
delete adminName; // 返回 true

// delete 对内建静态属性不起作用
// 这些属性是不可配置的
delete Math.PI; // 返回 false

function f() {
  var z = 44;

  // delete 对局部变量名不起作用
  delete z; // 返回 false
}</pre>

	<br>

	<h4>删除不可配置属性</h4>

	<p>当一个属性被标记为不可配置时，【delete】 不会有任何效果，并将返回 【false】。在严格模式下，会抛出 【TypeError】。</p>

	<pre v-code:js>const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // 返回 false</pre>

	<p>【var】 会创建不可配置的属性，它不能用 【delete】 运算符删除。</p>

	<pre v-code:js>// 由于“nameOther”是使用 var 关键字声明的，
// 它被标记为不可配置的
var nameOther = "XYZ";

// 我们可以通过以下代码访问这个全局属性：
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // 返回 false</pre>

	<p>在严格模式下，会抛出异常。</p>

	<br>
	<h5>删除全局属性</h5>

	<p>如果一个全局属性是可配置的（例如，通过直接的属性赋值），它可以被删除，随后将它们作为全局变量的引用将产生 【ReferenceError】。</p>

	<pre v-code:js>globalThis.globalVar = 1;
console.log(globalVar); // 1
// 在非严格模式下，也可以使用 `delete globalVar`
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined</pre>


	<br>
	<h4>delete 和原型链</h4>

	<p>在下面的示例中，删除一个对象的自有属性，而原型链上具有相同名称的属性可用：</p>

	<pre v-code:js>function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// foo.bar 指代了自身属性
console.log(foo.bar); // 10

// 删除 foo 对象的自身属性
delete foo.bar; // 返回 true

// foo.bar 仍然在原型链上可用。
console.log(foo.bar); // 42

// 从原型上删除属性
delete Foo.prototype.bar; // 返回 true

// 由于已删除“bar”属性，因此不能再从 Foo 继承它。
console.log(foo.bar); // undefined</pre>


	<br>
	<h4>删除数组元素</h4>

	<p>当删除了一个数组元素时，数组的长度(【length】)不受影响。即便是删除了数组的最后一个元素也是如此。</p>

	<p>当用 【delete】 运算符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 【delete】 删除了 【trees[3]】。</p>

	<pre v-code:js>const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3]; // trees[3] 被删除，trees[3] 仍然可寻址并返回 undefined
console.log(3 in trees); // false</pre>

	<p>以上操作创建了一个稀疏数组，如果你想让一个数组元素继续存在，但是其值是 【undefined】，那么可以将 【undefined】 赋值给这个元素而不是使用 【delete】。下面的例子中，【trees[3]】 被赋值为
		【undefined】，但该数组元素仍然存在。</p>

	<pre v-code:js>const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true</pre>

	<p>如果需要通过改变数组的内容来移除一个数组元素，请使用 【splice()】 方法。在下面的例子中，通过使用 【splice()】，将 【trees[3]】 从数组中移除。</p>

	<pre v-code:js>const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]</pre>
</template>

