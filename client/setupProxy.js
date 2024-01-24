const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',  // Specify the base URL you want to proxy
        createProxyMiddleware({
            target: 'http://localhost:3000',  // Specify the target URL
            changeOrigin: true,
        })
    );
};
