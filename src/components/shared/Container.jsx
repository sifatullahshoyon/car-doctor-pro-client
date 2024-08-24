import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1160px] px-10 mx-auto'>
            {children}
        </div>
    );
};

export default Container;