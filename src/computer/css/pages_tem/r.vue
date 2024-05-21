<template>
	<h1>Less</h1>
	<p>Less (Leaner Style Sheets 的缩写) 是一门向后兼容的 CSS 扩展语言。这里呈现的是 Less 的官方文档(中文版)，包含了 Less 语言以及利用 JavaScript 开发的用于将 Less 样式转换成
		CSS 样式的 Less.js 工具。</p>
	<p>CSS 是一门非程序式语言，没有变量、函数、SCOPE(作用域)等概念。</p>
	<ul>
		<li>CSS 需要书写大量看似没有逻辑的代码，冗余度是比较高的</li>
		<li>不方便维护及扩展，不利于复用</li>
		<li>CSS 没有很好的计算能力</li>
		<li>非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目</li>

	</ul>
	<p>Less 是一门 <strong>CSS 扩展语言</strong>，也成为CSS预处理器。作为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性。</p>
	<br>
	<p><strong>Less 使用</strong></p>
	<p>首先新建一个后缀名为less的文件， 在这个less文件里面书写less语句。</p>
	<p>安装 vs code 插件：Easy LESS 插件用来把less文件编译为 css文件。安装完毕插件，重新加载 vscode。只要保存一下Less文件，会自动生成 CSS文件。</p>
	<br>
	<p>easyless自动保存到css指定位置，在settings.json中编辑：</p>
	<pre v-code:json>&quot;less.compile&quot;:{
&quot;out&quot;:&quot;../css/&quot;   /* 设置导出css的路径 */
}</pre>
	<h2>变量(Variables)</h2>
	<p>变量命名规范：</p>
	<ul>
		<li>必须有@为前缀</li>
		<li>不能包含特殊字符</li>
		<li>不能以数字开头</li>
		<li>大小写敏感</li>

	</ul>
	<pre v-code:less>@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}</pre>
	<p>编译为：</p>
	<pre v-code:css>#header {
  width: 10px;
  height: 20px;
}</pre>
	<h2>混合(Mixins)</h2>
	<p>混合是一种将一组属性从一个规则集包含(或混入)到另一个规则集的方法。假设定义了一个类(class)如下：</p>
	<pre v-code:css>.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}</pre>
	<p>如果希望在其它规则集中使用这些属性，只需像下面这样输入所需属性的类(class)名称即可，如下所示：</p>
	<pre v-code:less>#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}</pre>
	<p><code>.bordered</code> 类所包含的属性就将同时出现在 <code>#menu a</code> 和 <code>.post a</code> 中了。(注意，也可以使用 <code>#ids</code> 作为
		mixin 使用。)</p>
	<br>
	<p>有时，出于组织结构或仅仅是为了提供一些封装的目的，希望对混合(mixins)进行分组。可以用 Less 更直观地实现这一需求。假设希望将一些混合(mixins)和变量置于 <code>#bundle</code>
		之下，为了以后方便重用或分发：</p>
	<pre v-code:less>#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &amp;:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}</pre>
	<p>现在，如果我们希望把 <code>.button</code> 类混合到 <code>#header a</code> 中，我们可以这样做：</p>
	<pre v-code:less>#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle &gt; .button 形式
}</pre>
	<p>注意：如果不希望它们出现在输出的 CSS 中，例如 <code>#bundle .tab</code>，请将 <code>()</code> 附加到命名空间(例如 <code>#bundle()</code>)后面。</p>
	<h2>嵌套(Nesting)</h2>
	<p>Less 提供了使用嵌套(nesting)代替层叠或与层叠结合使用的能力。假设我们有以下 CSS 代码：</p>
	<pre v-code:css>#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}</pre>
	<p>用 Less 语言我们可以这样书写代码：</p>
	<pre v-code:less>#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}</pre>
	<p>用 Less 书写的代码更加简洁，并且模仿了 HTML 的组织结构。</p>
	<p>还可以使用此方法将伪选择器(pseudo-selectors)与混合(mixins)一同使用。下面是一个经典的 clearfix 技巧，重写为一个混合(mixin) (<code>&amp;</code> 表示当前选择器的父级)：
	</p>
	<pre v-code:less>.clearfix {
  display: block;
  zoom: 1;

  &amp;:after {
    content: &quot; &quot;;
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}</pre>
	<p><strong>@规则嵌套和冒泡</strong></p>
	<p>@ 规则(例如 <code>@media</code> 或 <code>@supports</code>)可以与选择器以相同的方式进行嵌套。@
		规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡(bubbling)。</p>
	<pre v-code:less>.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}</pre>
	<p>编译为：</p>
	<pre v-code:css>.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}</pre>
	<h2>运算(Operations)</h2>
	<p>算术运算符 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 可以对任何数字、颜色或变量进行运算。运算符中间左右有个空格隔开。</p>
	<p>如果可能的话，算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换。</p>
	<pre v-code:less>// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// 转换是不可能的
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// 变量示例
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%</pre>
	<p>乘法和除法不作转换。因为这两种运算在大多数情况下都没有意义，一个长度乘以一个长度就得到一个区域，而 CSS 是不支持指定区域的。Less 将按数字的原样进行操作，并将为计算结果指定明确的单位类型。</p>
	<pre v-code:less>@base: 2cm * 3mm; // 结果是 6cm</pre>
	<p>你还可以对颜色进行算术运算：</p>
	<pre v-code:less>@color: (#224488 / 2); // 结果是 #112244
background-color: #112244 + #111; // 结果是 #223355</pre>
	<p>不过，Less 提供的色彩函数更有用。</p>
	<p>括号之外的<code>/</code>运算符不执行除法运算。</p>
	<pre v-code:less>@color: #222 / 2; // results in `#222 / 2`, not #111
background-color: (#FFFFFF / 16); //results is #101010</pre>
	<br>
	<p><strong>calc() 特例</strong></p>
	<p>为了与 CSS 保持兼容，<code>calc()</code> 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。</p>
	<pre v-code:less>@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))</pre>
	<h2>转义(Escaping)</h2>
	<p>转义(Escaping)允许使用任意字符串作为属性或变量值。任何 <code>~&quot;anything&quot;</code> 或 <code>~&#39;anything&#39;</code>
		形式的内容都将按原样输出，除非 <a
			href='https://less.bootcss.com/features/#variables-feature-variable-interpolation'>interpolation</a>。</p>
	<pre v-code:less>@min768: ~&quot;(min-width: 768px)&quot;;
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}</pre>
	<p>编译为：</p>
	<pre v-code:less>@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}</pre>
	<p>可以简写为：</p>
	<pre v-code:less>@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}</pre>
	<h2>函数(Functions)</h2>
	<p>Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。</p>
	<p>函数的用法非常简单。下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：</p>
	<pre v-code:less>@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}</pre>
	<h2>映射(Maps)</h2>
	<p>可以将混合(mixins)和规则集(rulesets)作为一组值的映射(map)使用。</p>
	<pre v-code:less>#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}</pre>
	<p>输出符合预期：</p>
	<pre v-code:css>.button {
  color: blue;
  border: 1px solid green;
}</pre>
	<h2>作用域(Scope)</h2>
	<p>Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合(mixins)，如果找不到，则从“父”级作用域继承。</p>
	<pre v-code:less>@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}</pre>
	<p>与 CSS 自定义属性一样，混合(mixin)和变量的定义不必在引用之前事先定义。因此，下面的 Less 代码示例和上面的代码示例是相同的：</p>
	<pre v-code:less>@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}</pre>
	<h2>注释(Comments)</h2>
	<p>块注释和行注释都可以使用：</p>
	<pre v-code:less>/* 一个块注释
 * style comment! */
@var: red;

// 这一行被注释掉了！
@var: white;</pre>
	<h2>导入(Importing)</h2>
	<p>可以导入一个 <code>.less</code> 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 <code>.less</code> 扩展名，则可以将扩展名省略掉：</p>
	<p>&nbsp;</p>
	<pre v-code:css>@import &quot;library&quot;; // library.less
@import &quot;typo.css&quot;;</pre>
</template>