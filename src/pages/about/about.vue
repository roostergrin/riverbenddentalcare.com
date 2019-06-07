<template lang="pug" src="./about.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {

  }
}
</script>
