<template lang="pug" src="./block-accordion.pug"></template>

<script>
export default {
  data () {
    return {
      active: 0,
      window: window.innerWidth
    }
  },
  props: {
    props: {
      Type: [Object, Array]
    }
  },
  computed: {
    width: function () {
      return this.window < 769
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.window = window.innerWidth
      this.width = this.window < 769
    })
  },
  methods: {
    toggleSection (i) {
      this.active = i
    }
  }
}
</script>
