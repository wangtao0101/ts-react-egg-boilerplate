import { Context } from 'egg';
import * as httpProxy from 'http-proxy-middleware';
import * as k2c from 'koa2-connect';
import * as pathToRegexp from 'path-to-regexp';

export default function httpProxyMiddleware() {
  const test1Proxy = k2c(httpProxy({
    target: 'http://localhost:3100/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/web': '/',
    },
  }));
  return async (ctx: Context, next: any) => {
    if (pathToRegexp(/web/).exec(ctx.request.url)) {
      test1Proxy(ctx, next);
    } else if (pathToRegexp(/static/).exec(ctx.request.url)) {
      test1Proxy(ctx, next);
    } else if (pathToRegexp(/sockjs-node/).exec(ctx.request.url)) {
      test1Proxy(ctx, next);
    } else {
      await next();
    }
  };
}
