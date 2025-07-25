import React from 'react'

const ActivityCard: React.FC<{ title?: string, description?: string, className?: string, btnStyle?: string }> = ({title, description, className, btnStyle}) => {
  return (
  <div className={`max-w-[270px] p-4 ${className} mx-auto md:mx-0 rounded-lg shadow-sm`}>
    <h5 className="pb-2 text-base font-semibold tracking-tight">{title}</h5>
    <p className="pb-10 font-normal text-sm ">{description}</p>
    <button className={`w-full ${btnStyle} rounded-sm py-4 text-sm font-medium`}>
      Add {title}
    </button>
  </div>
  )
}

export default ActivityCard