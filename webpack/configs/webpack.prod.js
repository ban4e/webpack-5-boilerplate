// Core
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Common configuration
import getConfig from './webpack.common';

// Modules
import { loadImages, loadProdStyles, connectBundleAnalyzer } from '../modules';

module.exports = () => {
    return merge(
        getConfig(),
        {
            mode: 'production',
            target: 'browserslist', // ОКРУЖЕНИЕ, ПОД КОТОРОЕ РАБОТАЕТ СБОРКА
            devtool: false,
            output: {
                filename: 'assets/js/[name].[chunkhash:5].bundle.js', // Плейсхолдеры имени и хэша для конкретного чанка
                chunkFilename: 'assets/js/[name].[chunkhash:5].chunk.js'
            },
            plugins: [new CleanWebpackPlugin()]
        },
        loadProdStyles(),
        loadImages(),
        connectBundleAnalyzer()
    );
};
