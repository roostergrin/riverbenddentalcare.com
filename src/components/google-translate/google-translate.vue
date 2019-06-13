<template lang="pug" src="./google-translate.pug"></template>

<script>
export default {
  created () {
    this.createFunction()
    this.createScript()
  },
  methods: {
    createFunction () {
      let code = `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');}`
      let gt = document.createElement('script')
      gt.type = 'text/javascript'
      try {
        gt.appendChild(document.createTextNode(code))
        document.body.appendChild(gt)
      } catch (e) {
        gt.text = code
        document.body.appendChild(gt)
      }
    },
    createScript () {
      let cb = document.createElement('script')
      cb.type = 'text/javascript'
      cb.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`
      cb.async = 'true'
      document.body.appendChild(cb)
    }
  }
}
</script>
