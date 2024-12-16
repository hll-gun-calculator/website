import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from "react";

export default function Home(): JSX.Element {
    const u = useDocusaurusContext();

    return (
        <Layout>
            <main className="home-page-background">
                <div className="container pt-lg-5 pb-lg-5 pl-0 pr-0 h-sm">
                    <div className="row d-flex gx-5 justify-content-between">
                        <div className="col-lg-0 col-sm-7 d-sm-none d-lg-block">
                            <div className="mb-5" style={{marginTop: '250px'}}>
                                <h1>人间地狱火炮计算器</h1>
                                <p>提供距离换算角度工具，现在它支持网页、移动设备(android/ios)</p>

                                <div className="btn-group mt-3" role="group" aria-label="Basic example">
                                    <Link type="button" className="btn btn-dark" to="/docs">
                                        查阅文档
                                    </Link>

                                    <Link type="button" className="btn btn-light"
                                          to="https://hll-gun-calculato-app-for-web.vercel.app" target="_new">
                                        单独网页
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </Link>
                                </div>

                                <table className="mt-5">
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
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5">
                            <div className="rounded-lg-4">
                                <div className="modal-body h-100 rounded-3 shadow bg-dark">
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
