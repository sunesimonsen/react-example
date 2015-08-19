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
            }
            // {
            //     //tell webpack to use jsx-loader for all *.jsx files
            //     test: /\.jsx$/,
            //     loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            // }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
