<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1>
        <button type="button" @click="add">{{login}}</button>
        <nuxt-link to="/user">此处路由进入test</nuxt-link>
        {{userAgent}}
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
//导入状态树，vuex自带mapState对象
import { mapState } from 'vuex'

export default {
  //会等待sayncData函数执行结束，才会开始渲染此组件
  //因此提前就注入的loading菊花图会先显现出来等到asyncData结束自动消失
  asyncData({userAgent}){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        //resolve的对象会混入data当中
        //注意，resolve的是一个对象，而不是值，context.userAgent是一个值不是对象
        resolve({userAgent})
      }, 1000);
    })
    //return {userAgent}
  },
  async fetch({store}){
    //页面渲染前执行
    //普通的非异步操作，可以通过commit突变事件来实现
    await store.commit('increment')
  },
  //将mapState混入计算属性,mapState接受一个参数数组，传入要遍历出的state属性
  computed:mapState([
    'counter',
    'login'
  ]),
  components: {
    AppLogo
  },
  methods:{
    add(){
      //在method中，通过this全局获取到store状态树，commit mutations实现状态的改变
      this.$store.commit('changeLogin')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
