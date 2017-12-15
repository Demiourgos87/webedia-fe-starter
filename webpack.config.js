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
    devtool: 'source-map',
    module: {
        rules: [
            // ----- SCSS compiling
            { test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                // importLoaders: 1,
                                sourceMap: true
                            }
                        },
                        { loader: "postcss-loader", options: { sourceMap: true } },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                outputStyle: "expanded",
                                sourceMapContents: true
                            }
                        }
                    ]
                }))
            }
        ]
    },
    devServer: {
        // ----- Webpack dev server options
        contentBase: path.join(__dirname, outputDir),
        watchContentBase: true,
        compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        // ----- Output compiled css file
        new ExtractTextPlugin({
            filename: cssOutput,
            allChunks: true
        }),
    ]
}
