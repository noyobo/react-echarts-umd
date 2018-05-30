# react-echarts-umd

echarts-for-react umd library

## UMD

```html
<script src="https://cdn.jsdelivr.net/npm/react-echarts-umd@{version}/umd/react.echarts.js"></script>
```

## Usage

* webpack config

````js
module.exports = {
  ...
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'echarts-for-react': 'react-echarts-umd',
    'react.echarts': 'ReactEcharts',
  },
  ...
}

- Example

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
  <script src="/umd/react-echarts.js"></script>
</head>

<body>
  <div id="root"></div>
  <script src="/demo/bundle.js"></script>
</body>

</html>
````
