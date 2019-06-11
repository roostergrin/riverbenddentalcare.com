<template lang="pug" src="./block-instagram-grid.pug"></template>

<script>
export default {
  computed: {
    feed () {
      return this.$store.state.insta.slice(0, 12)
    }
  }
}
</script>
