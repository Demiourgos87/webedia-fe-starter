const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

// ----- Output file paths
var cssOutput = 'css/master.css',
    jsOutput = 'js/master.js';

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: jsOutput
    },
    devtool: 'source-maps',
    module: {
        rules: [
            // ----- SCSS compiling
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader", options: { importLoaders: 1 } },
                        "postcss-loader",
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    devServer: {
        // ----- Webpack dev server options
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        // ----- Output compiled css file
        new ExtractTextPlugin(cssOutput),
    ]
}
