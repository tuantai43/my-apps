const PROXY_CONFIG = {
  '/api': {
    target: 'http://localhost:3030',
    secure: false,
    changeOrigin: true,
  }
}


module.exports = PROXY_CONFIG;