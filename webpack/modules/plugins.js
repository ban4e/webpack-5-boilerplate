import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';

export const connectBuildProgressIndicator = () => ({
    plugins: [new WebpackBar()]
});

export const connectFriendlyErrors = () => ({
    plugins: [new FriendlyErrorsWebpackPlugin()]
});

export const connectBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false,
            generateStatsFile: true
        })
    ]
});

export const connectDotenv = () => ({
    plugins: [new Dotenv()]
});
