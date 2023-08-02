import { request } from '@umijs/max';

export async function getInitialState() {
    const menus = await request('/api/menus')
    const menuMap: any = {}
    for (const item of menus) {
        menuMap[item.id] = item
    }
    return { menus, menuMap };
}
