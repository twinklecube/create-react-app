const {merge} = require('webpack-merge');

module.exports = merge(
    require('./webpack.shared'),
    {
        mode: "development",
        devServer: {
            port: 3000,
            open: true
        }
    }
);