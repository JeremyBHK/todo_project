const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})