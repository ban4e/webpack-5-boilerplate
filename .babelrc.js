module.exports = api => {
    const env = api.env();
    api.cache.using(() => env === 'development');

    return {
        presets: [
            '@babel/preset-env',
        ],
        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining']
    };
};
