<template lang="pug" src="./hero-pages.pug"></template>

<script>
export default {
  props: {
    props: {
      Type: Object
    },
    titlePos: {
      Type: String,
      default: 'left',
      validator: (str) => {
        return ['left', 'center', 'right'].indexOf(str) !== -1
      }
    }
  }
}
</script>
