import WujieReact from 'wujie-react';
import { history, useParams, useLocation } from 'umi';
import { useEffect, useState } from 'react';
import { useModel } from '@umijs/max';
import KeepAlive, { useActivate, useUnactivate } from 'react-activation';
 function SubAppsPage() {
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    useActivate(() => {
        console.log('subapps: didActivate');
    });

    useUnactivate(() => {
        console.log('subapps: willUnactivate');
    });
    const params: any = useParams();
    const { initialState } = useModel('@@initialState');
    const menu = initialState?.menuMap[params.id];
    const props = {};
    const fullUrl = `${ menu.subAppHost }${ menu.url }`;
    console.log('fullUrl...', fullUrl);
    return (
        <>
            <div>{ now }</div>
            <WujieReact
                width="100%"
                height="100%"
                name={ `${ menu.id }` }
                url={ fullUrl }
                sync={ false }
                alive={ true }
                props={ props }
                beforeLoad={ (e) => console.log('beforeLoad...', e) }
                beforeMount={ (e) => console.log('beforeMount...', e) }
                afterMount={ (e) => console.log('afterMount...', e) }
                beforeUnmount={ (e) => console.log('beforeUnmount...', e) }
                afterUnmount={ (e) => console.log('afterUnmount...', e) }
            />
        </>
    );
}

export default () => {
    const location = useLocation();
    return (
        <KeepAlive name={location.pathname} saveScrollPosition="screen">
            <SubAppsPage />
        </KeepAlive>
    )
};
