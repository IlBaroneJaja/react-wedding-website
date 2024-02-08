// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js', // Update with your entry file
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'client', 'build'),
        },
        // Your other configuration settings...

        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
                isProduction &&
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                ['gifsicle', {interlaced: true}],
                                ['mozjpeg', {progressive: true, quality: 80}],
                                ['pngquant', {quality: [0.6, 0.8]}],
                                ['svgo', {removeViewBox: false}],
                            ],
                        },
                    }
                }),
            ].filter(Boolean),
        },

        module: {
            rules: [
                // Your other loaders...
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]', // Ensure it preserves the original names
                            },
                        },
                    }],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: !isProduction,
                            },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html', // Path to your HTML template
                filename: 'index.html', // Output HTML file
            }),
        ],
    };
};
