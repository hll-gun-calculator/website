import React from "react";

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DownloadTableWidget from "@site/src/components/DownloadTableWidget";
import AppWidget from "@site/src/components/AppWidget";

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
                                          to="https://hll-gun-calc.app-web.cabbagelol.net" target="_new">
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
                           <AppWidget/>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
