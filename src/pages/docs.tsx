import KeepAlive, { useActivate, useUnactivate } from 'react-activation';
import { useState } from 'react';
import { useLocation } from '@@/exports';

const DocsPage = () => {
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    useActivate(() => {
        console.log('docs: didActivate');
    });

    useUnactivate(() => {
        console.log('docs: willUnactivate');
    });
    return (
        <div>
            <div>{ now }</div>
            <p>This is umi docs.</p>
        </div>
    );
};

export default () => {
    const location = useLocation();
    return (
        <KeepAlive name={location.pathname} saveScrollPosition="screen">
            <DocsPage />
        </KeepAlive>
    )
};
