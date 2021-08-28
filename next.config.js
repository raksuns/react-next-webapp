const {ESBuildMinifyPlugin} = require('esbuild-loader');
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

function useEsbuildMinify(config, options) {
    const {minimizer} = config.optimization;
    const terserIndex = minimizer.findIndex(
        minifier => minifier.constructor.name === 'TerserPlugin',
    );

    minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options));
}

function useEsbuildLoader(config, options) {
    const {rules} = config.module;
    const rule = rules.find(rule => rule.test.test('.ts'));

    rule.use = {
        loader: 'esbuild-loader',
        options,
    };
}

module.exports = withPlugins([[withImages]], {
    webpack(config, options) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        );
        useEsbuildMinify(config);
        useEsbuildLoader(config, {
            // Specify `tsx` if you're using TypeScript
            loader: 'tsx',
            target: 'es2017',
        });
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
});
