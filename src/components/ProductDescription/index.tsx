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
    <aside className="bg-gray-200 rounded-xl p-4 flex flex-col justify-between" style={{
      height: 'calc(100vh - 104px)',
      minWidth: '480px'
    }}>
        {/* <div onClick={()=>setCurrentProduct(null)} className="relative top-0 right-0 p-4"><Cross/></div> */}
        <img className="w-8/12 aspect-square object-cover rounded-lg" src={product?.img} alt={product?.name} />
        <h1 className="text-2xl font-medium ">{product?.name}</h1>
        <div className="flex items-center my-2">
          {Array.from({length: Math.floor(Number(product?.rating))}, (_, index) => <Stars key={index}/> )}
        </div>
        <div className='my-4 flex items-center gap-2'>
          <span className="text-2xl font-medium">₹ {product?.price}</span><span className='text-lg line-through'>{product?.original_price}</span>
        </div>
        <p>{product?.tagline}</p>
        <p>{product?.description}</p>

        <div className='mt-6 flex item-center gap-4'>
          <button className='p-4 bg-slate-400 rounded-lg'><Heart size='18'/></button>
          <button type="button" className="flex gap-4 justify-center items-center w-full py-2.5 px-6 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><Cart/> {translationJSON.buttons.addToCart}</button>
        </div>
    </aside>
  )
}
