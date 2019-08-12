const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                use: ['file-loader'],
                test: /\.svg$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        })
    ],
    // Enables importing of js / jsx files without specifying their extensions
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
