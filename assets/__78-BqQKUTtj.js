import{_ as r}from"./index-C58PDwY0.js";import{ao as a,o,c as e,e as t,q as n,a4 as i,F as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},f=t("h1",null,"@font-face",-1),m=t("p",null,"‘@font-face’ CSS at-rule 指定一个用于显示文本的自定义字体；字体能从远程服务器或者用户本地安装的字体加载。如果提供了 ‘local()’ 函数，从用户本地查找指定的字体名称，并且找到了一个匹配项，本地字体就会被使用。否则，字体就会使用 ‘url()’ 函数下载的资源。",-1),d=t("p",null,'通过允许作者提供他们自己的字体，‘@font-face’ 让设计内容成为了一种可能，同时并不会被所谓的"网络 - 安全"字体所限制 (字体如此普遍以至于它们能被广泛的使用)。指定查找和使用本地安装的字体名称可以让字体的自定义化程度超过基本字体，同时在不依赖网络情况下实现此功能。',-1),p=t("p",null,"在同时使用 ‘url()’ 和 ‘local()’ 功能时，为了用户已经安装的字体副本在需要使用时被使用，如果在用户本地没有找到字体副本就会去使用户下载的副本查找字体。",-1),u=t("dl",null,[t("dt",null,"‘font-family’"),t("dd",null,"所指定的字体名字将会被用于 ‘font’ 或 ‘font-family’ 属性。"),t("dt",null,"‘src’"),t("dd",null,"远程字体文件位置的 URL 或者用户计算机上的字体名称，可以使用 local 语法通过名称指定用户的本地计算机上的字体 ( i.e. src: local('Arial'); )。如果找不到该字体，将会尝试其他来源，直到找到它。")],-1),_=t("p",null,"这是一个叫做 ‘@font-face’ 的 CSS @规则 ，它允许网页开发者为其网页指定在线字体。通过这种作者自备字体的方式，‘@font-face’ 可以消除对用户电脑字体的依赖。",-1),h=t("p",null,"‘@font-face’ 规则不仅仅使用在 CSS 的顶层，还可以用在任何 CSS 条件组规则中。",-1),y=t("h6",null,"示例",-1),B=t("p",null,"下面的例子简单定义了一个可下载的字体，并应用到了文档的整个 body 标签上。",-1),S=t("p",null,'在下面的例子中，用到了用户本地字体"Helvetica Neue Bold"的备份；如果当前用户 (浏览器) 未安装该字体 (两种可能的字体名都已经试过)，就会用下载的字体"MgOpenModernaBold.ttf"来代替： ',-1),v=t("p",null,"不能在一个 CSS 选择器中定义 ‘@font-face’。例如，这样写是无效的：",-1),w=t("p",null,"这个例子新定义了一个字体，正常粗细的字采用字体 Times New Roman，粗体字采用 Consolas。",-1);function b(g,N){const l=a("code");return o(),e(s,null,[f,m,d,p,t("pre",null,[n("			"),i((o(),e("code",null,[n(`
@font-face {
  font-family: "Open Sans";
  src:
    url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
			`)])),[[l,void 0,"css"]]),n(`
		`)]),u,_,h,y,B,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
<html>
  <head>
    <title>Web Font Sample</title>
    <style type="text/css" media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
		`)])),[[l,void 0,"html"]]),n(`
	`)]),S,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
@font-face {
  font-family: MyHelvetica;
	font-weight: bold;
  src: local("Helvetica Neue Bold"),
			 local("HelveticaNeue-Bold"),
			 url(MgOpenModernaBold.ttf);
}
		`)])),[[l,void 0,"css"]]),n(`
	`)]),v,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
.className {
  @font-face {
    font-family: MyHelvetica;
		font-weight: bold;
    src: local("Helvetica Neue Bold"),
				 local("HelveticaNeue-Bold"),
      	 url(MgOpenModernaBold.ttf);
  }
}
		`)])),[[l,void 0,"css",{error:!0}]]),n(`
	`)]),w,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
@font-face {
  font-family: myFirstFont;
  src: local("Times New Roman");
  font-weight: normal;
}

@font-face {
  font-family: myFirstFont;
  src: local(Consolas);
  font-weight: bold;
}
		`)])),[[l,void 0,"css"]]),n(`
	`)])],64)}const ot=r(c,[["render",b]]);export{ot as default};
