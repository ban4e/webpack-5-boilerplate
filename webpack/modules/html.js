import HtmlWebpackPlugin from 'html-webpack-plugin';

// Constants
import { TEMPLATE_FILE } from '../configs/constants';

export const loadHTML = () => ({
    /* КАЖДЫЙ ПЛАГИН ПРЕДСТАВЛЯЕТ ИЗ СЕБЯ КОНСТРУКТОР */
    plugins: [
        new HtmlWebpackPlugin({
            template: TEMPLATE_FILE
        })
    ]
});
