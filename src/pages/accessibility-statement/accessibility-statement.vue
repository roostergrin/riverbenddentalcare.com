<template lang="pug" src="./accessibility-statement.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['accessibility-statement']
    }
  },
  components: {
    HeroPages
  },
  data () {
    return {
      companyName: 'Riverbend Dental Care Orthodontics', // Fill this in
      domain: "<a href='https://riverbenddentalcare.com'>riverbenddentalcare.com</a>", // Fill this in
      email: "<a href='mailto:hello@riverbenddentalcare.com'>hello@riverbenddentalcare.com</a>", // Fill this in
      phone: "<a href='tel:519-472-3866'>519-472-3866</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
