<template>
  <div>
      {{myId}}
  </div>
</template>

<script>
export default {
     async asyncData({ params }){
            let {id} = await params
            return {myId:id} 
    },
    data(){
        return{
            name:'user'
        }
    }
}
</script>
