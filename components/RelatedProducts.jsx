import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import ProductCard2 from './ProductCard2';

const RelatedProducts = () => {

    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
      };
      
  return <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
  <div className="text-2xl font-bold mb-5">You Might Also Like</div>

     <Carousel 
     responsive={responsive}
     containerClass="-mx-[10px]"
     itemClass="px-[50px]"
     >
         <ProductCard />
         <ProductCard2 />
         <ProductCard />
         <ProductCard2 />
         <ProductCard />
         <ProductCard2 />
     </Carousel>;

  </div>
  
}

export default RelatedProducts;