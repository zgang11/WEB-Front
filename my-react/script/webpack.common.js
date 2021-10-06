const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, '../dist')
    // },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.ejs',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    },
                ],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.(js|jsx)/,
                use: 'babel-loader',
                exclude: /\.module\.js$/,
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, ///在css-loader前应用的loader的数目, 默认为0
                            modules: true, //开启css-modules模式, 默认值为flase
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
                exclude: /(node_modules)|(global\.less)/,
            },

        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    }
}

module.exports = config