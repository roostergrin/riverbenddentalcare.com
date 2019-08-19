<template lang="pug" src="./simply-straight.pug"></template>

<script>
import BlockHeader from 'block/block-header/block-header'
import BlockSections from 'block/block-page-section/block-page-section'
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['simply-straight']
    }
  },
  components: {
    BlockHeader,
    BlockSections,
    HeroPages
  }
}
</script>
