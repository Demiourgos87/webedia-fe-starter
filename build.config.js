var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

// ----- Output file paths
var outputDir = 'html/',
    cssOutput = 'css/master.css',
    jsOutput = '_common/javascript/webedia/master.js',
    fontOutput = '../_common/fonts/';

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", "postcss-loader", "sass-loader"]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath: fontOutput,
                        name: "[name].[ext]",
                        emitFile: false
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput)
    ]
};
