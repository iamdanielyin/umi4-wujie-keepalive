import { Link, Outlet, history } from 'umi';
import { useModel } from '@umijs/max';
import { Spin } from 'antd';
import WujieReact from 'wujie-react';
import styles from './index.less';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from '@umijs/max';
import { AliveScope, useAliveController } from 'react-activation';

const { bus, preloadApp, setupApp } = WujieReact;

export default function Layout() {
    const { drop, dropScope, clear, getCachingNodes } = useAliveController();

    const params: any = useParams();
    const { initialState, loading } = useModel('@@initialState');
    // console.log(initialState);
    // bus.$on("sub-route-change", (name:string, path:string) => {
    //     console.log(name, path)
    //     const mainName = `${name}-sub`;
    //     const mainPath = `/${name}-sub${path}`;
    //     const currentPath = window.location.hash.replace("#", "")
    //     if(currentPath.includes(mainName) && currentPath !== mainPath) {
    //         // navigation(mainPath);
    //     }
    // });
    const menu = initialState?.menuMap[params.id];
    const location = useLocation();
    useEffect(() => {
        if (menu?.subAppCode) {
            // preloadApp({
            //     name: menu.subAppCode,
            //     url: menu.subAppHost,
            //     exec: true
            // } as any)
            console.log('【main】通知子应用路由变更...', `${ menu.subAppCode }:router-change`, menu.url);
            WujieReact.bus.$emit(`${ menu.subAppCode }:router-change`, menu.url);
        }
    }, [location]);

    const handleLink = (item: any) => {
        if (item.subAppHost) {
            history.push(`/subapps/${ item.id }`);
        } else {
            history.push(item.url);
        }
    };
    return (
        <>
            { loading ? <Spin/> : (
                <div className={ styles.container }>
                    <ul className={styles.left}>
                        { initialState?.menus.map((item: any) => (
                            <li key={ item.id } onClick={ () => handleLink(item) } style={ { color: '#F00', cursor: 'pointer', textDecoration: 'underline' } }>
                                { item.name }
                            </li>
                        )) }
                    </ul>
                    <div className={styles.right}>
                        <AliveScope>
                            <Outlet/>
                        </AliveScope>
                    </div>
                </div>
            ) }
        </>
    );
}
