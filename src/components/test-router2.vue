<template>
    <div>
      <p>test router link with params</p>
      <p>link to param id is {{param}}</p>
    </div>
</template>

<script>
    export default {
        name: "test-router2",
      data(){
          return {
            param:this.$route.query.id,
          }
      }
    }
</script>

<style scoped>

</style>
