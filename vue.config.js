module.exports = {
    devServer: {
        open: true, // auto open brower 自动打开浏览器...
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8099,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null     // string | Object
    }
};