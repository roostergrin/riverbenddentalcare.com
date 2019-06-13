<template lang="pug" src="./block-accordion.pug"></template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  props: {
    props: {
      Type: [Object, Array]
    }
  },
  methods: {
    toggleSection (i) {
      this.active = i
    }
  }
}
</script>
