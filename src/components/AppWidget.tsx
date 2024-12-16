import React, {createContext, useState} from 'react';

const AppContext = createContext<{
    isExpanded: boolean,
    setIsExpanded: (expanded: boolean) => void;
}>({
    isExpanded: true,
    setIsExpanded: () => {
        console.log("AppContext.isExpanded");
    },
})

export default function AppWidget() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <AppContext.Provider value={{ isExpanded, setIsExpanded}}>
            <div className="rounded-lg-4">
                <div className="modal-body h-100 rounded-3 border shadow">
                    <iframe className="d-block rounded-3 h-100"
                            style={{minHeight: '700px'}}
                            src="https://hll-gun-calc.app-web.cabbagelol.net" height="100%"
                            width="100%"></iframe>
                </div>
                <p className="m-3 opacity-25 text-wrap fs-6">此处仅用作展示，使用可点击'单独页面'打开，如果需要安装本地，可以点击游览器地址栏的安装按钮</p>
            </div>
        </AppContext.Provider>
    );
}
