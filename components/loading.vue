<template>
  <div class="loading" v-if="loading">
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  //箭头函数()=>({})直接返回对象
  data:()=>({
      loading:false
  }),
  methods:{
      start(){
          this.loading = true
      },
      finish(){
          this.loading = false
      }
  }
}
</script>

<style>
    .loading{
        position:absolute;
        top:50%;
        left:50%;
        width:200px;
        height:200px;
        transform: translate(-100px,-100px);
        text-align:center;
        line-height:200px;
        font-size:20px;
        color:rgb(2, 0, 0);
        background: rgba(253, 249, 11, .5);
        z-index:10;
    }
</style>
