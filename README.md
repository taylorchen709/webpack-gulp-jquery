﻿.
├── package.json                 
├── README.md                    
├── gulpfile.js                  // gulp 配置文件
├── webpack.config.js            // webpack 配置文件
├── doc                          // doc  目录：放置应用文档
├── test                         // test 目录：测试文件
├── dist                         // dist 目录：放置开发时候的临时打包文件
├── build                        // build  目录：放置 prodcution 打包文件
├── mocks                        // 数据 mock 相关  
├── src                          // 源文件目录
│   ├── html                     // html 目录 
│   │   ├── index.html
│   │   └── page2.html
│   ├── js                       // js 目录 
│   │   ├── common               // 所有页面的共享区域，可能包含共享组件，共享工具类
│   │   ├── home                 // home 页面 js 目录
│   │   │   ├── components
│   │   │   │   ├── App.js
│   │   │   ├── index.js         // 每个页面会有一个入口，统一为 index.js
│   │   ├── page2                // page2 页面 js 目录
│   │   │   ├── components
│   │   │   │   ├── App.js
│   │   │   └── index.js
│   └── style                    // style 目录
│       ├── common               // 公共样式区域
│       │   ├── varables.less    // 公共共享变量
│       │   ├── index.less       // 公共样式入口
│       ├── home                 // home 页面样式目录    
│       │   ├── components       // home 页面组件样式目录
│       │   │   ├── App.less 
│       │   ├── index.less       // home 页面样式入口
│       ├── page2                // page2 页面样式目录
│       │   ├── components       
│       │   │   ├── App.less
│       │   └── index.less       
├── vendor
│   └── bootstrap
└── └── jquery