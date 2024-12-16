---
title: ⭐️ 地图合集社区列表
layout: default
parent: 地图合集
sidebar_position: 1
---

# 地图合集(第三方)

由社区提供地方合集配置

[//]: # (<div id=table class='table-wrapper'></div>)

[//]: # ()
[//]: # (<script>)

[//]: # (var http = new XMLHttpRequest&#40;&#41;;)

[//]: # (http.open&#40;'get', '/config/map/recommendeds.json', true&#41;;)

[//]: # (http.send&#40;&#41;;)

[//]: # (http.onreadystatechange = function &#40;&#41; {)

[//]: # (    if &#40;http.readyState == 4 && http.status == 200&#41; {)

[//]: # (        var jsonData = JSON.parse&#40;http.response&#41;;)

[//]: # (        var table = document.createElement&#40;'table'&#41;;)

[//]: # (        var thead = document.createElement&#40;'thead'&#41;;)

[//]: # (        var tbody = document.createElement&#40;'tbody'&#41;;)

[//]: # (        var headerRow = document.createElement&#40;'tr'&#41;;)

[//]: # (    )
[//]: # (        ['Name', 'Path'].forEach&#40;function&#40;i&#41; {)

[//]: # (            var th = document.createElement&#40;'th'&#41;;)

[//]: # (            th.textContent = i;)

[//]: # (            headerRow.appendChild&#40;th&#41;;)

[//]: # (        }&#41;;)

[//]: # (    )
[//]: # (        thead.appendChild&#40;headerRow&#41;;)

[//]: # (        table.appendChild&#40;thead&#41;;)

[//]: # (    )
[//]: # (        jsonData.child.forEach&#40;function&#40;item&#41; {)

[//]: # (            var row = document.createElement&#40;'tr'&#41;;)

[//]: # (            var tdName = document.createElement&#40;'td'&#41;,)

[//]: # (                tdPath = document.createElement&#40;'td'&#41;;)

[//]: # ()
[//]: # (                tdName.textContent = item["name"];)

[//]: # (                tdPath.innerHTML = item["updataFunction"].map&#40;&#40;pathItem&#41; => `<div><b>${pathItem.name}</b>:</div><a href='${pathItem.path}'>${pathItem.path}</a>`&#41;;)

[//]: # ()
[//]: # (            row.appendChild&#40;tdName&#41;;    )

[//]: # (            row.appendChild&#40;tdPath&#41;;)

[//]: # (            tbody.appendChild&#40;row&#41;;)

[//]: # (        }&#41;;)

[//]: # (    )
[//]: # (        table.appendChild&#40;tbody&#41;;)

[//]: # ()
[//]: # (        document.getElementById&#40;'table'&#41;.appendChild&#40;table&#41;;)

[//]: # (    })

[//]: # (})

[//]: # ()
[//]: # ()
[//]: # (</script>)

# 提供你的地图合集
前往**[此处](https://github.com/hell-gun-calculator/document/)**克隆项目,修改后提交新合并请求，确认正式无误，管理将合并主仓库。

需要注意几点:

- 在**[map/recommendeds.json](https://github.com/hell-gun-calculator/document/blob/main/config/map/recommendeds.json)**列表里添加你的来源信息 
- 在**[目录](https://github.com/hell-gun-calculator/document/blob/main/config/map/)**创建你的.json配置文件，具体信息参考**[演示文件](https://github.com/hell-gun-calculator/document/blob/main/config/map/example.json)**
