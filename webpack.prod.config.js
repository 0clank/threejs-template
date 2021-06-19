const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            BUILT_AT: webpack.DefinePlugin.runtimeValue(Date.now),
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new HTMLWebpackPlugin({
            inject: true,
            hash: false,
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            //favicon: path.resolve(__dirname, 'images', 'favicon.ico'),
        })
    ],
};