<template>
    <transition name='fade'>
    <div v-show='show' :class='position' class='toast'>
         <i>{{message}}</i>
    </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                show: true,
                message : '提示内容',
                position : 'top',
                during:2000
            };
        },
        mounted(){
           // this.close();
          window.toast = this
        },
        methods:{
            close(){
                var that=this;
                setTimeout(()=>{
                    that.show=false;
                },this.during)
            }
        }
    }
</script>


<style>
.toast {
    position: fixed;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
    word-wrap:break-word;
    padding:18px;
    text-align: center;
    z-index:9999;
    font-size:.22rem;
    max-width:80%;
    color: #fff;
    border-radius: 5px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
}
 i{ font-style:normal}
.toast.middle{
    top:50%;
}
.toast.top{
    top:20%;
}
.toast.bottom{
    top:90%;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter, .fade-leave-active {
  transform:translate(-50%,-50%) scale(0);
}
</style>
