<template lang="pug" src="./home.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
  }
}
</script>
