const {merge} = require('webpack-merge');

module.exports = merge(
    require('./webpack.shared'),
    {
        mode: "development",
        devtool: 'eval-source-map',
        devServer: {
            port: 3000,
            open: true
        }
    }
);