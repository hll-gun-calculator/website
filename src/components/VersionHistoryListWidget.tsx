import React from 'react';

class versionsData {
    list: versionsDataItem[] = [];
}

class versionsDataItem {
    content?: string;
    system?: versionsDataItemSystem[]
}

class versionsDataItemSystem {
    version: string;
    buildNumber: string;
}

export default function VersionListWidget() {
    let versions: versionsData = {list: [{system: []}]};

    getVersions();

    function getVersions() {
        versions = require("/config/versions.json");
    }

    return (versions.list.map((i) => (
        <>
            <h2>{i["version"]}</h2>
            <table>
                <thead>
                <tr>
                    <th>平台</th>
                    <th>版本</th>
                    <th>构建版本</th>
                </tr>
                </thead>
                <tbody>{
                    Object.entries(i.system).map((systemItem) => (
                        <tr>
                            <td>{systemItem[0] || 'N/A'}</td>
                            <td>{systemItem[1].version || 'N/A'}</td>
                            <td>{systemItem[1].buildNumber || 'N/A'}</td>
                        </tr>
                    ))
                }</tbody>
            </table>
            <div dangerouslySetInnerHTML={{__html: i.content}}></div>
        </>
    )));
}
