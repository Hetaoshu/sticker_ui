<template>
  <div class="index-box" >
    <span>关于</span>
    <router-view/>
  </div>
</template>

<script>
export default {
    name:'archive-index',
    data(){
      return{
        // img:require('../assets/images/model.jpg')
      }
    }
}
</script>

<style scoped >
.index-box{
  box-sizing: border-box;
  height: 700px;
  background: #fff;
  margin-top: 80px;
  font-size: 50px;
  color: red;
  font-weight: 600;
}
</style>