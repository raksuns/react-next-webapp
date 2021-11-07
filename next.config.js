const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
    swcMinify: true,
    webpack(config, options) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        );
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
});
