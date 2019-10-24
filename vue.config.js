module.exports = {
  "devServer": {
    "host": "0.0.0.0",
    "port": 8080,
    "disableHostCheck": true,
    "open": true,
    "hotOnly": true
  },
  "pages": {
    "carMachine": {
      "entry": "src/car-machine/main.js",
    "developer": {
      "entry": "src/developer/main.js",
      "template": "public/index.html",
      "filename": "index.html"
    }
  },
  "outputDir": "dist-carMachine"
}
