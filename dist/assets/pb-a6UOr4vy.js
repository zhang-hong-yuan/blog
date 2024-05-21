import{_ as l}from"./index-C58PDwY0.js";import{ao as a,o as t,c as o,a4 as s,q as e,e as n,F as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},i=n("h2",null,"闭包",-1),p=n("p",null,"闭包是 JavaScript 中最强大的特性之一。闭包就是，一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域。简单理解：【闭包 = 内层函数 + 外层函数的变量】。",-1),u=n("p",null,"闭包的作用是实现数据的私有。封闭数据，外部也可以访问函数内部的变量。基本格式：",-1),m=n("p",null,"实际上可能会比上面的代码复杂的多。它可以返回一个包含用于操作外部函数的内部变量的方法的对象。",-1),_=n("p",null,"在上面的代码中，外部函数的 【name】 变量对内部函数来说是可访问的，而除了通过内部函数本身，没有其他任何方法可以取得内部的变量。内部函数的内部变量就像对外部参数和变量的保险柜。它们会为内部函数保留“稳定”而又“被封装”的数据参与运行。而这些内部函数甚至不会被分配给一个变量，或者有个名称。这就是闭包的好处。 ",-1),h=n("header",null,[n("strong",null,"备注："),e("使用闭包时需要注意许多陷阱！")],-1),v=n("p",null,[e("如果一个闭包的函数定义了一个和外部的某个变量名称相同的变量，那么这个闭包将无法引用外部作用域中的这个变量。（内部作用域的变量“覆盖”外部作用域，直至程序退出内部作用域。可以将其视作"),n("u",null,"命名冲突"),e("。）")],-1),f={class:"error"},x=n("blockquote",null,"注：闭包还可能会引起内存泄漏。",-1),N=n("br",null,null,-1),g=n("h5",null,"一个计数器的困境",-1),S=n("p",null,"假设现在需要使用变量来计数，并且希望此计数器可用于所有函数。",-1),w=n("p",null,"可以使用全局变量和函数来递增计数器：",-1),j=n("p",null,"但是上述解决方案有一个问题：页面上的任何代码都可以更改计数器，而无需调用 【add()】。",-1),G=n("p",null,"对于 【add()】 函数，计数器应该是局部的，以防止其他代码更改它：",-1),P=n("p",null,"它没有用，是因为读取了全局计数器而不是本地计数器。",-1),b=n("p",null,"通过使用函数返回它，就可以删除全局计数器并访问本地计数器：",-1),k=n("p",null,"它没有用，是因为每次调用函数时都会重置本地计数器。",-1),y=n("p",null,"JavaScript 内部函数可以解决这个问题。",-1),B=n("p",null,"本案例中，只需找到只执行一次 【counter = 0】 的方法；还能够从外面访问 【plus()】 函数。这样即可解决计数器困境。",-1),J=n("p",null,"自调用函数只运行一次。它设置计数器为零，并返回函数表达式赋值给变量 【add】。这样 【add】 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。",-1),q=n("p",null,"这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。",-1),C=n("p",null,"闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。",-1);function D(F,L){const r=a("code");return t(),o(d,null,[i,p,u,s((t(),o("pre",null,[e(`const pet = function (name) {
	let petName = name // 外部函数定义了一个名为“petName”的变量
	const getName = function () {
		return petName.repeat(3); // 内部函数可以访问外部函数的“petName”变量
	};
	return getName; // 返回内部函数，从而将其暴露给外部作用域
};

const myPet = pet("Glove");
console.log(myPet()); // "GloveGloveGlove"`)])),[[r,void 0,"js"]]),m,s((t(),o("pre",null,[e(`const createPet = function (name) {
  let sex;

  const pet = {
    setName(newName) { name = newName; },
    getName() { return name; },

    getSex() { return sex; },
    setSex(newSex) {
      if ( typeof newSex === "string" &&
          (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) { sex = newSex; }
    },
  };

  return pet;
};

const pet = createPet("Glove");
console.log(pet.getName()); // Glove

pet.setName("Snow");
pet.setSex("female");
console.log(pet.getSex()); // female
console.log(pet.getName()); // Snow`)])),[[r,void 0,"js"]]),_,n("section",null,[h,v,s((t(),o("pre",f,[e(`const createPet = function (name) {
  // 外部函数定义了一个名为“name”的变量。
  return {
    setName(name) {
      // 闭包函数还定义了一个名为“name”的变量。
      name = name; // 我们如何访问外部函数定义的“name”？
    },
  };
};`)])),[[r,void 0,"js"]]),x]),N,g,S,w,s((t(),o("pre",null,[e(`// 初始化计数器
var counter = 0;

// 递增计数器的函数
function add() { counter += 1; }

// 调用三次 add()
add();
add();
add();
// 此时计数器应该是 3`)])),[[r,void 0,"js"]]),j,G,s((t(),o("pre",null,[e(`// 初始化计数器
var counter = 0;

// 递增计数器的函数
function add() {
  var counter = 0; 
  counter += 1;
}

// 调用三次 add()
add();
add();
add();
//此时计数器应该是 3。但它是 0。`)])),[[r,void 0,"js"]]),P,b,s((t(),o("pre",null,[e(`// 递增计数器的函数
function add() {
  var counter = 0; 
  counter += 1;
  return counter;
}

// 调用三次 add()
add();
add();
add();
//此时计数器应该是 3。但它是 1。`)])),[[r,void 0,"js"]]),k,y,s((t(),o("pre",null,[e(`function add() {
    var counter = 0;
    function plus() { counter += 1; }
    plus();     
    return counter; 
}`)])),[[r,void 0,"js"]]),B,J,s((t(),o("pre",null,[e(`var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();
// 计数器目前是 3 `)])),[[r,void 0,"js"]]),q,C],64)}const _n=l(c,[["render",D]]);export{_n as default};
