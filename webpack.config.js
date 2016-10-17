var path = require('path');
var webpack = require('webpack');
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log(__dirname + '/dist/')
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
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
                test: /\.scss$/,
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
        alias: {
                       src: __dirname + '/src',
                       components: __dirname + '/src/components',
                       SettingsComponents: __dirname + '/src/components/SettingsComponents',
                       SettingsTypes: __dirname + '/src/components/SettingsComponents/Types',
                       actions: __dirname + '/src/actions',
                       containers: __dirname + '/src/containers',
                       reducers: __dirname + '/src/reducers',
                       modules: __dirname + '/src/modules'
               }
    },
    output: {
        path:__dirname + '/dist/',
        // path: path.join('./dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
    ]
};
