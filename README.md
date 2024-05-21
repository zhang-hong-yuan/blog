# router

# component

## word

### props

### class

### data structure

单词基本信息的数据结构

```js
export const basic = {
  word: "当前单词",
  bep:  "英音",
  aep:  "美音",
  
  // 单词的各种形式
  form: { 
    yx: "单词原型",
    fs: "复数",
    sd: "第三人称单数形式",
    
    xf: "现在分词",
    gf: "过去分词",
    gq: "过去式",
    
    bj: "比较级",
    zg: "最高级"
  }
}
```

单词详细信息的数据结构

```js
export const detail = [
  {
    label: "词性",
    items: [ // 具体使用场景
      {
        mean: "中文意思",
        dict: "英文解释",
        demo: [ // 例句
          {
            en: "英文例句",
            zh: "中文翻译",
            
            zhan_img:  "百词斩示例图片",
            zhan_logo: "百词斩象形图",
            
            abbr: ["缩写形式"],
            syno: ["同义词"]
            also: "同一个词的另一种写法"
            info: "备注信息",
            comb: ["常用搭配"],
            tips: "提示信息",
            note: "中括号注释"
          }
        ]
      }
    ]
  }
]
```

单词相关短语的数据结构：

```js
export const phrase = [
	{
    collo:"collocation n.搭配;组合;词组;(词语的)组配",
    items: [
      
    ]
  }
]
```







# directives

## code 

修饰符：

- `escape`  对 `<`、 `>`进行转义
- `nocopy`  给 `pre` 元素添加 `no-copy` 类
- `error` 给 `pre` 元素添加 `error` 类
- `right`  给 `pre` 元素添加 `right` 类