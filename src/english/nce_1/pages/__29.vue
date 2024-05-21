<template>
	<article>
		<h1>Come in, Amy.</h1>
		<ul class="both">
			<li>MRS. JONES: Come in, Amy.</li> <br><br>
			<li>MRS. JONES: 【Shut】 the door, please.</li> <br><br>
			<li>MRS. JONES: This bedrooms very 【untidy】.</li>
			<li>MAY: What must I do, Mrs. Jones?</li> <br><br>
			<li>MRS. JONES: Open the window and air the room.</li> <br><br>
			<li>MRS. JONES: Then put these clothes in the 【wardrobe】.</li> <br><br>
			<li>MRS. JONES: Then make the bed.</li> <br><br>
			<li>MRS. JONES: 【Dust】 the 【dressing table】.</li> <br><br>
			<li>MRS. JONES: Then 【sweep】 the floor.</li> <br><br>
		</ul>
	</article>
	<section>
		<EnglishWord word="shut"></EnglishWord>
		<EnglishWord word="untidy"></EnglishWord>
		<EnglishWord word="wardrobe"></EnglishWord>
		<EnglishWord word="dust"></EnglishWord>

		<EnglishWord word="dressing table">
			<template v-slot:middle>
				<EnglishWord word="dress---1"></EnglishWord>
			</template>
		</EnglishWord>

		<EnglishWord word="sweep"></EnglishWord>
	</section>
</template>