'use client'
/* eslint-disable @next/next/no-img-element */
import ActivityCard from '@/components/atoms/activityCard';
import Icon from '@/components/icon';
import Layout from '@/components/layout';
import Image from 'next/image';
import { HiArrowRight, HiOutlineCalendar } from 'react-icons/hi2';
import { RiSettings4Line } from 'react-icons/ri';
import React, { useState } from 'react';
import Flight from '@/components/flight';
import Hotels from '@/components/hotels';
import Attraction from '@/components/attraction';
import { useCombinedSearch } from './util/hooks';

export default function Home() {

  const [search, setSearch] = useState('')
  const { data, isFetching, error, refetch } = useCombinedSearch(search);

  const handleSearch = () => {
    if (search.length > 1) refetch(); 
  };

  console.log(data, isFetching, error, refetch)

  return (
    <Layout setSearch={setSearch} search={search} handleSearch={handleSearch}>
      <div className="space-y-6">
        <div className='relative'>
          <img alt='banner' src={`/images/banner.png`} className='w-full' />
          <button className='p-2 bg-[#FFFFFF33] shadow-sm rounded-sm absolute top-4 left-4'>
            <Icon name={'leftArrow'} size='24' />
          </button>
        </div>
        {/* Header Section */}
        <div className='md:flex justify-between space-y-2'>
          <div className="">
            <p className="text-sm font-medium text-[#7A4504] flex gap-1 items-center bg-[#FEF4E6] py-2 px-3 w-fit ">
              <HiOutlineCalendar /> 23 March 2024 <HiArrowRight /> 2 April 2024
            </p>
            <h1 className="text-2xl font-bold">Bahamas Family Trip</h1>
            <p className="text-base font-medium text-gray-500">New York, United States of America | Solo Trip</p>
          </div>
          <div className='space-y-4'>
            <div className="flex gap-3 items-center">
              <button className='p-4 rounded-sm bg-[#E7F0FF] w-40 flex justify-center'>
                <Icon name={'userplus'} size='20' />
              </button>
              <span>
                <Icon name={'threedot'} size='32' />
              </span>
            </div>
            <div className='flex gap-8 justify-center'>
              <Image src='/images/user.png' alt='user' width={40} height={40} className='rounded-full p-1 bg-[#E7F0FF]' />
              <button className='p-3 rounded-full bg-[#E7F0FF] shadow-white shadow-sm'>
                <RiSettings4Line size={16} />
              </button>
            </div>
          </div>
          
        </div>
        <div className='md:flex gap-2 flex-wrap space-y-2 xl:space-y-0'>
          <ActivityCard 
            title='Activities'
            description='Build, personalize, and optimize your itineraries with our trip planner.'
            className="bg-[#000031] text-[#FFFFFF]"
            btnStyle='bg-[#0D6EFD]'
          />
          <ActivityCard 
            title='Hotels'
            description='Build, personalize, and optimize your itineraries with our trip planner.'
            className="bg-[#E7F0FF] text-[#1D2433]"
            btnStyle='bg-[#0D6EFD] text-white'
          />
          <ActivityCard 
            title='Activities'
            description='Build, personalize, and optimize your itineraries with our trip planner.'
            className="bg-[#0D6EFD] text-[#FFFFFF]"
            btnStyle='bg-[#FFFFFF] text-[#0D6EFD]'
          />
        </div>

        <div className='py-10'>
          <h2 className="text-xl font-semibold text-[#1D2433]">Trip itineraries</h2>
          <p className='text-sm font-medium text-[#647995]'>Your trip itineraries are placed here</p>
        </div>


        {/* Flights Section */}
        <section className=''>
          <Flight />
        </section>

        {/* Hotels Section */}
        <section>
          <Hotels />
        </section>

        {/* Activities Section */}

        <section>
          <Attraction />
        </section>
      </div>
    </Layout>
  );
}
