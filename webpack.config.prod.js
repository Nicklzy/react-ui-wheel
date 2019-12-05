const path = require('path');
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    externals: {
        'react':{
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            Root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            Root: 'ReactDOM',
        }
    }
})
