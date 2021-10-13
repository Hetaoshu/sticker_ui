<template>
  <div id="app" >
      <archive-header></archive-header>
      <div class="archive-container">
        <router-view></router-view>
      </div>
      <archive-footer></archive-footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {

    },

    watch: {

    },

    methods: {
 
    },

    mounted() {

    }
  };
</script>
<style scoped>
.archive-container{
  box-sizing: border-box;
  margin-top: 80px;
}
</style>
