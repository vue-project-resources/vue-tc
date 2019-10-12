const fs = require('fs');

let arg = process.argv[process.argv.length - 1];
arg = arg.substring(2, arg.length);
const buildConfig = {pages: {}};
switch (arg) {
    case 'developer':
        buildConfig.pages.developer = {
            // 页面的入口文件
            entry: 'src/developer/main.js',
            // 页面的模板文件
            template: 'public/index.html',
            // build 生成的文件名称  例： dist/index.html
            filename: 'index.html'
        };
        break;
    case 'operation':
        buildConfig.pages.operation = {
            // 页面的入口文件
            entry: 'src/operation/main.js',
            // 页面的模板文件
            template: 'public/index.html',
            // build 生成的文件名称  例： dist/index.html
            filename: 'index.html'
        };
        break;
    case 'carMachine':
        buildConfig.pages.operation = {
            // 页面的入口文件
            entry: 'src/car-Machine/main.js',
            // 页面的模板文件
            template: 'public/index.html',
            // build 生成的文件名称  例： dist/index.html
            filename: 'index.html'
        };
        break;
}
fs.writeFile('./vue.config.js', 'module.exports = ' + JSON.stringify(buildConfig, null, 2), {'encoding': 'utf-8'}, err => {
    if (err) {
        throw err
    }
    console.log('Init scripts complete.')
});

