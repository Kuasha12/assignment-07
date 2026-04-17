import React from "react";
import picImg from "../../assets/assets/pic-1.jpg";
import piccherImg from "../../assets/assets/piccher-2.jpg";
import picbrouneImg from "../../assets/assets/picbroune-3.jpg";
import picpotImg from "../../assets/assets/picpot-4.jpg";
import piccuteImg from "../../assets/assets/piccute-5.jpg";
import pictopImg from "../../assets/assets/pictop-6.jpg";
import picedpImg from "../../assets/assets/piced-7.jpg";
import picset from "../../assets/assets/picset-8.jpg";
import photo from "../../assets/assets/photo-9.jpg";
import piclogo from "../../assets/assets/piclogo-10.jpg";
import picrun from "../../assets/assets/picrun-11.jpg";
import picfill from "../../assets/assets/picfill-12.jpg";

const Card = () => {
  return (
    <div className='bg-gray-100 pt-10  '>
      <div className=''>
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
      <div className='font-bold text-2xl w-10/12 mx-auto pt-7'>
        <h1 className='pl-30'>Your Friends</h1>
      </div>
      <div>
        <div className='flex col-rowspan-4  mx-auto justify-center items-center gap-x-5 pt-2'>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={picImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              David Kim
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EFAD44] rounded-full  '>work</p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={piccherImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Emma Wilson
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  family
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-[#244D3F] rounded-full  '>
                  family
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={picbrouneImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Lisa Nakamura
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-white rounded-full  '>
                  Overdue
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={picpotImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              James Wright
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center gap-x-2'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  hobby
                </p>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  travel
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-white rounded-full  '>
                  Overdue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex col-rowspan-4  mx-auto justify-center items-center gap-x-5 pt-4'>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={piccuteImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              David Kim
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-white rounded-full  '>
                  Overdue
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={pictopImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Emma Wilson
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  family
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#244D3F] text-white rounded-full  '>
                  On-Track
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={picedpImg}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Lisa Nakamura
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#244D3F] text-white rounded-full  '>
                  On-Track
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md'>
            <img
              src={picset}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              James Wright
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center gap-x-2'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  hobby
                </p>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  travel
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EFAD44] text-white rounded-full  '>
                  Almost Due
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex col-rowspan-4  mx-auto justify-center items-center gap-x-5 pt-4 '>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md mb-20'>
            <img
              src={photo}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              David Kim
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn  bg-[#EFAD44] text-white rounded-full  '>
                  Almost Due
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md mb-20'>
            <img
              src={piclogo}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Emma Wilson
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-300 rounded-full'>
                  family
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-white rounded-full  '>
                  Overdue
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md mb-20'>
            <img
              src={picrun}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              Lisa Nakamura
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  work
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#EF4444] text-white rounded-full  '>
                  Overdue
                </p>
              </div>
            </div>
          </div>
          <div className='h-[254px] w-[240px]  bg-white pt-4 rounded-md mb-20'>
            <img
              src={picfill}
              className='w-20 h-20 rounded-full object-cover mx-auto '
              alt=''
            />
            <h1 className='flex justify-center items-center font-bold text-1xl'>
              James Wright
            </h1>
            <p className='text-[#64748B] flex justify-center items-center'>
              62d ago
            </p>
            <div className='justify-center items-center'>
              <div className=' flex justify-center items-center gap-x-2'>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  hobby
                </p>
                <p className='   btn bg-green-100 text-[#244D3F] rounded-full'>
                  travel
                </p>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <p className=' btn bg-[#244D3F] text-white rounded-full  '>
                  On-Track
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
