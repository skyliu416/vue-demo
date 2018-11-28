<template>
  <div class="main">
      <h3>Index</h3>
       <div class="list">
          <ul>
          <router-link v-for="item in items" :to="{path: item.path, query:{id:item.id}}">
            <li> test for link {{item.path}}</li>
          </router-link>
          </ul>
        </div>
  </div>

</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            items:[
              {
                path:"/test-router",
                id:""
              },
              {
                path:"/test-router2",
                id: "1"
              },
              {
                path:"/test-toast",
                id:""
              }
            ]

          }
      }
    }
</script>

<style scoped>
  .main{
    text-align: center;
  }
.list{
  width:500px;
}
</style>
