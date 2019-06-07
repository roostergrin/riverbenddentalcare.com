/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Roboto:100,400', 'Roboto+Condensed:300,400,700' ]
    }
  })
}

export default fonts()
/* eslint-enable */
