import axios from 'axios'
import api from 'api'
import jsonp from 'jsonp'

import {
  GET_APP,
  // GET_BLOG,
  GET_PAGES,
  GET_INSTAGRAM,
  SET_SCROLLED
} from './mutation-types'

const actions = {
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: { ...data.acf } }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  // GET_BLOG ({ commit }) {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`${api}/wp/v2/posts?per_page=10&_embed`)
  //       const data = response.data.reduce((blogList, blog) => {
  //         const newBlog = { slug: blog.slug, categories: blog.categories, ...blog.acf }
  //         blogList.push(newBlog)
  //         return blogList
  //       }, [])
  //       commit(GET_BLOG, data)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // },
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`)
        const total = response.headers['x-wp-totalpages']
        let page = 1

        while (page < total) {
          page++
          let res = axios.get(`${api}/wp/v2/pages?page=${page}&per_page=100`)
          response.data.concat(res.data)
        }

        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: {title: data.title.rendered, ...data.acf} }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  GET_INSTAGRAM ({ commit }) {
    (async () => {
      try {
        jsonp('https://api.instagram.com/v1/users/13689043766/media/recent?access_token=13689043766.bda2f4e.4a7cf06c5156427180b86baa4c9c5dd5', null, (err, res) => {
          if (err) {
            console.log(err.message)
          } else {
            const data = res.data.reduce((allData, data) => {
              let newData = { image: data.images.standard_resolution.url, text: data.caption.text, video: data.videos, link: data.link }
              allData.push(newData)
              return allData
            }, [])
            commit(GET_INSTAGRAM, data)
          }
        })
      } catch (e) { console.log('INSTA API: ' + e) }
    })()
  },
  SET_SCROLLED ({ commit }, data) {
    commit(SET_SCROLLED, data)
  }
}

export default actions
