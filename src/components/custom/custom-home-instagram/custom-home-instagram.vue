<template lang="pug" src="./custom-home-instagram.pug"></template>

<script>
export default {
  props: {
    props: {
      Type: Object
    }
  },
  computed: {
    feed () {
      return this.$store.state.insta.slice(0, 12)
    }
  }
}
</script>
