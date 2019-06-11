<template lang="pug" src="./footer.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.app.nav
    }
  }
}
</script>
