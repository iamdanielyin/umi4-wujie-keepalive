import { useEffect, useState } from 'react';
import { useLocation } from 'umi';
import yayJpg from '../assets/yay.jpg';
import KeepAlive, { useActivate, useUnactivate } from 'react-activation';

function HomePage() {
    const [now] = useState(
        new Date(+new Date() + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, '')
    );
    useActivate(() => {
        console.log('home: didActivate');
    });

    useUnactivate(() => {
        console.log('home: willUnactivate');
    });
    return (
        <div>
            <div>{ now }</div>
            <h2>Yay! Welcome to umi!</h2>
            <p>
                <img src={ yayJpg } width="388"/>
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}


export default () => {
    const location = useLocation();
    return (
        <KeepAlive name={location.pathname} saveScrollPosition="screen">
            <HomePage />
        </KeepAlive>
    )
};
