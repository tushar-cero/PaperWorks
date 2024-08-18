import React from 'react';
import { ProductCardProps } from '../../types';

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={product.img} alt="product image" />
            <div className="p-5">
                <h5 className="pb-2 text-lg font-semibold leading-1 tracking-tight text-gray-900">{product.name}</h5>
                <p className="pb-4 text-normal tracking-tight text-gray-900">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">$ {product.price}</span>
                    <button 
                        onClick={()=>addToCart(product.id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;