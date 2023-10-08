import { createProxyMiddleware } from 'http-proxy-middleware'
import { TRANSMISSION_URL } from '../config.js'

const options = {
  target: TRANSMISSION_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/live': '/;'
  }
}

export const transmissionProxy = createProxyMiddleware(options)
