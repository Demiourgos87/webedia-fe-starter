const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

// ----- Output file paths
var outputDir = 'html/',
    cssOutput = 'css/master.css',
    jsOutput = 'js/master.js';

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    devtool: 'source-maps',
    module: {
        rules: [
            // ----- SCSS compiling
            { test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        "postcss-loader",
                        "sass-loader"
                    ]
                }))
            }
        ]
    },
    devServer: {
        // ----- Webpack dev server options
        contentBase: path.join(__dirname, outputDir),
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
