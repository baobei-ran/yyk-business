# yyk-business  // 业务端

# apache 配置 history 模式
    .htaccess 文件是配置项

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## history 模式在ie9下自动变更为 hash 模式解决方案

    在路由中加入 fallback: false, // 强制使用 history 模式， 注意： 有些a标签的herf属性设置成#就会刷新整个页面的