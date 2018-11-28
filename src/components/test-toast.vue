<template>
  <div @click="">
    <a href="#" @click.stop="bubble()">test 同级冒泡</a>
    <a href="#" @click.stop="trigger_toast()">test toast</a>
  </div>
</template>

<script>
  import toastComponent from '@/components/toastComponent'
    export default {
        name: "test-toast",
      components:{
          toastComponent
      },
      methods:{
        trigger_toast: function(){
          this.$toast({
            show: true,
            message: "密码不能小于8位！",
            position: "top",
            during: 5000
          });
          setTimeout(()=>{
            window.toast.show=false;
          },2000)
        },
        bubble:function(){
          alert("div clicked")
        }
      }
    }
</script>

<style scoped>

</style>
