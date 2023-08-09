import { Link, Outlet, history } from 'umi';
import { useModel } from '@umijs/max';
import { Spin, Tag } from 'antd';
import WujieReact from 'wujie-react';
import styles from './index.less';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from '@umijs/max';
import KeepAlive, { useAliveController } from 'react-activation';

const { bus, preloadApp, setupApp } = WujieReact;

export default function Layout() {
    const [customTabs, setCustomTabs] = useState<any>([])
    const { drop, dropScope, clear, getCachingNodes } = useAliveController();
    const cachingNodes = getCachingNodes();
    console.log('cachingNodes...', cachingNodes);

    const params: any = useParams();
    const { initialState, loading } = useModel('@@initialState');
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
        if (customTabs.findIndex((each:any) => item.id === each.id) < 0) {
            customTabs.push(item)
            setCustomTabs(customTabs)
        }
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
                            <li
                                key={ item.id }
                                style={ { color: '#F00', cursor: 'pointer', textDecoration: 'underline' } }
                                onClick={ () => {
                                    handleLink(item)
                                } }
                            >
                                { item.name }
                            </li>
                        )) }
                    </ul>
                    <div className={styles.right}>
                        <div>
                            {customTabs.map((item:any) => {
                                return (
                                    <Tag
                                        key={ item.name }
                                        closable={false}
                                        onClick={() => {
                                            dropScope(item.name)
                                            const idx = customTabs.findIndex((each:any) => item.id === each.id)
                                            customTabs.splice(idx, 1)
                                            setCustomTabs(customTabs)
                                        }}
                                    >
                                        { item.name }
                                    </Tag>
                                );
                            })}
                        </div>
                        <div>
                            {/*<Outlet/>*/}
                            {location.pathname.startsWith('/subapps/') ? (
                                <Outlet/>
                            ) : (
                                <KeepAlive name={location.pathname} cacheKey={location.pathname} saveScrollPosition="screen">
                                    <Outlet/>
                                </KeepAlive>
                            )}
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}

const withKeepAlive = (location:any, children:any) => {
    return () => (
        <KeepAlive name={location.pathname} saveScrollPosition={true}>
            {children}
        </KeepAlive>
    )
}
