<template>
  <div class="header">
    header
  </div>
</template>
<style>

</style>
<script>
  export default {
    created () {
      this.$http.post('/hungrydata').then((response) => {
        console.log(response)
      })
    }
  }
</script>
