module.exports = {
  "devServer": {
    "host": "0.0.0.0",
    "port": 8080,
    "disableHostCheck": true,
    "open": true,
    "hotOnly": true
  },
  "pages": {
    "developer": {
      "entry": "src/developer/main.js",
      "template": "public/index.html",
      "filename": "index.html"
    },
    "operation": {
      "entry": "src/car-Machine/main.js",
      "template": "public/index.html",
      "filename": "index.html"
    }
  }
}