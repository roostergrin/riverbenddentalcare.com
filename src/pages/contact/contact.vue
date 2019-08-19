<template lang="pug" src="./contact.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import PageSection from 'custom/custom-contact-section/custom-contact-section'
import BlockHeader from 'block/block-header/block-header'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  components: {
    HeroPages,
    BlockHeader,
    PageSection
  }
}
</script>
