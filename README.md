<div align=center>
A server, NAS navigation panel, Homepage, Browser homepage.
<br>
一个服务器、NAS导航面板、Homepage、浏览器首页。

</div>

## 😎 Features

- 🍉 Clean interface, powerful functionality, low resource consumption
- 🍊 Easy to use, visual operation, zero-code usage
- 🍠 One-click switch between internal and external network modes
- 🍵 Supports Docker deployment (compatible with Arm systems)
- 🎪 Supports multi-account isolation
- 🎏 Supports viewing system status
- 🫙 Supports custom JS, CSS
- 🍻 Simple usage without the need to connect to an external database
- 🍾 Rich icon styles for free combination, supports [Iconify icon library](https://icon-sets.iconify.design/)
- 🚁 Supports opening small windows in the webpage (some third-party websites may block this feature)

## todo
- [ ] 支持导入heimdall的导出文件
- [ ] 支持排序模式跨分组拖动
- [ ] 支持分组展开/折叠
- [ ] 获取图标优化
- [ ] 搜索优化

## 🖼️ Preview Screenshots

**Various styles, freely combined**

![](./doc/images/icon-small-new.png)
![](./doc/images/transparent-info.png)
![](./doc/images/transparent-small.png)
![](./doc/images/solid-color-info.png)
![](./doc/images/full-color-small.jpg)

**Built-in small windows**

![](./doc/images/window-ssh.png)
![](./doc/images/window-xunlei.png)


## 开发运行注意事项

## 编译前端
```
npm install
npm run build
```
把前端编译后的dist文件夹拷贝到service/assets下

## 安装go-bindata
```ssh
go get github.com/go-bindata/go-bindata/...
go get github.com/elazarl/go-bindata-assetfs/...

# go版本>=1.17 使用intsall方式
go install -a -v github.com/go-bindata/go-bindata/...@latest
go install -a -v github.com/elazarl/go-bindata-assetfs/...@latest
```
## 打包静态文件

```
# 开发环境，修改静态文件后自动编译
go-bindata-assetfs -debug -o=assets/bindata.go -pkg=assets assets/...

# 正式环境，修改静态文件后需要重新编译
go-bindata-assetfs -o=assets/bindata.go -pkg=assets assets/...
```

## 编译后端

### Windows CMD
```
set CGO_ENABLED=1
go run main.go
```
### Windows PowerShell

```
$env:CGO_ENABLED=1
go run main.go
```

win下需要安装gcc, 推荐安装MSYS2，安装步骤如下
- 下载 https://github.com/msys2/msys2-installer/releases/download/2025-02-21/msys2-x86_64-20250221.exe 并安装

- 打开MSYS2终端，输入 `pacman -S mingw-w64-ucrt-x86_64-gcc` 安装gcc

- 把`C:\msys64\usr\bin`加入环境变量，如果MSYS2安装在不同的目录，需要修改路径

- 安装完成后，gcc --version

### goland下运行
添加环境变量 CGO_ENABLED=1

### Linux/Mac
```
CGO_ENABLED=1 go run main.go
```

## 默认账号密码
| 字段       | 值               |
|------------|------------------|
| 账号       | `admin@sun.cc`   |
| 初始密码   | `12345678`       |

## 命令参数
| 参数            | 说明                              |
|-----------------|-----------------------------------|
| -h              | 查看命令说明                      |
| -config         | 生成配置文件（conf/conf.ini）     |
| -password-reset | 重置第一个管理账号的密码          |

## Docker Deployment

```azure
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```

目录挂载 -v，全部可选，根据自己的需求选择：

| 容器目录         | 说明                          |
|------------------|-------------------------------|
| /app/conf        | 配置文件                      |
| /app/uploads     | 上传的文件                    |
| /app/database    | 数据库文件                    |
| /app/runtime     | 运行日志（不推荐挂载）        |
| /app/web/custom  | 自定义（js、css等）           |

## ❤️ Thanks

- [sun-panel](https://github.com/hslr-s/sun-panel)
