<template lang="pug" src="./about.pug"></template>

<script>
import CustomSection from 'custom/custom-about-section/custom-about-section'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import BlockSections from 'block/block-page-section/block-page-section'
import PhotoGallery from 'components/photo-gallery/photo-gallery'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    CustomSection,
    HeroPages,
    BlockSections,
    PhotoGallery
  }
}
</script>
