import{_ as i}from"./index-C58PDwY0.js";import{ao as r,o,c as e,a4 as l,q as s,F as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},d=n("h1",null,"对象解构",-1),m=n("h5",null,"基本赋值",-1),u=n("br",null,null,-1),p=n("h5",null,"赋值给新的变量名",-1),h=n("p",null,"可以从对象中提取属性，并将其赋值给名称与对象属性不同的变量。",-1),_=n("p",null,"举个例子，【const { p: foo } = o】 从对象 【o】 中获取名为 【p】 的属性，并将其赋值给名为 【foo】 的局部变量。",-1),f=n("br",null,null,-1),g=n("h5",null,"赋值到新的变量名并提供默认值",-1),b=n("p",null,"一个属性可以同时是两者：",-1),N=n("ul",null,[n("li",null,"从对象提取并分配给具有不同名称的变量。"),n("li",null,"指定一个默认值，以防获取的值为 【undefined】。")],-1),y=n("br",null,null,-1),v=n("h5",null,"解构对象时查找原型链",-1),j=n("p",null,"当解构一个对象时，如果属性本身没有被访问，它将沿着原型链继续查找。",-1),S=n("br",null,null,-1),J=n("h5",null,"解构嵌套对象和数组",-1),T=n("br",null,null,-1),w=n("h5",null,"For of 迭代和解构",-1),x=n("br",null,null,-1),F=n("h5",null,"从作为函数参数传递的对象中提取属性",-1),D=n("p",null,"传递给函数参数的对象也可以提取到变量中，然后可以在函数体内访问这些变量。",-1),V=n("br",null,null,-1),k=n("h5",null,"设置函数参数的默认值",-1),z=n("p",null,"默认值可以使用 【=】 指定，如果指定的属性在传递的对象中不存在，则将其用作变量值。",-1),C=n("p",null,"下面展示了一个默认大小为 【big】 的函数，默认坐标为 【x: 0, y: 0】，默认半径为 25。",-1),$=n("p",null,"在上面 【drawChart】 的函数签名中，解构的左侧具有空对象 【= {}】 的默认值。",-1);function q(B,H){const t=r("code");return o(),e(a,null,[d,m,l((o(),e("pre",null,[s(`const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true`)])),[[t,void 0,"js"]]),u,p,h,l((o(),e("pre",null,[s(`const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true`)])),[[t,void 0,"js"]]),_,f,g,b,N,l((o(),e("pre",null,[s(`const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5`)])),[[t,void 0,"js"]]),y,v,j,l((o(),e("pre",null,[s(`const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain)`)])),[[t,void 0,"js"]]),S,J,l((o(),e("pre",null,[s(`const metadata = {
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
console.log(localeTitle); // "JavaScript-Umgebung"`)])),[[t,void 0,"js"]]),T,w,l((o(),e("pre",null,[s(`const people = [
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
  console.log(\`Name: \${n}, Father: \${f}\`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"`)])),[[t,void 0,"js"]]),x,F,D,l((o(),e("pre",null,[s(`const user = {
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
console.log(userDisplayName(user)); // \`jdoe\`

function whois({ displayName, fullName: { firstName: name } }) { return \`\${displayName} is \${name}\`; }
console.log(whois(user)); // "jdoe is Jane"`)])),[[t,void 0,"js"]]),V,k,z,C,l((o(),e("pre",null,[s(`function drawChart({
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
});`)])),[[t,void 0,"js"]]),$],64)}const fn=i(c,[["render",q]]);export{fn as default};
