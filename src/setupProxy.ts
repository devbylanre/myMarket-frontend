import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'https://mymarket-tan.vercel.app',
      changeOrigin: true,
    })
  );

  app.use(
    '/product',
    createProxyMiddleware({
      target: 'https://mymarket-tan.vercel.app',
      changeOrigin: true,
    })
  );
};
