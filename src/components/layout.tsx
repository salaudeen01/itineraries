import React from 'react'
import Sidebar  from './sidebar'
import Navbar from './header';

interface LayoutProps {
  children: React.ReactNode;
  setSearch: (search: string) => void;
  handleSearch: () => void;
  search: string;
}

const  Layout = ({ children, setSearch, search, handleSearch }: LayoutProps) => {
  return (
    <div className="bg-[#F0F2F5] overflow-x-hidden">
      <Navbar setSearch={setSearch} search={search} handleSearch={handleSearch} />
    <div className='lg:flex md:p-8 gap-8'>
      <Sidebar />
      <main className="lg:flex-1 bg-white lg:p-6 p-4 w-full">
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout