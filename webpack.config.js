var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + "/app",
    entry: [
        'webpack-dev-server/client?http://localhost:4000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        "./index.jsx"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]-[hash:base64:5]',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    postcss: [
        require('autoprefixer-core')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
