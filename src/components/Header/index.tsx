import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import translationJSON from '../../locale/translation.json';
import { Cart, Heart } from '../../assets/svgicons';
import { Avatar } from '../../assets/svgicons';

export const Header = () => {

  // Conditional Renderers
  const hideCart = useLocation().pathname !== '/cart';
  const hideFavorite = useLocation().pathname !== '/favorite';
  
  // Navigations
  const navigate = useNavigate();
  const handleProductPageToggle = () => navigate('/');
  const handleCartToggle = () => navigate('/cart');
  const handleFavoriteToggle = () => navigate('/favorite');
  
  // Fetching data from store
  const { cartItemCount } = useSelector((state: RootState) => state.cart);
  const { favoriteItemCount } = useSelector((state: RootState) => state.favorite);

  return (
    <header>
      <nav className="fixed z-50 w-full border-gray-200 bg-white px-4 lg:px-6 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          <button onClick={handleProductPageToggle} className="self-center text-xl font-semibold whitespace-nowrap">
            {translationJSON.copywriting.AppName}
          </button>
          
          <div className="flex items-center gap-4 lg:order-2">
            {hideFavorite && <button onClick={handleFavoriteToggle} className='flex justify-center items-center gap-1 text-black mr-6'>
              <Heart size={'24px'}/>
              <span className='relative top-[-12px] left-[-12px] px-3 py-1 rounded-full bg-neutral-200 bg-opacity-30'>{favoriteItemCount}</span>
            </button>}
            {hideCart && <button onClick={handleCartToggle} className='flex justify-center items-center gap-1 text-black'>
              <Cart size={'24'} />
              <span className='relative top-[-12px] left-[-12px] px-3 py-1 rounded-full bg-neutral-200 bg-opacity-30'>{cartItemCount}</span>
            </button>}
            <Avatar/>
          </div>

        </div>
      </nav>
    </header>
  );
};
