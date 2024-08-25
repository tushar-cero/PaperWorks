import React from 'react';

import { Cart } from '../../assets/svgicons';
import { Avatar } from '../../assets/svgicons';
import { useLocation, useNavigate } from 'react-router-dom';
import translationJSON from '../../locale/translation.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Header = () => {

  const hideCart = useLocation().pathname !== '/cart';
  const navigate = useNavigate();
  const handleProductPageToggle = () => navigate('/');
  const handleCartToggle = () => navigate('/cart');
  const { cartItemCount } = useSelector((state: RootState) => state.cart);

  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button onClick={handleProductPageToggle} className="self-center text-xl font-semibold whitespace-nowrap">
            {translationJSON.copywriting.AppName}
          </button>
          <div className="flex items-center gap-4 lg:order-2">
            {hideCart && <button onClick={handleCartToggle} className='flex justify-center items-center gap-1 text-black'>
              <Cart/>
              <span className='relative top-[-12px] left-[-12px] px-3 py-1 rounded-full bg-neutral-200 bg-opacity-30'>{cartItemCount}</span>
            </button>}
            <Avatar/>
          </div>
        </div>
      </nav>
    </header>
  );
};
