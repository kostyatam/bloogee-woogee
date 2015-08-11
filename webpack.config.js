var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new ExtractTextPlugin("app.css")
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            },
            { 
                test: /\.ejs$/, 
                loader: "ejs-loader?variable=data" 
            }
        ]
    },
    resolve: {
        alias: {
            classes: path.join(__dirname, '/app/extensions/classes.js')
        } 
    }
};