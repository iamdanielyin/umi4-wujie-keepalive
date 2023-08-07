import { useEffect } from 'react';
import { Link, Outlet, history, useLocation } from 'umi';
import styles from './index.less';
import KeepAlive, { useAliveController } from 'react-activation';

export default function Layout() {
    const location = useLocation();
    const { drop, dropScope, clear, getCachingNodes } = useAliveController();
    const cachingNodes = getCachingNodes();
    console.log('sub...cachingNodes...', cachingNodes);
    return (
        <div className={ styles.navs }>
            <ul>
                <li>
                    <Link to="/home">[APP1]Home</Link>
                </li>
                <li>
                    <Link to="/docs">[APP1]Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">[APP1]Github</a>
                </li>
            </ul>
            <KeepAlive name={location.pathname} cacheKey={location.pathname} saveScrollPosition="screen">
                <Outlet/>
            </KeepAlive>
        </div>
    );
}
