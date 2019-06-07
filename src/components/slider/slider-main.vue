<template lang="pug" src="./slider-main.pug"></template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      lastSlide: false,
      slides: ''
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
      this.slides = this.props.hero.length
    },
    autoplay () {
      if (this.activeSlide === (this.props.hero.length - 1)) {
        this.lastSlide = true
        this.activeSlide = 0
      } else {
        this.lastSlide = false
        this.activeSlide++
      }
    },
    goToSlide (i) {
      this.activeSlide = i
    }
  }
}
</script>
