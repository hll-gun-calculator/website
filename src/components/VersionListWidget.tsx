import React from 'react';

export default function VersionListWidget({children, color}) {
    let list = [];

    getVersions();

    function getVersions() {
        let result = require("/config/newVersion.json");

        list = Object.entries(result);
    }

    return (
        <table style={{width: '100%'}}>
            <thead>
            <tr>
                <th>平台</th>
                <th>版本</th>
                <th>构建版本</th>
            </tr>
            </thead>
            <tbody>{
                list.map((i) => (
                    <tr>
                        <td>{i[0] || 'N/A'}</td>
                        <td>{i[1].version || 'N/A'}</td>
                        <td>{i[1].buildNumber || 'N/A'}</td>
                    </tr>
                ))
            }</tbody>
        </table>
    );
}
