<template lang="pug" src="./financial.pug"></template>

<script>
import FinancialSection from 'custom/custom-financial-section/custom-financial-section'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import InstagramGrid from 'block/block-instagram-grid/block-instagram-grid'

export default {
  computed: {
    props () {
      return this.$store.state.pages.financial
    }
  },
  components: {
    FinancialSection,
    HeroPages,
    InstagramGrid
  }
}
</script>
