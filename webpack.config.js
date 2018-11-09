const path = require("path");
const WebpackMd5Hash = require("webpack-md5-hash");
const webpack = require("webpack");

module.exports = {
    entry: {
        'lib/wordsearch': ["./src/entry.js"],
        'lib/wordsearch.min': ["./src/entry.js"],
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js"
    },
    devServer: {
        contentBase: "./dist",
        port: 7700
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: require.resolve('./src/entry.js'),
                use: [{
                    loader: 'expose-loader',
                    options: 'WordSearch'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            }
        ]
    },
    plugins: [
        new WebpackMd5Hash()
    ]
};
