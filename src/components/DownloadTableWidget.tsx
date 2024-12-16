import React from 'react';

/// md
// | 平台      | 描述       | 正式                                                                                      | 测试                                                                               |
// |---------|----------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
// | Android | android  | [访问商店](https://play.google.com/store/apps/details?id=com.cabbagelol.hll_gun_calculator) | [参与测试资格](https://play.google.com/apps/testing/com.cabbagelol.hll_gun_calculator) |
// | Ios     | ios、ipad | [访问商店](https://apps.apple.com/app/hll-gun-calculator/id6479570580)                      | [参与测试资格](https://testflight.apple.com/join/QDNcmCSa)                             |
// | Web     | web      | [访问](https://hll-gun-calc.app-web.cabbagelol.net)                                       | [访问](https://hll-gun-calculato-app-for-7r8gfh9j7.vercel.app)                     |

export default function DownloadTableWidget() {
    return (
        <table>
            <thead>
            <tr>
                <th>平台</th>
                <th>描述</th>
                <th>正式</th>
                <th>测试</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Android</td>
                <td>android</td>
                <td><a
                    href="https://play.google.com/store/apps/details?id=com.cabbagelol.hll_gun_calculator"
                    target="_blank" rel="noopener noreferrer">访问商店</a></td>
                <td><a
                    href="https://play.google.com/apps/testing/com.cabbagelol.hll_gun_calculator"
                    target="_blank" rel="noopener noreferrer">参与测试资格</a></td>
            </tr>
            <tr>
                <td>Ios</td>
                <td>ios、ipad</td>
                <td><a href="https://apps.apple.com/app/hll-gun-calculator/id6479570580"
                       target="_blank" rel="noopener noreferrer">访问商店</a></td>
                <td><a href="https://testflight.apple.com/join/QDNcmCSa" target="_blank"
                       rel="noopener noreferrer">参与测试资格</a></td>
            </tr>
            <tr>
                <td>Web</td>
                <td>web</td>
                <td><a href="https://hll-gun-calc.app-web.cabbagelol.net" target="_blank"
                       rel="noopener noreferrer">访问</a></td>
                <td><a href="https://hll-gun-calculato-app-for-7r8gfh9j7.vercel.app"
                       target="_blank" rel="noopener noreferrer">访问</a></td>
            </tr>
            </tbody>
        </table>
    );
}
