import { useEffect } from 'react';
import { Link, Outlet, history, useLocation } from 'umi';
import styles from './index.less';
const appCode = 'sub-app2'

export default function Layout() {
    return (
        <div className={ styles.navs }>
            <ul>
                <li>
                    <Link to="/home">[APP2]Home</Link>
                </li>
                <li>
                    <Link to="/docs">[APP2]Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">[APP2]Github</a>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}
