// postcss.config.ts
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 75,
            propList: ['*'],
            exclude: /node_modules/
        },
    },
};