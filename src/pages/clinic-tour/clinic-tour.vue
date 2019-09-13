<template lang="pug" src="./clinic-tour.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import PhotoGallery from 'components/photo-gallery/photo-gallery'

export default {
  computed: {
    props () {
      return this.$store.state.pages['clinic-tour']
    }
  },
  components: {
    HeroPages,
    PhotoGallery
  }
}
</script>
