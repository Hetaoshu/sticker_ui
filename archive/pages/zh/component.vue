<template>
  <div class="compenents-box" >
    <div class="side-bar">
       <el-button type="warning" size="mini" >按钮</el-button>
    </div>
    <div class="right-content" >
      <router-view/>
    </div>
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

<style scoped lang="scss" >
.compenents-box{
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  padding: 5px 100px;
  display: flex;
  .side-bar{
    border-right: 1px solid rgb(222,222,222);
    width: 15%;
    min-height: 100vh;
  }
  .right-content{
    width: 85%;
    min-height: 100vh;
  }
}
</style>