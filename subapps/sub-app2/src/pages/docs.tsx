import { useState } from 'react';
import { useLocation } from 'umi';
import KeepAlive from 'react-activation';

const DocsPage = () => {
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    return (
        <div>
            <h2>APP2-DOCS</h2>
            <div>{ now }</div>
            <p>This is umi docs.</p>
        </div>
    );
};

export default DocsPage

