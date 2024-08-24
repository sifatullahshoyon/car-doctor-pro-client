import React from 'react';

const BtnOutline = ({children}) => {
    return (
        <div className='w-[170px] h-14 rounded bg-transparent border border-primary-color text-primary-color text-lg font-semibold flex items-center justify-center cursor-pointer transition'>
           {children} 
        </div>
    );
};

export default BtnOutline;