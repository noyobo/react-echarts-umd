# react-echarts-umd

[![](https://img.shields.io/travis/noyobo/react-echarts-umd.svg)](https://travis-ci.org/noyobo/react-echarts-umd) [![Codecov](https://img.shields.io/codecov/c/github/noyobo/react-echarts-umd/master.svg)](https://codecov.io/gh/noyobo/react-echarts-umd/branch/master) [![npm package](https://img.shields.io/npm/v/react-echarts-umd.svg)](https://www.npmjs.org/package/react-echarts-umd) [![NPM downloads](http://img.shields.io/npm/dm/react-echarts-umd.svg)](https://npmjs.org/package/react-echarts-umd)

echarts-for-react umd library

## UMD

```html
<script src="https://cdn.jsdelivr.net/npm/react-echarts-umd/umd/react.echarts.js"></script>
```

## Usage

* webpack config

```js
module.exports = {
  ...
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'echarts-for-react': 'ReactEcharts',
    'react-echarts-umd': 'ReactEcharts',
  },
  ...
}
```

* Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/react@16.4.0/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@16.4.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-echarts-umd/umd/react.echarts.js"></script>
</head>

<body>
  <div id="root"></div>
  <script src="/demo/bundle.js"></script>
</body>

</html>
```
