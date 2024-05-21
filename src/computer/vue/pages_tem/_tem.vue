<template>
	<h2>defineProps()</h2>
	<pre>
		<code class="language-js" line-numbers>
const props = defineProps(['foo'])

console.log(props.foo)</code>
	</pre>

	<pre>
		<code class="language-js" line-numbers>
function f2c(x)
{
  function convert(str, p1, offset, s)
  {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
</code>
	</pre>

	<p>一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute。</p>

	<p>在使用 &lt;script setup&gt; 的单文件组件中，props 可以使用 defineProps() 宏来声明：</p>
	<Demo :vue="demo">213</Demo>
	<p>在没有使用 &lt;script setup&gt; 的组件中，prop 可以使用 props 选项来声明：</p>
	<Demo :vue="demo2" />
	<p>注意传递给 defineProps() 的参数和提供给 props 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。</p>
	<p>除了使用字符串数组来声明 prop 外，还可以使用对象的形式：</p>
	<Demo :vue="form" />
	<SectionVue mode="tip">
		<p>如果一个 prop 的名字很长，推荐使用 camelCase 形式。</p>
	</SectionVue>
	<p>如果想要将一个对象的所有属性都当作 props 传入，可以使用没有参数的 v-bind，即只使用 v-bind 而非 :prop-name。</p>
	<Demo :vue="mulProps" />
	<br>
	<p>所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。</p>
	<p>另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着不应该在子组件中去更改一个 prop。如果有需要：新定义一个局部数据属性 或者 定义一个计算属性。</p>
	<Demo :vue="changeProps" />
</template>
	
<script setup>
import Prism from 'prismjs'
import { onMounted } from 'vue';
onMounted(() => {
	Prism.highlightAll()
})

const demo = `const props = defineProps(['foo'])

console.log(props.foo)`

const demo2 = `export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}`

const form = `// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})

// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}`


const mulProps = `<script setup>
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
<//script>

<template>
  <BlogPost v-bind="post" />
 <span>1234</span>
  <!-- 实际上等价于： -->
  <BlogPost :id="post.id" :title="post.title" />
</template>`

const changeProps = `const props = defineProps(['initialCounter'])

// 只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const counter = ref(props.initialCounter)


const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.size.trim().toLowerCase())`
</script>