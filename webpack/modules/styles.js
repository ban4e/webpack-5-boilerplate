// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// Utils
import getScopedName from './utils/scopedNameGenerator.js';

// Constants
import { POSTCSS_CONFIG } from '../configs/constants';

// css-loader
const loadCSS = ({ isDev = false } = { isDev: false }) => ({
    loader: 'css-loader',
    options: {
        sourceMap: isDev,
        modules: {
            getLocalIdent: (ctx, localIdentName, localName, options) => {
                return isDev ? localName : getScopedName(localName, ctx.resourcePath);
            }
        }
    }
});

// postcss-loader
const loadPostCSS = ({ isDev = false } = { isDev: false }) => ({
    loader: 'postcss-loader',
    options: {
        sourceMap: isDev,
        postcssOptions: {
            config: POSTCSS_CONFIG
        }
    }
});

export const loadDevStyles = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', loadCSS({ isDev: true }), loadPostCSS({ isDev: true })]
            }
        ]
    }
});

export const loadProdStyles = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                        /* options: {
                            publicPath: ''
                        } */
                    },
                    loadCSS(),
                    loadPostCSS()
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash:5].css',
            chunkFilename: 'assets/css/[name].[contenthash:5].css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin()
        ]
    }
});
