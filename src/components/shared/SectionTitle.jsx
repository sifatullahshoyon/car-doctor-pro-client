import React from 'react';

const SectionTitle = ({heading, title, description}) => {
    return (
        <div className='text-center'>
            <h6 className='text-xl text-primary-color font-bold'>{heading}</h6>
            <h1 className='text-balance sm:text-2xl lg:text-[45px] text-secondary-color font-bold my-5'>{title}</h1>
            <p className='text-balance text-base text-accent-color font-normal leading-[30px] mb-12 capitalize  text-center mx-auto' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
};

export default SectionTitle;