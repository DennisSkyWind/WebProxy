const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'https://chat.openai.com',
  changeOrigin: true,
  secure: false
});

export default function(req, res) {
  proxy.web(req, res);
}
