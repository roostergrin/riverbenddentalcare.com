<template lang="pug" src="./thank-you.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    }
  },
  components: {
    HeroPages
  }
}
</script>

<style>
.pages-thank-you {
  height: auto;
}
.pages-thank-you__text {
  padding: 3rem 1rem 5rem;
  text-align: center;
}
h2.pages-thank-you__heading {
  text-align: center;
  padding-top: 35px;
  display: none;
}
@media only screen and (max-width: 767px)
{
 h2.pages-thank-you__heading {
  display: block;
}
.pages-thank-you__text
{
  padding-top: 1rem;
}
.pages-thank-you .hero-pages__title--left
{
  display: none;
}
}
</style>
