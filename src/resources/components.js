import Vue from 'vue'
import AppIcon from 'components/app/app-icon/app-icon'
import AppLazyImage from 'components/app/app-lazy-image/app-lazy-image'
import AppLoader from 'components/app/loader/loader'

const components = () => {
  Vue.component('AppIcon', AppIcon)
  Vue.component('AppLazyImage', AppLazyImage)
  Vue.component('AppLoader', AppLoader)
}

export default components()
