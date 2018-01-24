<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1>
        <nuxt-link to="/user">此处路由进入test</nuxt-link>
        {{userAgent}}
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

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
  components: {
    AppLogo
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
