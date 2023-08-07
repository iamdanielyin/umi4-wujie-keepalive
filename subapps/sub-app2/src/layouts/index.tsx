import { useEffect } from 'react';
import { Link, Outlet, history, useLocation } from 'umi';
import styles from './index.less';
import KeepAlive from 'react-activation';

export default function Layout() {
    const location = useLocation();
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
            <KeepAlive name={location.pathname} saveScrollPosition="screen">
                <Outlet/>
            </KeepAlive>
        </div>
    );
}
