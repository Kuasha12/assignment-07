import React from "react";
import logoImg from "../../assets/assets/logo-xl.png";
import instagramImg from "../../assets/assets/instagram.png";
import facebookImg from "../../assets/assets/facebook.png";
import twitterImg from "../../assets/assets/twitter.png";

const Footer = () => {
  return (
    <div className='bg-[#244D3F] '>
      <div className='h-[350px] w-[1600px] flex justify-center items-center'>
        <div className='  border-be border-gray-100 w-[1000px] '>
          <div className='flex justify-center items-center '>
            <img src={logoImg} alt='' />
          </div>
          <p className='text-white flex justify-center items-center pt-3'>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h1 className='text-white font-bold flex justify-center items-center pt-4'>
            Social Links
          </h1>
          <div className='flex gap-x-4 justify-center items-center pt-7 mb-8'>
            <img src={instagramImg} alt='' />
            <img src={facebookImg} alt='' />
            <img src={twitterImg} alt='' />
          </div>
        </div>
      </div>
      <div className='flex justify-around items-center mx-auto'>
        <div>
          <h1 className='text-white'>
            © 2026 KeenKeeper. All rights reserved.
          </h1>
        </div>
        <div>
          <p className='text-white'>Privacy Policy Terms of Service Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
