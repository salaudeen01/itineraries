import React from "react";
import Icon from "./icon";

type navProps ={
  name: string;
  icon: string
}

const NavItem:React.FC<navProps> = ({ name, icon }) => {
  return (
    <div
      className={`w-fit flex justify-center items-center flex-shrink-0 cursor-pointer gap-2 bg-white py-2 px-3 border-[1px] border-[#fff] rounded-full text-[#41454F] hover:border-[1px] hover:!border-[#E9EBE9] active:scale-95 transition  duration-300`}
    >
      <div className="w-fit p-1 cursor-pointer relative rounded-[8px] text-[#647995] text-base font-medium flex gap-2 items-center">
        <Icon name={icon} size='32' className='flex justify-center' />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default NavItem;
