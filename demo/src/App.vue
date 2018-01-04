<template>
  <div id="app">
    <div class="header"></div>
    <div class="tab">
      <div class="tabItem">
        <router-link to='/front/subCommodity'>商品</router-link>
      </div>
      <div class="tabItem">
        <router-link to='/front/subCommont'>评论</router-link>
      </div>
      <div class="tabItem">
        <router-link to='/front/subBusiness'>商家</router-link>
      </div>
    </div>
    <div class="content">
      内容
    </div>
  </div>
</template>

<script>
  import vhead from './components/header/header'
  export default {
    components: {
      vhead: vhead
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .tab{
    display: flex;
  }
  .tabItem{
    flex: 1;
    height: 80px;
    background-color: #ececea;
    text-align: center;
    line-height: 80px;
  }
</style>
