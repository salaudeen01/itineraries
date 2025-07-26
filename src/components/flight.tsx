import React, { useState } from 'react'
import Icon from '@/components/icon';
import { formatCurrency } from '@/type';
import Image from 'next/image';
import { PiAirplaneInFlightBold, PiFilmSlate, PiForkKnife, PiUsb } from 'react-icons/pi';
import { useFilter } from '@/app/util/hooks';
import FilterForm from './firlterForm';


interface FormFilter {
  arrival_date: string;
  departure_date: string;
  dest_id: string
}

const  Flight = () => {

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
      <div className='bg-[#F0F2F5] rounded-sm lg:p-6 md:p-4 p-2'>
        <div className='flex flex-wrap justify-between'>
          <h2 className="text-lg font-semibold text-[#1D2433] flex gap-4 items-center">
            <PiAirplaneInFlightBold size={24} />
            <span>Flights</span>
          </h2>
          <button className='w-38 text-[#0D6EFD] font-semibold text-sm p-3 bg-white'>
            Add Flights
          </button>
        </div>
        <div>
          <FilterForm
            setForm={setForm} 
            form={form} 
            handleSubmit={handleSubmit} 
            className='border-black text-black' 
            label1='Check in'
            label2='Check out'
          />
        </div>
        <>
          <div className='bg-white rounded-md px-4 py-6 mt-5 md:flex justify-between flex-wrap items-center space-y-2'>
            <div className='flex order-1 gap-3 items-center w-[211px]'>
              <Image src={'/images/fly.png'} alt='icon' width={24} height={24} className='' />
              <div>
                <h2 className='text-xl font-semibold'>American Airlines</h2>
                <p className='flex gap-4 items-center'>
                  <span className='text-[#676E7E] text-base font-medium'>AA-829</span>
                  <span className='bg-[#0A369D] text-white rounded-sm text-xs font-medium p-2'>First Class</span>
                </p>
              </div>
            </div>
            <div className='xl:order-3 order-2'>
              <h2 className='text-2xl text-right font-semibold text-[#1D2433]'>{formatCurrency(123450)}</h2>
            </div>
            <div className='flex flex-wrap justify-between items-center gap-5 md:w-[500px] xl:order-2 order-3'>
              <div className='w-[78px] order-1'>
                <h2 className='text-2xl font-semibold'>08:35</h2>
                <span className='text-[#676E7E] text-sm font-medium'>Sun, 20 Aug</span>
              </div>
              <div className='w-[300px] md:order-2 order-3'>
                <div className='flex justify-between w-full'>
                  <Icon name={'flightTakeoff'} size='20' />
                  <span className='text-base font-medium text-[#676E7E]'>
                    Duration: 1h 45m
                  </span>
                  <Icon name={'flightLanding'} size='20' />
                </div>
                <div className="w-full flex bg-[#E7F0FF] rounded-full h-2">
                  <div className="bg-[#0D6EFD] mx-auto h-2 rounded-full w-32"></div>
                </div>
                <div className='flex justify-between'>
                  <span className='text-base font-semibold'>LOS</span>
                  <span className='text-base font-medium text-[#676E7E]'>
                    Direct
                  </span>
                  <span className='text-base font-semibold'>LOS</span>
                </div>
              </div>
              <div className='w-[78px] md:order-3 order-2'>
                <h2 className='text-2xl font-semibold'>08:35</h2>
                <span className='text-[#676E7E] text-sm font-medium'>Sun, 20 Aug</span>
              </div>
            </div>
          </div>
          <div className='bg-white p-4 mt-0.5'>
            <p className='font-medium text-lg text-[#647995] flex flex-wrap gap-2 items-center'>
              Facilities:
              <Icon size='20' name={'case'} />
              Baggage: 20kg, 
              Cabin Baggage: 8kg
              <PiFilmSlate size={20} />
              In flight entertainment
              <PiForkKnife size={20} />
              In flight meal
              <PiUsb />
              USB Port
            </p>
          </div>
          <div className='bg-white p-5 mt-0.5 flex flex-wrap justify-between'>
            <div className='flex gap-6'>
              <a href='' className='text-[#0D6EFD] text-lg font-medium'>Flight details</a>
              <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
            </div>
            <a href='' className='text-[#0D6EFD] text-lg font-medium'>Price details</a>
          </div>
        </>
      </div>
      
    </div>
  )
}

export default Flight