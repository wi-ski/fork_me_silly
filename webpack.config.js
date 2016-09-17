var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },
        { test: /\.css/, loader: "style-loader!css-loader" },
        ]
    },
    resolve: {
        // extensions: ['.css', '.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
