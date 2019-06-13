<template lang="pug" src="./slider-main.pug"></template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      lastSlide: false,
      scrolled: null,
      slides: null
    }
  },
  props: {
    props: {
      Type: Array
    }
  },
  async mounted () {
    this.getSlideLength()
    setInterval(() => {
      this.autoplay()
    }, 5000)
  },
  methods: {
    getSlideLength () {
      this.slides = this.props.length
    },
    autoplay () {
      if (this.activeSlide === (this.props.length - 1)) {
        this.lastSlide = true
        this.activeSlide = 0
        this.scrolled = null
      } else {
        this.lastSlide = false
        this.activeSlide++
        this.scrolled = this.activeSlide - 1
      }
    },
    goToSlide (i) {
      this.activeSlide = i
    }
  }
}
</script>
