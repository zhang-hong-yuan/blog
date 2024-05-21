<template>
	<h1>Map.groupBy()</h1>

	<p>【Map.groupBy()】 静态方法使用《提供的回调函数返回的值》对给定可迭代对象中的元素进行《分组》。最终<em>返回</em>的 《Map》 使用《测试函数返回的唯一值》作为键，可用于获取每个组中的元素组成的《数组》。</p>

	<p>该方法主要用于对与《对象》相关的元素进行分组，特别是当该对象可能随时间而变化时。如果对象不变，可以使用字符串表示它，并使用 【Object.groupBy()】 分组元素。</p>

	<pre v-code:js class="nocopy">Map.groupBy(items, callbackFn)</pre>

	<dl>
		<dt>【items】</dt>
		<dd>一个将进行元素分组的可迭代对象（例如 《Array》）。</dd>

		<dt>【callbackFn】</dt>
		<dd>
			<p>对可迭代对象中的每个元素执行的函数。它应该返回《一个值（对象或原始类型）》来表示当前元素的分组。该函数被调用时将传入以下参数：</p>

			<dl>
				<dt>【element】</dt>
				<dd>数组中当前正在处理的元素。</dd>

				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>
			</dl>
		</dd>
	</dl>

	<p>【callbackFn】 返回的值会被用作 【Map.groupBy()】 返回的 Map 的键。每个键都有一个《相关联的数组》，其中包含回调函数返回相同值的所有元素。</p>

	<p>返回的 Map 中的元素和原始可迭代对象中的元素相同（<em>不是深拷贝</em>）。更改元素的内部结构将反映在《a;;原始可迭代对象》和《a;;返回的 Map》 中。</p>

	<p>当需要分组与特定对象相关的信息时，此方法非常有用。因为即使对象被修改，它仍将作为返回的 Map 的键继续工作。如果改为为对象创建字符串表示形式，并在 【Object.groupBy()】
		中将其用作分组键，则必须在对象改变时维护原始对象和其表示之间的映射。</p>

	<section class="note">
		<p><em>备注：</em>要访问返回的 Map 中的分组，必须使用最初用作 Map 键的相同对象（尽管可以修改其属性）。不能使用另一个恰好具有相同名称和属性的对象。</p>
	</section>

	<p>【Map.groupBy()】 不会读取 【this】 值。它可以在任何对象上调用，并返回一个新的 Map 实例。</p>


	<h6>使用 Map.groupBy()</h6>

	<p>首先，定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 【type】 和一个 【quantity】 属性。</p>

	<p>然后，使用箭头函数（函数返回名为 【restock】 或 【sufficient】 的对象键，具体取决于元素是否满足 【quantity &lt; 6】）来调用 【Map.groupBy()】。返回的 【result】 对象是一个
		Map，因此需要使用键调用 【get()】 来获取数组。</p>

	<pre v-code:js>const inventory = [
  { name: "芦笋", type: "蔬菜", quantity: 9 },
  { name: "香蕉", type: "水果", quantity: 5 },
  { name: "山羊", type: "肉",   quantity: 23 },
  { name: "樱桃", type: "水果", quantity: 12 },
  { name: "鱼",   type: "肉",  quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };

const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity &lt; 6 ? restock : sufficient,
);

console.log(《b;;result.get(restock)》);
// [{ name: "香蕉", type: "水果", quantity: 5 }]

console.log(《b;;result.get(sufficient)》);
// [
//   { name: "芦笋", type: "蔬菜", quantity: 9 },
//   { name: "山羊", type: "肉",   quantity: 23 },
//   { name: "樱桃", type: "水果", quantity: 12 },
//   { name: "鱼",   type: "肉",  quantity: 22 },
// ]
</pre>


	<p>Map 的键在修改后仍可以使用。但是，不能重新创建键并仍然使用它。因此，任何需要使用映射的内容都保留对其键的引用是非常重要的。</p>

	<pre v-code:js>// 键被修改后仍可以使用
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "香蕉", type: "水果", quantity: 5 }]

// 不能使用新的键，即使它具有相同的结构！
const restock2 = { restock: true };
console.log(result.get(restock2)); // 《undefined》
</pre>
</template>