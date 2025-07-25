/* eslint-disable @next/next/no-img-element */
import Icon from '@/components/icon';
import { formatCurrency } from '@/type';
import React, { useState } from 'react';
import { BiTime } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import {PiCaretCircleDown, PiCaretCircleUp } from 'react-icons/pi';
import FilterForm from './firlterForm';
import { useFilter } from '@/app/util/hooks';

interface FormFilter {
  arrival_date: string;
  departure_date: string;
  dest_id: string
}

const  Attraction = () => {
  
  const [enabled, setEnabled] = useState(false);
  const [form, setForm] = useState<FormFilter>({
    arrival_date: '',
    dest_id: '-2092174',
    departure_date: '',
  });

  const { data, isFetching } = useFilter(form, enabled)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnabled(true); 

  };

  console.log( data, isFetching)
  return (
    <div>
        <div className='bg-[#0054E4] rounded-sm md:p-6 p-4'>
        {/* {data?.map((e)=>(
        ))} */}
          <div>
            <div className='flex flex-wrap justify-between'>
              <h2 className="text-lg font-semibold text-white flex md:gap-4 gap-2 items-center">
                <Icon name='road' className='font-extrabold' size='24' />
                <span>Activities</span>
              </h2>
              <button className='md:w-38 w-32 text-[#0D6EFD] rounded-sm font-semibold text-sm p-3 bg-white'>
                Add Activities
              </button>
            </div>
            <div>
              <FilterForm 
                setForm={setForm} 
                form={form} 
                handleSubmit={handleSubmit} 
                className='border-white text-white' 
                label1='Check in'
                label2='Check out'
              />
            </div>
            <div className='bg-white rounded-t-md py-6 mt-5 flex flex-wrap xl:flex-nowrap items-center'>
              <div className='xl:pl-6 px-3'>
                <img src={'/images/pix.png'} alt='picture' className='w-58 object-cover' />
              </div>
              <div className='w-full'>
                <div className='px-3 flex flex-wrap md:flex-nowrap justify-between'>
                  <div className='w-full'>
                    <h2 className='text-xl font-semibold'>The Museum of Modern Art</h2>
                    <p className='text-base font-medium text-[#1D2433]'>Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                    <div className='flex flex-wrap gap-3 py-2'>
                      <span className='flex gap-1 items-center text-[#0D6EFD] text-base font-medium'>
                        <GrLocation color='#0D6EFD' size={18} />
                        Directions
                      </span>
                      <span className='flex gap-1 items-center text-[#676E7E] text-base font-medium'>
                        <FaStar color='#F4B93E' size={18} />
                        8.5 (436)
                      </span>
                      <span className='flex gap-1 items-center text-[#676E7E] text-base font-medium'>
                        <BiTime size={18} />
                        1 Hour 
                      </span>
                    </div>
                  </div>
                  <div className='md:text-right w-full'>
                    <h2 className='text-2xl font-semibold text-[#1D2433]'>{formatCurrency(123450)}</h2>
                    <p className='text-base font-medium text-[#1D2433]'>10:30 AM on Mar 19</p>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between items-center py-2 px-3 border border-[#E4E7EC]'>
                  <p className='flex flex-wrap gap-2 items-center text-lg font-medium text-[#647995]'>
                  What&apos;s Included: Admission to the Empire State Building
                    <a className='text-[#0D6EFD]' href='#'>
                      See more
                    </a>
                  </p>
                  <p className='flex gap-2 items-center'>
                    <span className='bg-[#0A369D] rounded-sm p-2 text-xs text-white font-medium'>
                      Day 1 - (2)
                    </span>
                    <span className='space-y-1'>
                      <PiCaretCircleUp color='#98A2B3' size={17} />
                      <PiCaretCircleDown color='#98A2B3' size={17} />
                    </span>
                  </p>
                </div>
                <div className='bg-white px-2 mt-0.5 flex flex-wrap justify-between'>
                  <div className='flex gap-6'>
                    <a href='' className='text-[#0D6EFD] text-lg font-medium'>Activity details</a>
                    <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
                  </div>
                  <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Attraction