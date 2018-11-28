import Vue from 'vue';   
import Toast from '@/components/toastComponent.vue'; 
let ToastConstructor  = Vue.extend(Toast);
  
let myToast = (options)=>{  
    let toastDom = new ToastConstructor({  
        el:document.createElement('div'), 
        data(){
            return {
                show: options.show||true,
                message : options.message,
                position : options.position,
                during:options.during
            }
        },
    })  

    document.body.appendChild(toastDom.$el)   //把toast组件的dom添加到body里  
}  
function registerToast(){
    Vue.prototype.$toast= myToast;
}
export default registerToast;  