'use strict'

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

// Use glob to find all HTML files in the src directory
const htmlFiles = glob.sync('./src/*.html');

module.exports = {
    mode: 'development',
    entry: './src/assets/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets', to: 'assets'
                }  // Copy `assets` folder from `src` to `dist`
            ]
        }),
        // Dynamically create an HtmlWebpackPlugin instance for each HTML file found
        ...htmlFiles.map((file) => new HtmlWebpackPlugin({
            template: file,
            filename: path.basename(file)
        })),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,  // Rule to handle image files within JS/SCSS imports
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,  // Fonts handling
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './src/assets/fonts/[name].[ext]',  // Output path for fonts
                        }
                    }
                ]
            },
            {
                test: /\.js$/,  // Rule for JS files
                exclude: /node_modules/,  // Exclude node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],  // Transpile ES6+ to ES5
                    }
                }
            }
        ]
    }
}