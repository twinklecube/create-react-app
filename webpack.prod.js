const {merge} = require('webpack-merge');

module.exports = merge(
    require('./webpack.shared'),
    {
        mode: "production"
    }
);