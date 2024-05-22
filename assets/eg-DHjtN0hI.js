import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o as t,c as r,a4 as i,q as n,F as p,at as l,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},m=l("<h1>数据获取</h1><p>有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，需要从服务器获取用户的数据。我们可以通过两种方式来实现：</p><ul><li><strong>导航完成之后获取：</strong>先完成导航，然后在接下来的【组件生命周期钩子】中获取数据。在数据获取期间显示“加载中”之类的指示。</li><li><strong>导航完成之前获取：</strong>导航完成前，在【路由进入的守卫】中获取数据，在数据获取成功后执行导航。</li></ul><p>从技术角度讲，两种方式都不错——就看想要的用户体验是哪种。</p><h2>导航完成后获取数据</h2><p>当使用这种方式时，会立马导航和渲染组件，然后在组件的 ‘【created】’ 钩子中获取数据。这就有机会在数据获取期间展示一个 ‘loading’ 状态，还可以在不同视图间展示不同的 ‘loading’ 状态。</p><p>假设有一个 ‘Post’ 组件，需要基于 ‘$route.params.id’ 获取文章数据：</p>",7),c=o("div",null,`<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>`,-1),h=o("h2",null,"在导航完成前获取数据",-1),u=o("p",null,"通过这种方式，在导航转入新的路由前获取数据。可以在组件的 ‘【beforeRouteEnter】’ 守卫中获取数据，当数据获取成功后只调用 ‘next’ 方法：",-1),f=o("p",null,"在为后面的视图获取数据时，用户会停留在【当前】的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。",-1);function v(g,_){const e=a("code");return t(),r(p,null,[m,i((t(),r("pre",null,[n(""),c,n(`
`)])),[[e,void 0,"html"]]),i((t(),r("pre",null,[n(`export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace \`getPost\` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    },
  },
}
`)])),[[e,void 0,"js"]]),h,u,i((t(),r("pre",null,[n(`export default {
  data() {
    return {
      post: null,
      error: null,
    }
  },
  beforeRouteEnter(to, from, next) {
    getPost(to.params.id, (err, post) => {
      // \`setData\` 方法定义在下面的代码中
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  async beforeRouteUpdate(to, from) {
    this.post = null
    try {
      this.post = await getPost(to.params.id)
    } catch (error) {
      this.error = error.toString()
    }
  },
  methods: {
    setData(error, post) {
      if (error) {
        this.error = error
      } else {
        this.post = post
      }
    }
  }
}
`)])),[[e,void 0,"js"]]),f],64)}const W=s(d,[["render",v]]);export{W as default};
