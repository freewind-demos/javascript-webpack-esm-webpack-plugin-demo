Webpack Config "esm-webpack-plugin" Demo
========================================

webpack本身不支持输出esm模块的代码，使用`esm-webpack-plugin`可以解决这个问题。

```
npm install
npm run demo
```

注意：

1. 要使用支持`import()`函数的浏览器，比如chrome
2. webpack.config.js中的变量名`LIB`可以为任何一个没有跟代码中暴露出来的变量重名的名字
