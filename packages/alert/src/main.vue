<template>
  <transition
    name="dialog-fade"
    >
  <div class="el-alert" v-if="show" >
    {{name}}
  </div>
  </transition>
</template>

<script>
module.exports =  {
  name: 'ElAlert',
  data(){
    return{
      name:'测试组件'
    }
  },
  props:{
    show:{
      type:Boolean,
      default:true
    }
  },
  watch:{
    show:{
      deep:true,
      handler:function(nes){
        console.log(nes)
      }
    }
  },
  methods:{

  }
};
</script>
