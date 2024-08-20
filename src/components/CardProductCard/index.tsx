// ----- Library Imports
import React, { useCallback } from 'react';

// ----- Utility Imports
import translationJSON from '../../locale/translation.json';

// ----- Component Imports
import { CartProductCardProps } from '../../types';
import { MinusIcon, PlusIcon } from '../../assets/svgicons';

export const CartProductCard: React.FC<CartProductCardProps> = useCallback((props) => {

  const {product, quantity, addToCart, removeFromCart, handleQuantity} = props;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

        <img className="shrink-0 h-20 w-20n" src={product.img} alt={product.name} />
        
        <div className="w-full min-w-0 flex-1 space-y-4 md:max-w-md">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">{product.name}</h5>
          <p className="text-normal tracking-tight text-gray-900">{product.description}</p>
        </div>

        <div className="flex items-center">
          <button type="button" onClick={()=>handleQuantity(product.id)} id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
            <PlusIcon />
          </button>
          <input readOnly type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value={quantity} required />
          <button type="button" onClick={()=>addToCart(product.id)} id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
            <MinusIcon />
          </button>
        </div>
        
        <div className="text-end md:w-32">
          <p className="text-base font-bold text-gray-900">${product.price}</p>
        </div>

        <button type="button" onClick={()=>removeFromCart(product.id)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">{translationJSON.buttons.addToCart}</button>

      </div>
    </div>
  );
}, []);
