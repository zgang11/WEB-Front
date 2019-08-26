// const webpack = require('webpack')
module.exports = {
    
    entry: './app.js',
    output: {
        filename: './dist/bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    // optimization: {
    //     minimize: true
    // }
}