import WujieReact from 'wujie-react';
import { history, useParams, useLocation } from 'umi';
import { useEffect, useState } from 'react';
import qs from 'query-string'
import { useModel } from '@umijs/max';
import KeepAlive, { useActivate, useUnactivate } from 'react-activation';

function withWujie(subAppCode: string, subAppHost: string, url: string) {

    WujieReact.bus.$on(`${subAppCode}:rendered`, () => {
        const query = qs.parse(window.location.search.substring(1))
        const preUrl = query[subAppCode]
        console.log(preUrl);
        WujieReact.bus.$emit(`${ subAppCode }:router-change`,(preUrl && preUrl !== '/') ? preUrl : url);
    })

    return (props: any) => (
        <WujieReact
            width="100%"
            height="100%"
            name={ `${ subAppCode }` }
            url={ subAppHost }
            sync={ true }
            alive={ true }
            props={ {} }
            beforeLoad={ (e) => console.log('beforeLoad...', e) }
            beforeMount={ (e) => console.log('beforeMount...', e) }
            afterMount={ (e) => console.log('afterMount...', e) }
            beforeUnmount={ (e) => console.log('beforeUnmount...', e) }
            afterUnmount={ (e) => console.log('afterUnmount...', e) }
        />
    )
}


 function SubAppsPage() {
    const location = useLocation();
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    const params: any = useParams();
    const { initialState } = useModel('@@initialState');
    const menu = initialState?.menuMap[params.id];
    const props = {};
    const fullUrl = `${ menu.subAppHost }${ menu.url }`;
    console.log('fullUrl...', fullUrl);
    // if (menu) {
    //     WujieReact.bus.$emit(`${ menu.subAppCode }:router-change`, menu.url);
    // }
     const WJ = withWujie(menu.subAppCode, menu.subAppHost, menu.url);
    return (
        <>
            <div>1111{ now }</div>
            <WJ />
            {/*<iframe src={fullUrl} style={{ width: '100vw', height: '80vh', backgroundColor: 'red' }} />*/}
        </>
    );
}

export default SubAppsPage
