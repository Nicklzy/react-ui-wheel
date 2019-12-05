const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'LZYUI',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
            {test: /\.svg$/, loader: 'svg-sprite-loader'},
            {test: /\.s[ac]ss$/, use: ['style-loader','css-loader','sass-loader'],}
        ]
    },
}
