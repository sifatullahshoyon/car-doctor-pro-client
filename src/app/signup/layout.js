import AuthenticationNavbar from '@/src/components/shared/AuthenticationNavbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <AuthenticationNavbar />
            <div className='min-h-screen'>
                {children}
            </div>
        </div>
    );
};

export default layout;