<template>
  <div id="app">
    <div class="header">
      <vhead :seller='seller'></vhead></div>
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vhead from './components/header/header'
  export default {
    data () {
      return {
        seller: ''
      }
    },
    created: function () {
      this.$http.post('/hungrydata').then((response) => {
        console.log(response)
        this.seller = response.body.seller
      })
    },
    components: {
      vhead: vhead
    }
  }
</script>

<style scoped lang="less" type="text/less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .tab{
    display: flex;
    border-top: 1px solid rgba(7,17,27,0.1);
    .tabItem{
      flex: 1;
      height: 80px;
      text-align: center;
      line-height: 80px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
        &.router-link-active{
          color: #ff2f3e;
        }
      }
    }
  }
</style>
