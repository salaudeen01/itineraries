/* eslint-disable @next/next/no-img-element */
import { useFilter } from '@/app/util/hooks';
import Icon from '@/components/icon';
import { dataProps, formatCurrency } from '@/type';
import React, { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { PiBedFill, PiSwimmingPoolBold, PiWineBold } from 'react-icons/pi';
import FilterForm from './firlterForm';

interface FormFilter {
  arrival_date: string;
  departure_date: string;
  dest_id: string
}

const  Hotels = () => {
  
  const [enabled, setEnabled] = useState(false);
  const [form, setForm] = useState<FormFilter>({
    arrival_date: '',
    dest_id: '-2167534',
    departure_date: '',
  });

  const { data, isFetching } = useFilter(form, enabled)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnabled(true); 

  };

  console.log( data?.data?.hotels, isFetching)

  return (
    <div>
      <div className='bg-[#344054] rounded-sm md:p-6 p-4'>
        <div className='flex flex-wrap justify-between'>
          <h2 className="text-lg font-semibold text-white flex gap-4 items-center">
            <Icon name='warehouse' size='24' />
            <span>Hotels</span>
          </h2>
          <button className='md:w-38 w-34 text-[#0D6EFD] rounded-sm font-semibold text-sm p-3 bg-white'>
            Add Hotels
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
        {data?.data?.hotels?.length === 0 ?
        data?.data?.hotels?.map((e:dataProps)=>(
          <div key={e?.hotel_id} className='bg-white rounded-t-md py-6 mt-5 flex flex-wrap xl:flex-nowrap items-center'>
            <div className='xl:pl-6 px-3'>
              <img src={'/images/pix.png'} alt='picture' className='w-58 object-cover' />
            </div>
            <div className='w-full'>
              <div className='px-3 flex flex-wrap md:flex-nowrap justify-between'>
                <div className='w-full'>
                  <h2 className='text-xl font-semibold'>{e?.property?.name}</h2>
                  <p className='text-base font-medium text-[#1D2433]'>{e?.accessibilityLabel}</p>
                  <div className='flex flex-wrap gap-3 py-2'>
                    <span className='flex gap-1 items-center text-[#0D6EFD] text-base font-medium'>
                      <GrLocation color='#0D6EFD' size={18} />
                      Show in map
                    </span>
                    <span className='flex gap-1 items-center text-[#676E7E] text-base font-medium'>
                      <FaStar color='#F4B93E' size={18} />
                      {e?.property?.reviewScore} ({e?.property?.reviewCount})
                    </span>
                    <span className='flex gap-1 items-center text-[#676E7E] text-base font-medium'>
                      <PiBedFill size={18} />
                      King size room
                    </span>
                  </div>
                </div>
                <div className='md:text-right w-full'>
                  <h2 className='text-2xl font-semibold text-[#1D2433]'>{formatCurrency(e?.property?.priceBreakdown?.grossPrice?.value)}</h2>
                  <p className='text-base font-medium text-[#1D2433]'>Total Price: {formatCurrency(e?.property?.priceBreakdown?.grossPrice?.value)}</p>
                  <p className='text-base font-medium text-[#1D2433]'>1 room x 10 nights incl. taxes</p>
                </div>
              </div>
              <div className='flex flex-wrap justify-between items-center py-2 px-3 border border-[#E4E7EC]'>
                <p className='flex gap-2 items-center text-lg font-medium text-[#647995]'>
                  Facilities: 
                  <span className='flex gap-1 items-center'>
                    <PiSwimmingPoolBold />
                    Pool
                  </span>
                  <span className='flex gap-1 items-center'>
                    <PiWineBold />
                    Bar
                  </span>
                </p>
                <p className='flex flex-wrap gap-2 items-center text-lg font-medium text-[#647995]'>
                  <span className='flex gap-1 items-center'>
                    <CiCalendar size={20} color='#475367' />
                    Check In: {e?.property?.checkinDate}
                  </span>
                  <span className='flex gap-1 items-center'>
                    <CiCalendar size={20} color='#475367' />
                    Check Out: {e?.property?.checkoutDate}
                  </span>
                </p>
              </div>
              <div className='bg-white px-2 mt-0.5 flex flex-wrap justify-between'>
                <div className='flex gap-6'>
                  <a href='' className='text-[#0D6EFD] text-lg font-medium'>Hotel details</a>
                  <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
                </div>
                <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
              </div>
            </div>
          </div>
        )):

        <div className='bg-white rounded-t-md py-6 mt-5 flex justify-center items-center'>
          <div>
            <img src={`/images/hotel.png`} alt='empty' className='mx-auto' />
            <p className='font-medium text-base text-center py-2'>No Resquest yet</p>
            <button className='md:w-38 w-34 text-[#fff] rounded-sm font-semibold text-sm p-3 bg-[#0D6EFD]'>
              Add Hotels
            </button>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Hotels