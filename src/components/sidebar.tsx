import Link from 'next/link'
import React from 'react'
import Icon from './icon'
import NavItem from './navItems'

const itemNav = [
  { name: 'Activities', icon: 'track'},
  { name: 'Hotels', icon: 'hotel'},
  { name: 'Flights', icon: 'flight'},
  { name: 'Study', icon: 'study'},
  { name: 'Visa', icon: 'visa'},
  { name: 'Immigration', icon: 'case'},
  { name: 'Medical', icon: 'med'},
  { name: 'Vacation Packages', icon: 'package'},
]

const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 rounded-sm bg-white h-screen p-4 hidden lg:block">
        <ul className="space-y-3">
          {itemNav?.map(({name, icon})=>(
            <li key={name} className='p-2'>
              <Link href={'#'} className="text-[#647995] text-base font-medium flex gap-2 items-center">
                <Icon name={icon} size='32' className='flex justify-center' />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 bg-[#F0F2F5] items-center p-4 absolute bottom-10'>
          <button className='bg-[#0D6EFD] rounded-sm text-white font-medium text-base p-4'>Go</button>
          <span className='text-[#647995] text-sm font-medium'>Personal Account</span>
          <Icon name={'scroll'} />
        </div>
      </aside>
      <div className='pb-4 flex lg:hidden max-w-full overflow-x-auto gap-2 md:gap-4 pb- no-scroll'>
        {itemNav.map(({name, icon}) => (
          <NavItem
            key={name}
            name={name}
            icon={icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar