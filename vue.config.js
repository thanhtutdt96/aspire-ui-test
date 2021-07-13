const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/main.scss";`
            },
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
}
