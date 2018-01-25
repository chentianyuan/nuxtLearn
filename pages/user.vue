<template>
    <div id="user">
        <h1>这里是user的复用处</h1>  
        <button type="button" @click="testAction">{{login}}</button>
        <nuxt/>
        这里相当于router-view 
        <h1>当在路由/user/:id子路由时，复用处并不改变</h1> 
        <h5 v-for="(item,index) in axiosData" :key="index">{{index}} + {{item}}</h5>
    </div>
</template>

<script>
import axios from 'axios'
//从vuex中导入
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  asyncData(){
    return new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            //asyncData需返回一个对象
            var obj = {
                axiosData:res.data
            }
            resolve(obj)
        })
    })
  },
  computed:mapState([
      'counter',
      'login'
  ]),
  //map系列接受一个数组参数  
  methods:mapActions([
    'testAction'
  ])
}
</script>
