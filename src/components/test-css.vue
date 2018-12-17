<template>
  <div class="parent">
    <div class="div1">
      <div class="div11">上下左右居中</div>
    </div>
    <div class="div2">
      <div class="div22">上下左右居中</div>
    </div>
    <div class="div3 clear">
      <div class="div33">上下左右居中</div>
    </div>

    <div class="cl1ear"></div>
  </div>

</template>

<script>
    export default {
        name: "test-css"
    }
</script>

<style scoped>
  .parent{
    background-color: black;
    display:flex;
  }
  .div1{
    flex:1;
//    float:left;
    height:400px;
    width:400px;
    background-color: red;
    margin:10px;
    position:relative;
    text-align: center;
  }
  .div2{
    flex:1;

    height:400px;
    width:400px;
    background-color: yellow;
    margin:10px;
    display:flex;
    align-items: center;
    justify-content: center;


  }
  .div3{
    flex:1;
    //float:right;
    height:400px;
    width:400px;
    background-color: blue;
    margin:10px;
    position:relative;
  }

.div11{
  background-color: blueviolet;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
  margin:auto;
}

  .div22{
    background-color: blueviolet;


  }
  .div33{

    position:absolute;
    top: 0px;
    left:0px;
    right:0px;
    bottom:0px;
    width:50px;
    height:50px;
    margin:auto;
    background-color: blueviolet;

  }

  .clear{
    clear:both
  }

</style>
