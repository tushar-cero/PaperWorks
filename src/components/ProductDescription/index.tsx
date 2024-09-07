import React from 'react';
import { Cross, Heart, Stars } from '../../assets/svgicons';

export const ProductDescription = () => {
  return (
    <section className="bg-slate-800 rounded-xl p-4 text-white w-[560px]]" style={{height: 'calc(100% - 104px) !important'}}>
        <div className="w-full flex justify-end p-4"><Cross/></div>
        
        <div className='flex gap-4'>
          <img className="w-6/12 aspect-square object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
          <div className="">
            <div className="flex items-center">
              <Stars/>
            </div>
            <h1 className="text-2xl font-bold">Afro-Brazillian Coffee</h1>
            <p>Description</p>
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
    </section>
  )
}
