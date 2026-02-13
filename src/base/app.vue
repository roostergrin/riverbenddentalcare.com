<template lang="pug" src="./app.pug"></template>

<script>
import GoogleTranslate from 'components/google-translate/google-translate'
import TheFooter from 'components/footer/footer'
import TheNavigation from 'components/navigation/navigation'
import BaseBaseAccess from 'components/base-access/index'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_INSTAGRAM')
    this.$store.dispatch('SET_SCROLLED', false)
    this.updateMeta()
  },
  watch: {
    '$route.path' () {
      this.updateMeta()
    },
    '$store.state.loading' (isLoading) {
      if (!isLoading) this.updateMeta()
    }
  },
  methods: {
    getSlugFromRoute (path) {
      const routeAliases = {
        '/': 'home',
        '/new-patients': 'simply-straight',
        '/treatments': 'financial'
      }

      if (routeAliases[path]) return routeAliases[path]
      return path.replace(/^\/+|\/+$/g, '')
    },
    sanitizeText (value) {
      if (!value || typeof value !== 'string') return ''

      const container = document.createElement('div')
      container.innerHTML = value
      return (container.textContent || container.innerText || '')
        .replace(/\s+/g, ' ')
        .trim()
    },
    limitDescription (value, maxLength = 155) {
      if (value.length <= maxLength) return value
      return `${value.slice(0, maxLength - 1).trim()}…`
    },
    getMetaDescription (pageData) {
      const defaultDescription = 'Riverbend Dental Care offers modern, patient-focused dental and orthodontic care in London, Ontario.'

      if (!pageData) return defaultDescription

      const candidates = [
        pageData.seo_description,
        pageData.meta_description,
        pageData.description,
        pageData.excerpt,
        pageData.hero && pageData.hero.title,
        pageData.header && pageData.header.text,
        pageData.welcome && pageData.welcome.text
      ]

      const description = candidates
        .map(this.sanitizeText)
        .find((text) => text && text.length > 20)

      return this.limitDescription(description || defaultDescription)
    },
    upsertMetaTag (selector, attrs) {
      let tag = document.head.querySelector(selector)

      if (!tag) {
        tag = document.createElement('meta')
        document.head.appendChild(tag)
      }

      Object.keys(attrs).forEach((key) => {
        tag.setAttribute(key, attrs[key])
      })
    },
    updateMeta () {
      const siteName = 'Riverbend Dental Care'
      const slug = this.getSlugFromRoute(this.$route.path)
      const pages = this.$store.state.pages || {}
      const pageData = pages[slug]
      const pageTitle = this.sanitizeText((pageData && pageData.title) || this.$route.name || siteName)
      const title = pageTitle === siteName ? siteName : `${pageTitle} | ${siteName}`
      const description = this.getMetaDescription(pageData)

      document.title = title
      this.upsertMetaTag('meta[name="description"]', { name: 'description', content: description })
      this.upsertMetaTag('meta[property="og:title"]', { property: 'og:title', content: title })
      this.upsertMetaTag('meta[property="og:description"]', { property: 'og:description', content: description })
      this.upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
      this.upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    }
  },
  components: {
    GoogleTranslate,
    TheFooter,
    TheNavigation,
    BaseBaseAccess
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
