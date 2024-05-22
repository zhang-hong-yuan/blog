import{_ as l}from"./index-C58PDwY0.js";import{ao as n,o as e,c as o,a4 as s,q as i,F as p,at as t,e as m}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},u=t("<h1>CommonJS</h1><p>【Node.js】遵循了【CommonJS】模块化规范，【CommonJS】规定了模块的特性和各模块之间如何相互依赖。【CommonJS】规定：</p><ol><li>每个模块内部，【module】变量代表当前模块。</li><li>【module】变量是一个对象，它的【exports】属性是对外的接口。</li><li>加载某个模块，其实是加载该模块的【module.exports】属性。</li></ol><p>和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做<b>模块作用域</b>。</p><br><p>【Node.js】 中根据模块来源的不同，将模块分为了 3 大类，分别是：</p><ol><li><b>内置模块</b>：由 【Node.js】 官方提供的，例如【fs】、【path】、【http】 等</li><li><b>自定义模块</b>：用户创建的每个 【.js】 文件，都是自定义模块</li><li><b>第三方模块</b>：由第三方开发出来的模块，使用前需要先下载</li></ol><h2>require()</h2><p>在 js 代码中，使用模块之前需要先导入。使用【require()】方法，可以加载需要的内置模块、用户自定义模块、第三方模块。例如：</p>",9),a=t("<blockquote>使用【require()】方法加载其它模块时，会执行被加载模块中的代码。</blockquote><br><p><b>模块的加载机制</b>：模块(不论是内置模块、用户自定义模块还是第三方模块)在第一次加载后会被缓存。 这也意味着多次调用【require()】不会导致模块的代码被执行多次。</p><p><ins>内置模块</ins>是由【Node.js】官方提供的模块，内置模块的加载优先级最高。例如，【require(&#39;fs&#39;)】始终返回内置的【fs】模块，即使在【node_modules】目录下有名字相同的包也叫做【fs】。 </p><p><ins>自定义模块</ins>&gt;必须指定以【./】或【../】开头的路径标识符。否则【node】会把它当作内置模块或第三方模块进行加载。如果省略了文件的扩展名，则【Node.js】会按顺序分别尝试加载以下的文件：</p><ol><li>按照确切的文件名进行加载</li><li>补全【.js】扩展名进行加载</li><li>补全【.json】扩展名进行加载</li><li>补全【.node】扩展名进行加载</li><li>加载失败，终端报错</li></ol><p><ins>第三方模块</ins>&gt;：如果传递给【require()】的模块标识符不是一个内置模块，也没有以【./】或【../】开头，则【Node.js】会从当前模块的父目录开始，尝试从【/node_modules】文件夹中加载第三方模块。如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。例如，假设在 【C:\\Users\\itheima\\project\\foo.js】文件里调用了【require(&#39;tools&#39;)】，则【Node.js】会按以下顺序查找：</p><ol><li>C:\\Users\\itheima\\project\\node_modules\\tools</li><li>C:\\Users\\itheima\\node_modules\\tools</li><li>C:\\Users\\node_modules\\tools</li><li>C:\\node_modules\\tools</li></ol><p><ins>目录作为模块</ins>：当把目录作为模块标识符，传递给【require()】进行加载的时候，有三种加载方式：</p><ol><li>在被加载的目录下查找一个叫做【package.json】的文件，并寻找【main】属性，作为【require()】加载的入口</li><li>如果目录里没有【package.json】文件，或者【main】入口不存在或无法解析，则【Node.js】将会试图加载目录下的【index.js】文件</li><li>如果以上两步都失败了，则【Node.js】会在终端打印错误消息，报告模块的缺失：【Error: Cannot find module &#39;xxx&#39;】</li></ol><h2>module.exports</h2><p> 在自定义模块中，可以使用【module.exports】对象，将模块内的成员共享出去，供外界使用。外界用【require()】方法导入自定义模块时，得到的就是【module.exports】所指向的对象，它里面存储了和当前模块有关的信息。 </p><p>由于【module.exports】单词写起来比较复杂，【Node】提供了【exports】对象。默认情况下，【exports】和 【module.exports】指向同一个对象(相同的地址值)。导入的结果以【module.exports】为准。</p>",13),c=m("blockquote",null,"为了防止混乱，最好不要在同一个模块中同时使用【exports】和【module.exports】。",-1);function x(j,_){const r=n("code");return e(),o(p,null,[u,s((e(),o("pre",null,[i(`const fs = require('fs')
const custom = require('./custom.js')
const moment = require('moment')`)])),[[r,void 0,"js"]]),a,s((e(),o("pre",null,[i(`exports.username = 'zs'
module.exports = {
	gender: '男',
	age: 22
}
// require 结果为 { gender: '男', age: 22 }`)])),[[r,void 0,"js"]]),s((e(),o("pre",null,[i(`module.exports.username = 'zs'
exports = {
	gender: '男',
	age: 22
}
// require 结果为 { username = 'zs' }`)])),[[r,void 0,"js"]]),s((e(),o("pre",null,[i(`exports.username = 'zs'
module.exports.gender = '男'
// require 结果为 { username: 'zs', gender: '男' }`)])),[[r,void 0,"js"]]),s((e(),o("pre",null,[i(`exports = {
	username: 'zs',
	gender: '男'
}
module.exports = exports
module.exports.age = '22'
// require 结果为 { username: 'zs', gender: '男', age = '22' }`)])),[[r,void 0,"js"]]),c],64)}const R=l(d,[["render",x]]);export{R as default};
