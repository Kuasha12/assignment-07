import React from "react";
import { FaPlus } from "react-icons/fa6";

const Bannar = () => {
  return (
    <div className='bg-gray-100 full'>
      <div className='pt-15 '>
        <div className=''>
          <h1 className='text-5xl font-bold flex justify-center items-center'>
            Friends to keep close in your life
          </h1>
          <p className='text-[#64744B] flex justify-center items-center mt-4'>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the
          </p>
          <p className='text-[#64744B] flex justify-center items-center'>
            relationships that matter most.
          </p>
        </div>
      </div>
      <div className='  flex justify-center items-center mt-4 '>
        <button className='bg-[#244D3F] text-white px-5 py-2 rounded-md flex items-center '>
          <FaPlus style={{ color: "white" }} />

          <h1 className='flex justify-center items-center ml-1'>
            Add a Friend
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Bannar;
