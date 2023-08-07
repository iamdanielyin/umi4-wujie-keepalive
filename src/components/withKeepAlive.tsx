import React from 'react';
import KeepAlive from 'react-activation';
import { useLocation } from 'umi';

export default (Component:any) => {
    return (props:any) => {
        const location = useLocation()
        return (
            <KeepAlive name={location.pathname} saveScrollPosition={true}>
                <Component {...props} />
            </KeepAlive>
        )
    }
}
