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
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        },
{ test: /\.css/, loader: "style-loader!css-loader" },
        ]
    },
    resolve: {
        // extensions: ['.css', '.js']
    },
    output: {
        path: '/home/pil0t/Projects/reactThings/projectAttempt2/dist/bundle.js',
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