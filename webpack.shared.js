const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
                test: /\.(jpg|jpeg|png|gif|svg|webp|woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
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
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    "less-loader"
                ],
                include: /\.module\.less$/,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ],
                exclude: [/\.module\.less$/, /node_modules/]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'node_modules', '@twinklecube', 'create-ui-library', 'dist', 'esm', 'images'),
                    to: path.join(__dirname, 'dist', 'images'),
                    noErrorOnMissing: true
                },
                {
                    from: path.resolve(__dirname, 'node_modules', '@twinklecube', 'create-ui-library', 'dist', 'esm', 'fonts'),
                    to: path.join(__dirname, 'dist', 'fonts'),
                    noErrorOnMissing: true
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    }
}