import React from 'react';
import Link from "@docusaurus/Link";

export default function MapRecommendedListWidget() {
    let list = [];

    getMapRecommended();

    function getMapRecommended() {
        let result = require("/config/map/recommendeds.json");

        list = result.child;
    }

    // @ts-ignore
    return (
        <table>
            <thead>
            <tr>
                <th>配置名称</th>
                <th>描述</th>
                <th>地址</th>
            </tr>
            </thead>
            <tbody>
            {list.map((i, index) => (
                <tr>
                    <td>{i.name}</td>
                    <td>
                        <ul>
                            {Object.entries(i.description ?? []).map(([j_key, j_value], j_index) => (
                                <li>
                                    {j_key ?? 'N/A'}:{j_value as any ?? 'N/A'}<br/>
                                </li>
                            ))}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {(i.updataFunction ?? []).map((d) => (
                                <Link className="btn btn-sm btn-link" to={d.path}>{d.name ?? 'N/A'}</Link>
                            ))}
                        </ul>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
