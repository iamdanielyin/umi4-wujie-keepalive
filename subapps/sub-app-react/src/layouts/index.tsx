import { useEffect } from 'react';
import { Link, Outlet, history, useLocation } from 'umi';
import styles from './index.less';

export default function Layout() {
    useEffect(() => {
        // @ts-ignore
        window.$wujie?.bus.$on('sub-app-react:router-change', (url) => {
            console.log('【subapp】子应用收到路由变更...', `sub-app-react:router-change`, url);
            history.replace(url);
        });
    }, []);

    return (
        <div className={ styles.navs }>
            <ul>
                <li>
                    <Link to="/home">[SUB]Home</Link>
                </li>
                <li>
                    <Link to="/docs">[SUB]Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">[SUB]Github</a>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}
