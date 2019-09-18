<template lang='pug' src='./form-contact.pug'></template>
<script>
// import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
      formSubmitted: false
      // verified: false
    }
  },
  // components: {
  //   VueRecaptcha
  // },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.$el.children[0].submit()
        } else {
        }
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
