<template>

	<h1>Sorry sir</h1>
	<ul v-dialog>
		<li>visitor:【My coat and my umbrella please】. Here is my 【ticket】.</li>
		<li>waiter:Thank you, sir. Number five.</li> <br><br>
		<li>waiter:【Here's your umbrella and your coat】.</li>
		<li>visitor:This is not my umbrella.</li>
		<li>waiter:【Sorry】 【sir】.</li> <br><br>
		<li>waiter:Is this your umbrella?</li>
		<li>visitor:No, it isnt.</li> <br><br>
		<li>waiter:Is this it?</li>
		<li>visitor:Yes, it is.</li>
		<li>waiter:Thank you very much.</li>
	</ul>

	<!-- <section>
		<EnglishWord word="My coat and my umbrella please">
			<p>这是一个省略形式的祈使句，完整的句子应为：</p>
			<dl>
				<dd>Give me my coat and my umbrella, please.</dd>
			</dl>
			<p>口语中，在语境明确的情况下通常可省略动词和间接宾语，如：</p>
			<dl v-brace:left>
				<dd>
					<div>(Show me your) Ticket, please.</div>
					<div>请出示你的票。</div>
				</dd>
				<dd>
					<div>(Show me your)Passport, please.</div>
					<div>请出示您的护照。</div>
				</dd>
			</dl>
		</EnglishWord>

		<EnglishWord word="ticket" :select="0" />

		<EnglishWord word="Here's your umbrella and your coat">
			<p>这是您的伞和大衣。Here's 是 Here is 的缩略形式。全句原为：</p>
			<dl>
				<dd>Here is your umbrella and your coat</dd>
			</dl>
			<p>缩略形式和非缩略形式在英语的书面用语和口语中均有，但非缩略形式常用于比较正式的场合。</p>
			<p>Here's… 是一种习惯用法，句中采用了倒装句式，即系动词提到了主语之前。又如 Here is my ticket 这句话用正常的语序时为
				My ticket is here。</p>
		</EnglishWord>

		<EnglishWord word="Sorry">
			<p>Sorry = I'm sorry。</p>
			<p>这是口语中的缩略形式，通常在社交场合中用于表示对他人的歉意或某种程度的遗憾。</p>
			<p>Sorry 和 Excuse me 虽在汉语中都可作"对不起"讲，但 sorry 常用于对自己所犯过失表示道歉，而 Excuse me 则多为表示轻微歉意的客套语。</p>
		</EnglishWord>

		<EnglishWord word="Sir">
			<p>Sir，先生。这是英语中对不相识的男子、年长者或上级的尊称。例如：在服务行业中，服务员对男顾客的称呼通常为 sir：</p>
			<dl v-brace:left>
				<dd>
					<span>What can I do for you, sir?</span>
					<span>先生，您要买什么？</span>
				</dd>
				<dd>
					<span>Thank you, sir.</span>
					<span>谢谢您，先生。</span>
				</dd>
			</dl>
			<p>sir 通常用于正式信函开头的称呼中：</p>
			<dl v-brace:left>
				<dd>
					<span>Dear sir</span>
					<span>亲爱的先生</span>
				</dd>
				<dd>
					<span>Dear sirs</span>
					<span>亲爱的先生们／诸位先生们</span>
				</dd>
			</dl>
			<p>Sir可用于有爵士称号者的名字或姓名之前(但不用于姓氏之前)：</p>
			<dl v-brace:left>
				<dd>
					<span>Sir Winston Churchill</span>
					<span>温斯顿·丘吉尔爵士</span>
				</dd>
				<dd>
					<span>Sir William Brown</span>
					<span>威廉·布朗爵士</span>
				</dd>
			</dl>
		</EnglishWord>
	</section> -->
</template>