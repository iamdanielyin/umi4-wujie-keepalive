import WujieReact from 'wujie-react';
import { request } from '@umijs/max';

export async function getInitialState() {
    const menus = await request('/api/menus')
    const menuMap: any = {}
    for (const item of menus) {
        menuMap[item.id] = item
        // 预加载所有子应用
        if (item?.subAppCode) {
            WujieReact.preloadApp({
                name: item.subAppCode,
                url: item.subAppHost,
                exec: true
            } as any)
        }
    }
    return { menus, menuMap };
}
