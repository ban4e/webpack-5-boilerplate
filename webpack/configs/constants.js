import path from 'path';
import { path as DIRECTORY_ROOT } from 'app-root-path'; // ПОЛУЧЕНИЕ КОРНЯ ПРОЕКТА

export const ROOT_DIRECTORY = DIRECTORY_ROOT;
export const BUILD_DIRECTORY = path.join(DIRECTORY_ROOT, './dist');
export const SOURCE_DIRECTORY = path.join(DIRECTORY_ROOT, './src');
export const TEMPLATE_FILE = path.join(DIRECTORY_ROOT, './src/index.html');
export const POSTCSS_CONFIG = path.join(DIRECTORY_ROOT, './webpack/configs/postcss.config.js');
export const HOST = 'localhost';
export const PORT = '3000';
