import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel2 = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto  sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel2"
            >
                <div className='hover:scale-150'>
                    <img src='/ceat1.jpg' />
                </div>
               <div className='hover:scale-150'>
                     <img src="/ceat2.jpg" />
               </div>
               <div className='hover:scale-150'>
               <img src="/ceat3.jpg" />
               </div>
               <div className='hover:scale-150'>
                <img src="/ceat4.jpg" />
               </div>
                
                
            </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel2