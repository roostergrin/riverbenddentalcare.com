<template lang="pug" src="./custom-contact-section.pug"></template>

<script>
import ContactForm from 'components/form/form-contact/form-contact'

export default {
  props: {
    props: {
      Type: Object
    }
  },
  components: {
    ContactForm
  }
}
</script>
