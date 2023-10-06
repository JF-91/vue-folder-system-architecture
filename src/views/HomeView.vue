<template>
  <div class="">
    <h1>Home</h1>

    <button class="btn btn-secondary" @click="goToDayBook">DayBook</button>

  </div>
</template>

<script >

  export default {
    methods: {
      goToDayBook() {
        this.$router.push({ name: 'no-entry' })
      },
    },
  }



</script>

<style scoped lang="scss">

  

</style>