import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import Icon from "../icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  className?: string;
  placeholder?: string;
  search?: string;
  setSearch: (search: string) => void;
  rightIcon?: ReactNode;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon,
      rightIcon,
      placeholder,
      className,
      setSearch,
      search,
      ...props
    },
    ref
  ) => {
    return (
      <div className={``}>
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Icon name={leftIcon} color="#667185" size="20" />
            </div>
          )}
          <input
            ref={ref}
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder={placeholder}
            className={`${className ? className : 'w-full p-2 bg-gray-100 text-gray-800 border'}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
