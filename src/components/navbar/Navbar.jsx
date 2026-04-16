import React from "react";

import { BiHomeAlt2 } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <nav className=' h-15 mx-auto  border border-gray-300'>
      <div className='flex justify-between w-11/12 mx-auto items-center'>
        <div>
          <h1 className='font-bold text-2xl mt-3'>
            Keen<span className=' text-[#244D3F]'>Keeper</span>
          </h1>
        </div>
        <div className='flex gap-x-3 mt-2'>
          <div className='btn flex items-center bg-[#244D3F] '>
            <BiHomeAlt2 style={{ color: "white" }} />
            <h1 className='text-white'>Home</h1>
          </div>
          <div className=' flex items-center '>
            <LuClock3 style={{ color: "gray" }} />

            <h1 className='text-[#64744B] ml-1'>Timeline</h1>
          </div>
          <div className=' flex items-center '>
            <TfiStatsUp style={{ color: "gray" }} />

            <h1 className='text-[#64744B] ml-1'>Stats</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
