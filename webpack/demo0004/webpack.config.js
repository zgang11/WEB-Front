module.exports = {
    entry: './mian.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
            // use: ['style-loader', 'css-loader']
        }]
    }
}