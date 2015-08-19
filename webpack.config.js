var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: "./main.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                )
            }
        ]
    },
    postcss: [
        require('autoprefixer-core')
    ],
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
};
