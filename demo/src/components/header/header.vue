<template>
  <div class="header">
    <div class="headerCon">
      <img :src="seller.avatar" alt="logo" class="headLogo">
      <div class="headRight">
        <div class="rightTitle">
          <div class="headSmallLogo">品牌</div>
          <div class="titleName">{{seller.name}}</div>
        </div>
        <div class="rightTime">
          <span class="rigthAway">{{seller.description}}</span> /
          <span class="rigthTime">{{seller.deliveryTime}}</span>分钟送达
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data () {
      return {

      }
    },
    created () {

    },
    props: ['seller']
  }
</script>

<style scoped lang="less" type="text/less">
  *{
    box-sizing: border-box;
  }
  .headerCon{
    font-size: 0px;
    padding-top: 48px;
    padding-left: 48px;
    width: 100%;
    background-color: rgba(7,17,27,0.5);
    .headLogo{
      display: inline-block;
      width: 128px;
      height: 128px;
      padding-right: 32px;
      padding-bottom: 36px;
      border-radius: 4px;
    }
    .headRight{
      display: inline-block;
      vertical-align: top;
      color: white;
      .rightTitle{
        .headSmallLogo{
          display: inline-block;
          background-color: red;
          padding: 5px;
          font-size: 24px;
        }
        .titleName{
          display: inline-block;
          font-weight: bold;
          font-size: 32px;
          padding-left: 12px;
        }
      }
      .rightTime{
        font-size: 24px;
        padding-top: 16px;
        padding-bottom: 20px;
        .rigthAway{

        }
        .rigthTime{

        }
      }
    }
  }
</style>
