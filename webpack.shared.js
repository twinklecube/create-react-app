const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    "sass-loader"
                ],
                include: /\.module\.(css|s(a|c)ss)$/,
                exclude: /node_modules/
            },
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    "sass-loader"
                ],
                exclude: [/\.module\.(css|s(a|c)ss)$/, /node_modules/]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    }
}