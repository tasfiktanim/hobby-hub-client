import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FIndUs';

const RightSide = () => {
    return (
        <div>
           <SocialLogin></SocialLogin>
           <div className='mt-10'>
           <FindUs></FindUs>
           </div>
        </div>
    );
};

export default RightSide;