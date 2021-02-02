// Core
import merge from 'webpack-merge';

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from './constants';

// Modules
import { loadScripts, loadHTML, loadImages, loadSVG, loadFonts, connectBuildProgressIndicator, connectFriendlyErrors } from '../modules';

export default () => {
    return merge(
        {
            // ТОЧКА ВХОДА
            entry: SOURCE_DIRECTORY,
            output: {
                path: BUILD_DIRECTORY, // ПУТЬ ДО ДИРЕКТОРИИ OUTPUT. УКАЗЫВАЕТСЯ АБСОЛЮТНЫЙ ПУТЬ
                publicPath: '/'
            }
        },
        loadScripts(),
        loadImages(),
        loadSVG(),
        loadFonts(),
        loadHTML(),
        connectBuildProgressIndicator(),
        connectFriendlyErrors()
    );
};
