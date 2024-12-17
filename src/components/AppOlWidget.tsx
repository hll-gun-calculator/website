import React, {createContext, useState} from 'react';

export default function AppOlVersionWidget() {
    let [data, setData] = useState({});

    getVersion();

    async function getVersion() {
        let time = Date.now();
        let result = await fetch(`https://hll-gun-calc.app-web.cabbagelol.net/version.json?cachebuster=${time}`).then(r => r.json());
        return setData(result)
    }

    return (
        <span>{data['version'] || '0.0.0'}_{data['build_number'] || '0'} {data['package_name'] || ''}</span>
    );
}
