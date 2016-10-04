var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var path = require('path');
var Promise = require('es6-promise').polyfill();

//var APP_DIR = path.resolve(__dirname, '');
var JS_DIR = path.resolve(__dirname, 'javascript');

module.exports = {
    // Don't attempt to continue if there are any errors
    bail: true,
    devtool: 'source-map',
    entry: {
        createInterface: JS_DIR + '/createInterface/CreateInternshipInterface.jsx',
        searchInterface: JS_DIR + '/searchInterface/SearchInterface.jsx',
        editAdmin: JS_DIR + '/editAdmin/editAdmin.jsx'
    },
    output: {
        path: path.join(JS_DIR, "dist"),
        filename: "[name]-[hash].min.js",
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    externals: {
        "jquery": "$"
    },
    module: {
        loaders: [{
            enforce: "pre",
            test: /\.(js|jsx)$/,
            loader: "eslint",
            include: JS_DIR
        }, {
            test: /\.(js|jsx)$/,
            include: JS_DIR,
            loader: 'babel'
        }, {
            test: [/\.js$/, /\.es6$/, /\.jsx$/],
            exclude: /node_modules/,
            loader: WebpackStripLoader.loader('console.log')
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc.js'),
        useEslintrc: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8 anyway
                warnings: true
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    ]
}