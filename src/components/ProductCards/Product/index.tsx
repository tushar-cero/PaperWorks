import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { ProductCardProps } from '../../../types';
import translationJSON from '../../../locale/translation.json';
import { Cart, Heart, Stars } from '../../../assets/svgicons';
import { addToFavorite } from '../../../store/favoriteSlice';

export const ProductCard: React.FC<ProductCardProps> = ({ product, setCurrentProduct }) => {

  const dispatch = useDispatch();

  function handleCardClick(id: string): void {
    console.log('setting current product as', id);
    setCurrentProduct(id);
  }

  return (
    <div onClick={()=>handleCardClick(product.id)} className="w-6/12 relative flex max-w-xs flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-lg">
        <img className="object-cover" src={product.img} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{100-Math.ceil((product.price*100)/product.original_price)}% OFF</span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900 mr-2">$ {product.price}</span>
            <span className="text-md text-slate-900 line-through">$ {product.original_price}</span>
          </p>
          <span className="flex justify-center items-center gap-1 rounded bg-yellow-200 px-2 py-1 text-xs font-semibold"><Stars/> {product.rating}</span>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button onClick={()=>dispatch(addToFavorite({id: product.id}))} className="p-3 bg-slate-400 rounded-lg"><Heart/></button>
          <button onClick={()=>dispatch(addToCart({id: product.id}))} className="flex items-center gap-4 w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <Cart />{translationJSON.buttons.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};
