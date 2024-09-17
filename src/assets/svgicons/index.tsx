import React from 'react';
import { AssetSizeProps } from '../../types';

export const Avatar = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" />
    </svg>
  );
};

export const RightArrow = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M19 12H5m14 0-4 4m4-4-4-4" />
    </svg>
  );
};

export const PlusIcon = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M1 1h16" />
    </svg>
  );
};

export const MinusIcon = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M9 1v16M1 9h16" />
    </svg>
  );
};

export const Stars = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

export const Cart = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" />
      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" />
      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
    </svg>
  );
};

export const Heart = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    >
      <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
};

export const Cross = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill={"none"}
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SearchIcon = ({size=24, color='black', strokeWidth=2}: AssetSizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill="none"
      width={size}
      height={size}
      color={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="currentColor" strokeWidth={strokeWidth} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
  )
}
