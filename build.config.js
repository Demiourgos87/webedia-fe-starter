var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

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
    module: {
        rules: [
            // ----- JS ES2015 compiling
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            // ----- SCSS compiling
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        // ----- Output compiled css file
        new ExtractTextPlugin({
            filename: cssOutput,
            allChunks: true
        })
    ]
};
