// Core
import merge from 'webpack-merge';

// Common configuration
import getConfig from './webpack.common';

// Modules
import { loadImages, loadDevStyles } from '../modules';

export default () => {
    return merge(
        getConfig(),
        {
            mode: 'development',
            devtool: 'eval-cheap-module-source-map',
            target: 'web', // ОКРУЖЕНИЕ, ПОД КОТОРОЕ РАБОТАЕТ СБОРКА
            output: {
                filename: '[name].js',
                publicPath: '/' // УКАЗАНИЕ PUBLIC URL ДЛЯ DEV-РЕЖИМА (НЕОБХОДИМО ДЛЯ ПРАВИЛЬНОГО ПОСТРОЕНИЯ ПУТИ АССЕТОВ)
            }
        },
        loadDevStyles(),
        loadImages()
    );
};
