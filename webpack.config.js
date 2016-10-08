var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.s?css$/,
                loaders:[
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            }
        ]
    },
    resolve: {
        // extensions: ['.js']
    },
    output: {
        path: path.join('./dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
    ]
};
