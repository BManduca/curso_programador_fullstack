const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js',
    galaxy: './src/galaxy.js'
  },
  output: {
    filename:'[name].bundle.js',
    //__dirname -> pegando diretório atual e concatenando com o dist
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  watch: true,
  devServer: {
    static: {
        directory: path.join(__dirname, "dist"),
        watch: true,
    }
  },

  mode: "development"
}