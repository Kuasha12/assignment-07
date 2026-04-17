import React from "react";
import picImg from "../../assets/assets/pic-1.jpg";

const Card = () => {
  return (
    <div className='bg-gray-100 pt-10 '>
      <div className=' '>
        <div className='flex col-rowspan-4  mx-auto justify-center items-center gap-x-5 border-be border-gray-300 w-[1000px] h-50  '>
          <div className='h-[137px] w-[250px]  bg-white rounded-md'>
            <h1 className='text-[#244D3F] font-bold text-3xl flex justify-center items-center pt-7'>
              10
            </h1>
            <p className='text-[#64748B] text-1xl flex justify-center items-center'>
              Total Friends
            </p>
          </div>
          <div className='h-[137px] w-[250px]  bg-white rounded-md'>
            <h1 className='text-[#244D3F] font-bold text-3xl flex justify-center items-center pt-7'>
              3
            </h1>
            <p className='text-[#64748B] text-1xl flex justify-center items-center'>
              On Track
            </p>
          </div>
          <div className='h-[137px] w-[250px]  bg-white rounded-md'>
            <h1 className='text-[#244D3F] font-bold text-3xl flex justify-center items-center pt-7'>
              6
            </h1>
            <p className='text-[#64748B] text-1xl flex justify-center items-center'>
              Need Attention
            </p>
          </div>
          <div className='h-[137px] w-[250px]  bg-white rounded-md'>
            <h1 className='text-[#244D3F] font-bold text-3xl flex justify-center items-center pt-7'>
              12
            </h1>
            <p className='text-[#64748B] text-1xl flex justify-center items-center'>
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
      <div className='font-bold text-2xl w-10/12 mx-auto pt-10'>
        <h1 className='pl-35'>Your Friends</h1>
      </div>
      <div>
        <div>
          <div className='h-[254px] w-[200px]  border border-red-500'>
            <img src='{picImg }' alt='' />
            <h1>David Kim</h1>
            <p>62d ago</p>
            <p>work</p>
            <p>work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
