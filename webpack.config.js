const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'LZYUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{test: /\.tsx?$/, loader: 'awesome-typescript-loader'}]
    }
}