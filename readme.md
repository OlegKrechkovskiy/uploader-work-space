# Рабочий проект для insales-uploader

![GitHub](https://img.shields.io/github/license/OlegKrechkovskiy/uploader-work-space?style=plastic)  ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/OlegKrechkovskiy/uploader-work-space/main?label=version&style=plastic)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/OlegKrechkovskiy/uploader-work-space/deepmix?style=plastic)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/OlegKrechkovskiy/uploader-work-space/gulp-imagemin?style=plastic)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/OlegKrechkovskiy/uploader-work-space/gulp-jsvalidate?style=plastic)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/OlegKrechkovskiy/uploader-work-space/insales-uploader?style=plastic)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/OlegKrechkovskiy/uploader-work-space/insales-uploader-autoprefixer?style=plastic)

> [My insales-uploader-workspace](https://github.com/OlegKrechkovskiy/uploader-work-space)

## Установка

>`npm i`

Установятся зависимости. В том числе:
> `nsales-uploader-autoprefixer` Аналог **gulp-autoprefixer**, но с необходимыми проверками и **scss** синтаксисом

&nbsp;

##### !! Установить Uploader (если не установелен)
> ``> npm i insales-uploader -g``
##### При желании можно установить JSHint - инструмент статического анализа кода. Стандартная настройка уже есть в корне проекта
> ``> npm install jshint``

&nbsp;
<hr>

## Настройка

``insales-config.js`` - тут лежат дефолтные настройки, в переменной `shop` переключается рабочая директория.

`insales/shop_main/` - пример рабочей директории.

`index.js` - внутри каждой рабочей директории находится файл с настройками доступа к магазину.

&nbsp;
<hr>

## Запуск методов:

`uploader <название метода> <название метода>`

| Методы           | Сокращенно | Действие
| :-------------   | :---------:| :------------------
| `init`           | `i`        | Инициализировать проект
| `listThemes`     | `lt`       | получить список доступных тем
| `download`       | `d`        | загрузка темы на компьютер
| `pull`           | `p`        | загрузка темы на компьютер. Перед началом загрузки, все локальные файлы удаляются
| `stream`         | `s`        | отслеживание изменений в файлах
| `start`          | `a`        | загрузка темы на компьютер + запуск метода stream
| `upload`         | `u`        | загрузка темы на сервер с полным обновлением файлов
| `backup`         | `b`        | создание архива с резервной копией
| `downloadFiles`  | `df`       | скачать файлы из раздела файлы в бэк-офисе
| `uploadFiles`    | `uf`       | загрузка файлов в раздел файлы (Загружаются файлы из директории files)
| `help [command]` |            | display help for command

&nbsp;
<hr>
&nbsp;

## Примеры:

`uploader a` - запустит метод `start`

`uploader download` - запустит метод `download`

`uploader download stream` - запустит методы `download stream`

> Указать активную директорию можно через параметр в консоли `site=<имяДиректории>`.

> Имя директории не должно содержать пробелов!

`uploader start site=shop2` - запустит метод `start` с активной директорией `shop2`


