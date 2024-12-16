import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from "react";

export default function About(): JSX.Element {
    return (
        <Layout>
            <main className="home-page-background">
                <div className="container pt-5 pb-5">
                    <div className="">
                        <div className="mb-5" style={{marginTop: '300px'}}>
                            <h1>关于</h1>

                            <p>这个应用程序遵循MIT开源协议，程序不隶属于人间地狱，Team17集团。</p>

                            <p>此程序包含其他社区提供的资源，包括计算函数、地图数据，具体请查看配置清单来源，遵循对应社区协议，我们也尊重成果如果存在侵权，请通过github仓库创建问题告知，感谢。</p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
