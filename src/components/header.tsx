import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from './atoms/input'
import Link from 'next/link'
import Icon from './icon';
import { CgMenuGridR } from 'react-icons/cg';

interface NavProps {
  setSearch: (search: string) => void;
  search?: string;
  handleSearch: () => void;
}

const firstNav = [
  {name:'Home', icon:'home'},
  {name:'Dashboard', icon:'dashboard'},
  {name:'Wallet', icon:'wallet'},
  {name:'Plan a trip', icon:'trip'},
  {name:'Commission for life', icon:'hand'},
]
const secondNav = [
  {name:'Notification', icon:'bell'},
  {name:'carts', icon:'cart'},
  {name:'Create', icon:'add'},
]

const  Navbar = ({ setSearch, search, handleSearch}: NavProps) => {

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow p-6 flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <Image width={50} height={50} alt='logo' src='/images/logo.png' />
        <div className='md:flex hidden'>
          <Input 
            leftIcon='search'
            value={search}
            setSearch={setSearch}
            className='py-3 px-10 rounded-sm text-base font-normal bg-[#F0F2F5]' 
            placeholder='Search'
          />
          <button className='bg-blue-600 p-3 rounded-r-sm' onClick={handleSearch}>
            <Icon name={'search'} color="#fff" size="20"  />
          </button>

        </div>
      </div>
      <nav className="hidden lg:flex gap-6">
        <div className='xl:flex hidden  gap-4'>
          {firstNav.map(({name, icon})=>(
            <Link key={name} href={'#'} className="text-[#647995] text-sm font-medium block justify-center">
              <Icon name={icon} size='24' className='flex justify-center' />
              <span>{name}</span>
            </Link>
          ))}
        </div>
        <div className='md:flex gap-4 xl:border-l xl:pl-6'>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Subscribe</button>
          {secondNav.map(({name, icon})=>(
            <Link key={name} href={'#'} className="text-[#647995] text-sm font-medium block justify-center">
              <Icon name={icon} size='24' className='flex justify-center' />
              <span>{name}</span>
            </Link>         
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </nav>
      <div className="flex lg:hidden gap-6 items-center">
        <button className="bg-blue-600 text-white px-2 py-1 rounded">Subscribe</button>
        <div className="w-8 h-8 rounded-full bg-[#647995]" />
        <button 
          type="button" 
          onClick={() => setOpen(!open)}
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <CgMenuGridR size={32} />
        </button>
      </div>

      {/* <div
          className={`items-center fixed top-20 left-0 bg-white z-50 lg:hidden pb-6 justify-between w-full ${
            open ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="px-8 mt-4 text-zinc-800 text-base font-semibold font-['Inter'] leading-tight space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {firstNav?.map(({name, icon}) => (
              <li key={name} className="m-6">
                <a
                  href={`#`}
                  // href={label?.page}
                  className={`flex gap-4 p-4 border-b border-zinc-200 relative`}
                >
                  <Icon name={icon} size='24' className='flex justify-center' />
                  <span className={`justify-center text-base leading-normal text-gray-600 font-normal`}>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}

      {open &&
        <div className="fixed top-20 left-0 px-2 z-40 pb-[18px] lg:hidden bg-white rounded-xl shadow-[0px_0px_35px_0px_rgba(98,103,115,0.15)] border border-[#dee2e6] flex-col justify-start items-center gap-3 p-2 inline-flex">
          <div className='grid grid-cols-3 gap-3'>
            {firstNav?.map(({name, icon})=>(
              <a key={name} href={'#'} className={`p-4 hover:bg-gray-200 border rounded-lg flex-col justify-center items-center inline-flex overflow-hidden`}>
                <Icon name={icon} size='24' className='flex justify-center' />
                <span className="py-2 text-center text-[#647995] text-xs md:text-sm font-semibold font-['Onest'] leading-[16.80px]">{name}</span>
              </a>
            ))}
            {secondNav?.map(({name, icon})=>(
              <a key={name} href={'#'} className={`p-4 hover:bg-gray-200 border rounded-lg flex-col justify-center items-center inline-flex overflow-hidden`}>
                <Icon name={icon} size='24' className='flex justify-center' />
                <span className="py-2 text-center text-[#647995] text-xs md:text-sm font-semibold font-['Onest'] leading-[16.80px]">{name}</span>
              </a>
            ))}
          </div>
        </div>
      }
    </header>
  )
}

export default Navbar