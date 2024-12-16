import React from "react";

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DownloadTableWidget from "@site/src/components/DownloadTableWidget";

export default function Home(): JSX.Element {
    const u = useDocusaurusContext();

    return (
        <Layout>
            <main className="home-page-background">
                <div className="container pt-lg-5 pb-lg-5 pl-0 pr-0 h-sm">
                    <div className="row d-flex gx-5 justify-content-between">
                        <div className="col-lg-0 col-sm-7 d-sm-none d-lg-block">
                            <div className="mb-5" style={{marginTop: '50px'}}>
                                <h1>人间地狱 · 火炮<br/><span className="badge text-bg-secondary border">计算器</span>
                                </h1>
                                <p>为游戏内基地火炮提供距离换算角度工具，可动态导入计算函数以及地图相关配置，支持多种输入键盘选择。</p>
                                <p>现在它支持网页、安卓、苹果</p>

                                <div className="border shadow btn-group mt-3" role="group" aria-label="Basic example">
                                    <Link type="button" className="btn btn-light" to="/docs">
                                        查阅文档
                                    </Link>

                                    <Link type="button" className="btn btn-dark"
                                          to="https://hll-gun-calculato-app-for-web.vercel.app" target="_new">
                                        打开单独网页
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </Link>
                                </div>

                                <div className="mt-5">
                                    <DownloadTableWidget/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5">
                            <div className="rounded-lg-4">
                                <div className="modal-body h-100 rounded-3 border shadow">
                                    <iframe className="d-block rounded-3 h-100"
                                            style={{minHeight: '700px'}}
                                            src="https://hll-gun-calculato-app-for-web.vercel.app/" height="100%"
                                            width="100%"></iframe>
                                </div>
                                <p className="m-3 opacity-25 text-wrap fs-6">此处仅用作展示，使用可点击'单独页面'打开，如果需要安装本地，可以点击游览器地址栏的安装按钮</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
