import React from 'react';
import { addToCart, reduceQuantityFromCart, removeFromCart } from '../../../store/cartSlice';
import translationJSON from '../../../locale/translation.json';
import { CartProductCardProps } from '../../../types';
import { MinusIcon, PlusIcon } from '../../../assets/svgicons';
import { useDispatch } from 'react-redux';

export const CartProduct: React.FC<CartProductCardProps> = ({ product, quantity }) => {

  const dispatch = useDispatch();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

        <img className="shrink-0 h-20 w-20n" src={product.img} alt={product.name} />
        
        <div className="w-full min-w-0 flex-1 space-y-4 md:max-w-md">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">{product.name}</h5>
          <p className="text-normal tracking-tight text-gray-900">{product.description}</p>
        </div>

        <div className="flex items-center">
          <button type="button" onClick={()=>dispatch(reduceQuantityFromCart({id: product.id}))} id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
            <PlusIcon />
          </button>
          <input readOnly type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value={quantity} required />
          <button type="button" onClick={()=>dispatch(addToCart({id: product.id}))} id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
            <MinusIcon />
          </button>
        </div>
        
        <div className="text-end md:w-32">
          <p className="text-base font-bold text-gray-900">${(quantity*product.price).toFixed(2)}</p>
        </div>

        <button type="button" onClick={()=>dispatch(removeFromCart({id: product.id}))} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">{translationJSON.buttons.removeFromCart}</button>

      </div>
    </div>
  );
};
