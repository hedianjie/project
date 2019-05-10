const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../app/main.js'),
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
				test: /\.css$/,
				loader: 'style-loader!css-loader'
            },
            {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    }
        
}