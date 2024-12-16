---
title: 🤝问题
layout: default
nav_order: 2
sidebar_position: 2
---

# 常见问题

----

> 总结常见遇到的问题或是已遇见帮助

----

**Q:Web版本，火炮位计算无法输入**

解决办法，切换键盘模式为原生，点击原生输入器来输入值

**Q:应用支持平台**

| Target platform | Target architectures | Supported versions | CI-tested versions | Unsupported versions |
|---|---|---|---|---|
| Android SDK | x64, Arm32, Arm64 | 21 to 34 | 21 to 34 | 20 and earlier |
| iOS | Arm64 | 12 to 18 | 17 | 11 and earlier |
| macOS | x64, Arm64 | Mojave (10.14) to Sequoia (15) | Ventura (13), Sonoma (14) | High Sierra (10.13) and earlier |
| Chrome (Web) | JavaScript, WebAssembly | Latest 2 [link to Chrome releases](https://chromereleases.googleblog.com/search/label/Stable%20updates) | 119, 125 | 95 and earlier |
| Firefox (Web) | JavaScript | Latest 2 [link to Firefox releases](https://www.mozilla.org/en-US/firefox/releases/) | 132 | 98 and earlier |
| Safari (Web) | JavaScript | 15.6 and newer | 15.6 | 15.5 and earlier |
| Edge (Web) | JavaScript, WebAssembly | Latest 2 [link to Edge release notes](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel) | 119, 125 | 95 and earlier |

**Q:计算结果不准确**

这是因为计算函数不同而导致，你可以导入新计算函数或是更新计算函数，当然如何你知道修改函数，也可以手动编辑本地配置文件来解决结果差

需要可以查看[这里](./calc)
