var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
    path = require('path');

// ----- Output file paths
var outputDir = 'html/',
    cssOutput = 'css/styles.css',
    jsOutput = 'js/master.bundle.js';

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    devtool: 'source-map',
    module: {
        rules: [
            // ----- JS ES2015 compiling
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            // ----- SCSS compiling
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { sourceMap: true, url: false } },
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
    // ----- Webpack dev server options
    devServer: {
        contentBase: path.join(__dirname, outputDir),
        watchContentBase: true,
        compress: true,
        port: 3300,
        stats: {
            all: false,
            errors: true,
            warnings: true
        },
        open: true
    },
    plugins: [
        // ----- Output compiled css file
        new ExtractTextPlugin({
            filename: cssOutput,
            allChunks: true
        }),
        new WebpackBuildNotifierPlugin({
            title: "Webpack",
            suppressSuccess: false
        })
    ]
};
