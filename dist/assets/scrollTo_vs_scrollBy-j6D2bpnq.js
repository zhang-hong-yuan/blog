import{_ as o}from"./index-C58PDwY0.js";import{o as s,c as n,F as c,e as l}from"./@vue-DejhS5Sx.js";const r={},_=l("dt",null,"‘options’",-1),d=l("dd",null,[l("p",null,"是一个包含以下参数的对象："),l("dl",null,[l("dt",null,"‘top’"),l("dd",null,"指定沿 Y 轴滚动窗口或元素的像素数。"),l("dt",null,"‘left’"),l("dd",null,"指定沿 X 轴滚动窗口或元素的像素数。"),l("dt",null,"‘behavior’"),l("dd",null,"‘smooth’ 表示平滑滚动并产生过渡效果、‘instant’ 表示滚动会直接跳转到目标位置，没有过渡效果。‘auto’ 或缺省值表示浏览器会自动选择滚动时的过渡效果。")])],-1);function u(t,e){return s(),n(c,null,[_,d],64)}const y=o(r,[["render",u]]),i={},a=l("h3",null,"scrollBy() 和 scrollTo() 的区别",-1),h=l("p",null,"‘scrollBy()’ 和 ‘scrollTo()’ 的区别主要在于滚动的方式和参考点不同：",-1),p=l("ul",null,[l("li",null," ‘scrollTo’。其是基于视图(View)的初始位置进行绝对定位的滚动，当使用相同的参数多次调用 ‘scrollTo()’ 方法时，由于 View 的初始位置没有变化，所以只会产生一次滚动效果。例如，如果一个视图(View)已经位于屏幕的左上角，再次调用 ‘scrollTo(0,0)’ 将不会有任何效果。 "),l("li",null," ‘scrollBy’。其是基于视图(View)的当前位置进行相对滚动的，每次滚动的起始坐标是上一次滚动结束时的位置。例如，如果一个视图(View)已经位于屏幕的左上角，并且调用了 ‘scrollBy(0,0)’，那么它仍然会回到原点，因为 ‘scrollBy’ 是基于当前位置的相对移动。 ")],-1),f=l("p",null,"总结来说，‘scrollTo’ 是从一个固定的点开始移动，而 ‘scrollBy’ 是从当前位置开始移动。",-1);function B(t,e){return s(),n(c,null,[a,h,p,f],64)}const V=o(i,[["render",B]]);export{V as a,y as s};