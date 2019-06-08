const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
    mode: 'development',
    module: {
        rules: [{test: /\.tsx?$/, loader: 'awesome-typescript-loader'}]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "LZY-UI",
            template: "index.html"
        })
    ]
})
