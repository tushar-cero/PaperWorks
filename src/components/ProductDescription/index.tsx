import React from 'react';
import translationJSON from '../../locale/translation.json';
import { ProductDescriptionInterface } from '../../types';
import allProducts from '../../locale/productData.json';
import { Cart, Cross, Heart, Stars } from '../../assets/svgicons';

export const ProductDescription = ({ targetId, setCurrentProduct }: ProductDescriptionInterface) => {

  const product = (targetId) ? allProducts.products.find(product => product.id === targetId) : {
    id: '',
    name: '',
    price: 0,
    original_price: 0,
    rating: 0,
    description: '',
    category: '',
    tags: [],
    img: '',
    tagline: ''
  };

  return (
    <aside className="relative bg-gray-200 rounded-xl p-4 flex flex-col justify-between items-stretch" style={{
      height: 'calc(100vh - 104px)',
      minWidth: '400px'
    }}>
        <div onClick={()=>setCurrentProduct(null)} className="absolute top-3 right-3 p-4 cursor-pointer"><Cross color='black'/></div>
        
        <img className="aspect-square object-cover rounded-lg" src={product?.img} alt={product?.name} />
        
        <h1 className="text-2xl font-medium mt-4 leading-none">{product?.name}</h1>
        <p className='text-sm text-gray-700 leading-none'>{product?.tagline}</p>
        
        <div className='flex justify-between items-center gap-2'>
          <div>
            <span className="text-xl font-medium mr-2">₹ {product?.price}</span><span className='text-lg line-through'>{product?.original_price}</span>
          </div>
          <span className="flex justify-center items-center gap-1 rounded bg-yellow-200 px-2 py-1 text-xs font-semibold"><Stars/> {product?.rating}</span>
        </div>
        
        <p>{product?.description}</p>

        <div className='mt-6 flex item-center gap-4'>
          <button className='p-4 bg-slate-400 rounded-lg'><Heart size={18}/></button>
          <button type="button" className="flex gap-4 justify-center items-center w-full py-2.5 px-6 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><Cart color='white' size={16} strokeWidth={1.5}/> {translationJSON.buttons.addToCart}</button>
        </div>
    </aside>
  )
}
