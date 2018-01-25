<template>
  <div>
      <h1>
          <nuxt-link to="/user/13">backtoindex</nuxt-link>
      </h1>
  </div>
</template>

<script>
export default {
    asyncData(){
        return new Promise((resolve)=>{
            //此处resolve的对象会混入data当中
            //路由更新完毕（即asyncData方法调用完成且页面加载完）时会自动调用finish()函数
            setTimeout(() => {      
                resolve({})
            }, 1000);
        })
    }
}
</script>
