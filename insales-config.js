var extend = require('deepmix')
var fs = require('fs')
// var imagemin = require('gulp-imagemin')
async function imagemin() {
  const { default: imagemin } = await import('./node_modules/gulp-imagemin');
}
var autoprefixer = require('insales-uploader-autoprefixer')
var jsValidate = require('gulp-jsvalidate');

/**
 * Активный магазин
 * Тут нужно указать активную директорию
 */
var shop = 'insales/shop_main';

process.argv.forEach((val, index) => {
  // Проверка параметра с активным магазином в консоли
  if (~val.indexOf('site=')) {
    var shopFolder = 'insales/' + val.split('=')[1];
    var stat = fs.statSync(shopFolder);
    if (stat.isDirectory()) shop = shopFolder;
  }
});

/**
 * Настройки по умолчанию
 */
var defaultConfig = {
  account: {
    // id: '11111111111111111111111111',
    // token: '222222222222222222222',
    // url: 'shop-41254.myinsales.ru',
    http: true // Если сайт на https и отказывает работать, необходимо выставить false
  },
  theme: {
    //id: '854716',
    root: './' + shop,
    backup: true, // Создавать backup после загрузки?
    assetsSync: true, // Делать синхронизацию с директорией assets?
    excludeFiles: [],
    onUpdate: function onUpdate() {
      // обновление темы
    },
    assetsDomain: 'https://assets.insales.ru'
  },
  plugins: {
    // файлы которые не обрабатываются плагинами
    exclude: ['*.min.js', '*.min.css', '*.liquid', '*.md'],
    // gulp плагины для стилей
    style: function (stream) {
      return stream
        .pipe(autoprefixer({
          browsers: ['last 10 versions'],
          cascade: true
        }))
    },
    // gulp плагины для скриптов
    script: function (stream) {
      return stream
        .pipe(jsValidate())
    },
    // gulp плагины для изображений
    img: function (stream) {
      return stream
        .pipe(imagemin())
    }
  },
  util: {
    openBrowser: true // Открывать браузер при запуске стрима?
  },
  chokidarOptions: {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: false,
    interval: 200,
    delay: 0,
    binaryInterval: 300,
    alwaysStat: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100
    },
    ignorePermissionErrors: true
  }
}

module.exports = extend(defaultConfig, require('./' + shop));
