import React from 'react'
import Link from 'next/link'
import Category from '@/pages/category/[slug]';

const ProductCard = () => {
  return (
   <Link  className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer" href='/Product/1'>
            <img className='w-full' src='/mrf1.jpg' alt='Product Image' />
            <div className="p-4 ml-[20px] text-black/[0.9]">
            <h2 className="text-lg font-medium">Genius MRF Bat</h2>
                <div className="flex items-center text-black/[0.5]">
                <p className="mr-12 ml-[0px] text-lg font-semibold">
                         $ 118.00
                    </p>
                    <p className="text-base  font-medium line-through">
                         $ 177.00
                    </p>
               
                
                    
                </div>
            </div>
   </Link>

            
           
  );
};

export default ProductCard