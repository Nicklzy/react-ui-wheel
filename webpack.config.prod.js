const path = require('path');
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'LZYUI',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [{test: /\.tsx?$/, loader: 'awesome-typescript-loader'}]
    },
})
