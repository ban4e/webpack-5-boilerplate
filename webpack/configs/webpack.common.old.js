// Core
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constants
const { BUILD_DIRECTORY, SOURCE_DIRECTORY, TEMPLATE_FILE } = require('./constants');
const isDev = process.env.NODE_ENV === 'development';

module.exports = () => ({
    // ТОЧКА ВХОДА
    // 'webpack-hot-middleware/client?reload=true&quiet=true',
    entry: SOURCE_DIRECTORY,
    output: {
        filename: '[name].[chunkhash:5].js', // ToDO: Вспомнить название реплейсера в квадратных скообках
        path: BUILD_DIRECTORY, // ПУТЬ ДО ДИРЕКТОРИИ OUTPUT. УКАЗЫВАЕТСЯ АБСОЛЮТНЫЙ ПУТЬ
        publicPath: '/' // УКАЗАНИЕ PUBLIC URL ДЛЯ DEV-РЕЖИМА (НЕОБХОДИМО ДЛЯ ПРАВИЛЬНОГО ПОСТРОЕНИЯ ПУТИ АССЕТОВ)
    },
    mode: isDev ? 'development' : 'production',
    target: isDev ? 'web' : 'browserslist', // ОКРУЖЕНИЕ, ПОД КОТОРОЕ РАБОТАЕТ СБОРКА
    // ToDO: необходимость в конфиге
    /* devServer: {
        host: HOST,
        port: PORT,
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: isDev
    }, */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    /* КАЖДЫЙ ПЛАГИН ПРЕДСТАВЛЯЕТ ИЗ СЕБЯ КОНСТРУКТОР */
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: TEMPLATE_FILE
        })
    ]
});
