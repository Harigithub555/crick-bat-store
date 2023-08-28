import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto  sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <div className='hover:scale-150'>
                    <img src='/mrf1.jpg' />
                </div>
               <div className='hover:scale-150'>
                     <img src="/mrf2.jpg" />
               </div>
               <div className='hover:scale-150'>
               <img src="/mrf3.jpg" />
               </div>
               <div className='hover:scale-150'>
                <img src="/mrf4.jpg" />
               </div>
                
                
            </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel