# waluduo_tools-uniapp

* 本项目基于[uni-app](https://github.com/dcloudio/uni-app)进行开发，搭配[waluduo_tools-vue_admin](https://github.com/chenyuwulu/waluduo_tools-vue_admin)和[waluduo_tools-goframe](https://github.com/chenyuwulu/waluduo_tools-goframe)使用

## 总项目仓库分布
### 代码地址
* [waluduo_tools-goframe](https://github.com/chenyuwulu/waluduo_tools-goframe)：主要用于实现go后端方法。
* [waluduo_tools-vue_admin](https://github.com/chenyuwulu/waluduo_tools-vue_admin)：后台前端界面。
* [waluduo_tools-uniapp](https://github.com/chenyuwulu/waluduo_tools-uniapp)：用户(客户端)前端界面。

### 本项目结构
```
waluduo_tools-uniapp
│  .gitignore                   指定忽略git文件提交
│  common                       js组件库
│  pages                        基础页面文件根目录
│  static                       静态文件夹
│  App.vue                      参考微信小程序针对App入口的定义概念
│  main.js                      vue框架下的初始化在此进行
│  manifest.json                针对HBuilder X的配置清单
│  README.md                    项目介绍                         
│  pages.json                   针对uniapp项目的配置清单 
└─ uni.scss                     scss文件
```

### 操作流程

1.使用[HBuilder X](https://www.dcloud.io/hbuilderx.html)开发工具打开项目，之后按照uniapp文档上的操作运行到目标端即可
