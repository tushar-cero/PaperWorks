import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/productSlice';

import translationJSON from '../../locale/translation.json';
import { Cart, Heart, Avatar, SearchIcon } from '../../assets/svgicons';

export const Header = () => {

  const dispatch = useDispatch();
  const [headerSearchTerm, setHeaderSearchTerm] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState("")

  const handleHeaderSearchSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(headerSearchTerm));
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(headerSearchTerm);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [headerSearchTerm, 500]);

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
      <nav className="fixed z-50 w-full border-gray-200 bg-white px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          <button onClick={handleProductPageToggle} className="self-center text-xl font-semibold whitespace-nowrap">
            {translationJSON.copywriting.AppName}
          </button>

          <form 
            className='flex justify-center items-center border border-gray-300 rounded-lg'
            onSubmit={handleHeaderSearchSubmission}
          >
            <input 
              type="search" 
              id="search-dropdown" 
              className="border-none w-[300px] p-2.5 text-sm text-gray-900 rounded-lg" 
              placeholder={translationJSON.copywriting.headerSearchPlaceholder} 
              required 
              value={headerSearchTerm}
              onChange={(e) => setHeaderSearchTerm(e.target.value)}
            />
            <button type="submit" className="text-sm font-medium mr-3"><SearchIcon /></button>
          </form>
          
          <div className="flex items-center gap-4 lg:order-2">
            {hideFavorite && <button onClick={handleFavoriteToggle} className='flex justify-center items-center gap-1 text-black mr-6'>
              <Heart size={24} color='black' strokeWidth={2} />
              <span className='relative top-[-12px] left-[-12px] px-3 py-1 rounded-full bg-neutral-200 bg-opacity-30'>{favoriteItemCount}</span>
            </button>}
            {hideCart && <button onClick={handleCartToggle} className='flex justify-center items-center gap-1 text-black'>
              <Cart />
              <span className='relative top-[-12px] left-[-12px] px-3 py-1 rounded-full bg-neutral-200 bg-opacity-30'>{cartItemCount}</span>
            </button>}
            <Avatar/>
          </div>

        </div>
      </nav>
    </header>
  );
};
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

