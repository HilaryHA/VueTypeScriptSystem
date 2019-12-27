module.exports = {
    devServer: {
        open: true, // auto open brower 项目启动后自动打开浏览器...
        disableHostCheck: false, // 设置为true时，此选项将绕过主机检查。不建议这样做，因为不检查主机的应用容易受到DNS重新绑定攻击的攻击。
        host: "0.0.0.0",
        port: 8099, // 修改端口号
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {     // string | Object 解决跨域问题
            '/api': {
                target: 'http://localhost:10010',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
