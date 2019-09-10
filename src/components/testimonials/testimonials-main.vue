<template lang="pug" src="./testimonials-main.pug"></template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      lastSlide: false,
      // scrolled: null,
      slides: null
    }
  },
  computed: {
    testimonials () {
      return this.$store.state.app.testimonials
    }
  },
  async mounted () {
    this.getSlideLength()
  },
  methods: {
    getSlideLength () {
      this.slides = this.$store.state.app.testimonials.testimonials.content.length
    },
    autoplay () {
      if (this.activeSlide === (this.$store.state.app.testimonials.testimonials.content.length - 1)) {
        this.lastSlide = true
        this.activeSlide = 0
        // this.scrolled = null
      } else {
        this.lastSlide = false
        this.activeSlide++
        // this.scrolled = this.activeSlide - 1
      }
    },
    goToSlide (i) {
      this.activeSlide = i
    }
  }
}
</script>
