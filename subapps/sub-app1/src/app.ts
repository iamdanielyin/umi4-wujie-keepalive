import React from 'react';
import { history } from 'umi';
import { AliveScope } from 'react-activation';

const appCode = 'sub-app1'
console.log(`加载${appCode}完成`)
// @ts-ignore
window.$wujie?.bus.$on(`${appCode}:router-change`, (url) => {
    console.log(`【${appCode}】子应用收到路由变更...`, `${appCode}:router-change`, url);
    history.replace(url);
});
// @ts-ignore
window.$wujie?.bus.$on(`${appCode}:keepalive-change`, (id) => {
    // TODO 删除页签
});

export function render(oldRender: Function) {
    oldRender()
    console.log('history.location.pathname...', history.location.pathname)
    // @ts-ignore
    window.$wujie?.bus.$emit(`${appCode}:rendered`)
}

export function rootContainer(container: any) {
    return React.createElement(AliveScope, null, container);
}
