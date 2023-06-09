const path = require("path");
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "mobile-menu.js",
        path: path.resolve(__dirname, "dist"),
        globalObject: "this",
        library: {
            name: "mobileMenu",
            type: "umd",
            export: "default",
        },
        clean: true,
    },
});
