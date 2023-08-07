import { useState } from 'react';
import { useLocation } from 'umi';
import KeepAlive from 'react-activation';
import yayJpg from '../assets/yay.jpg';

function HomePage() {
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    return (
        <div>
            <h2>APP2-HOME</h2>
            <div>{ now }</div>
            <p>
                <img src={ yayJpg } width="388"/>
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}

export default HomePage

