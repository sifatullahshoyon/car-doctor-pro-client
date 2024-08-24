import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div className='w-[170px] h-14 rounded bg-primary-color text-white text-lg font-semibold flex items-center justify-center cursor-pointer transition'>
           {children} 
        </div>
    );
};

export default PrimaryBtn;