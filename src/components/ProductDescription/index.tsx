import React from 'react';
import { ProductDescriptionInterface } from '../../types';
import allProducts from '../../locale/productData.json';
import { Cross, Heart, Stars } from '../../assets/svgicons';

export const ProductDescription = ({ targetId, setCurrentProduct }: ProductDescriptionInterface) => {

  const product = (targetId) ? allProducts.products.find(product => product.id === targetId) : {
    id: '',
    name: '',
    description: '',
    price: 0,
    rating: 0,
    img: '',
    original_price: 0,
  };

  return (
    <aside className="bg-slate-800 rounded-xl p-4 text-white" style={{
      height: 'calc(100vh - 104px)',
      maxWidth: '480px'
    }}>
        <div onClick={()=>setCurrentProduct(null)} className="w-full flex justify-end p-4"><Cross/></div>
        
        <div className='flex gap-4'>
          <img className="w-6/12 aspect-square object-cover" src={product?.img} alt={product?.name} />
          <div className="">
            <div className="flex items-center">
              {Array.from({length: Math.floor(Number(product?.rating))}, (_, index) => <Stars key={index}/> )}
            </div>
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p>{product?.description}</p>
            <div>
              <button><Heart/></button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl my-4 font-bold">Delivered To Your Door</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          <h1 className="my-4 text-2xl font-bold">From the Fine Farms of Brazil</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p>Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
        </div>
    </aside>
  )
}
