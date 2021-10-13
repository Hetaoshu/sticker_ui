<template>
  <div class="archive-header">
      <div class="logo-box">
            <img
              src="../assets/images/sticker_logo.svg"
              class="nav-logo">
            <span class="logo-name" >Sticker-ui</span>
      </div>
      <div class="nav-box">
          <li class="items" @click="navJump(items)" v-for="(items,index) in navData" :key="index" >{{items.name}}</li>
      </div>
  </div>
</template>

<script>
export default {
    name:'archive-header',
    data(){
        return{
            navData:[
                {name:'概览',key:'genaral',path:'/zh'},
                {name:'组件列表',key:'genaral',path:'/zh/component'},
                {name:'反馈',key:'genaral',path:'/zh/feedback'},
                {name:'关于',key:'genaral',path:'/zh/about'},
            ]
        }
    },
    methods:{
        navJump(target){
            this.$router.push(target.path)
        }
    }
}
</script>

<style  lang="scss" scoped >
.archive-header{
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 1px 5px 1px rgba(0,0,0,.1);;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    .logo-box{
        height: 100%;
        display: flex;
        align-items: center;
        .nav-logo{
            width: 50px;
            height: 50px;
        }
        .logo-name{
            font-family: Impact,PmingLiu,Courier New;
            color:#fa6400;
            font-weight: 600;
            font-size: 20px;
            letter-spacing: 1px;
            margin-left: 10px;
            position: relative;
            text-transform:uppercase;
            opacity: .8;
            &::before{
                content: '';
                position: absolute;
                bottom: -6px;
                left: 50%;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #fa6400;
                transform: translateX(-50%);
            }
        }

    }
    .nav-box{
        width: 300px;
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .items{
            color: rgba(0,0,0,.8);
            &:hover{
                color: #fa6400;
                cursor: pointer;
            }
        }
    }
}

</style>