import Vue from 'vue'
import VueRouter from 'vue-router'
import Styleguide from '@/pages/styleguide/styleguide'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const AboutPage = () => import('@/pages/about/about')
const ContactPage = () => import('@/pages/contact/contact')
const FinancialPage = () => import('@/pages/financial/financial')
const HomePage = () => import('@/pages/home/home')
const SimplyStraightPage = () => import('@/pages/simply-straight/simply-straight')
// const TechnologyPage = () => import('@/pages/technology/technology')
const ClinicTour = () => import('@/pages/clinic-tour/clinic-tour')
const ThankYouPage = () => import('@/pages/thank-you/thank-you')
const Sitemap = () => import('@/pages/sitemap/sitemap')
const Covid19 = () => import('@/pages/covid-19/covid-19')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: AboutPage
    },
    {
      path: '/clinic-tour',
      name: 'Clinic Tour',
      navigation: true,
      component: ClinicTour
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: SimplyStraightPage
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: FinancialPage
    },
    // {
    //   path: '/technology',
    //   name: 'Technology',
    //   navigation: true,
    //   component: TechnologyPage
    // },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      component: ContactPage
    },
    {
      path: '/covid-19',
      name: 'COVID-19',
      navigation: false,
      component: Covid19
    },
    {
      path: '/thank-you',
      navigation: false,
      component: ThankYouPage
    },
    {
      path: '/sitemap',
      navigation: false,
      component: Sitemap
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
