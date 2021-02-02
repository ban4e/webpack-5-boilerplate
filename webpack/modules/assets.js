// PNG, JPG, JPEG
export const loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name]_[hash:5][ext]'
                }
                // parser: { dataUrlCondition: { maxSize: limit } }
            }
        ]
    }
});

// SVG
export const loadSVG = () => ({
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/svg/[name]_[hash:5][ext]'
                }
            }
        ]
    }
});

// Fonts
export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name]_[hash:5][ext]'
                }
            }
        ]
    }
});
