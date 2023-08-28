import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Link from 'next/link';




const ProductDetails = () => {
  return (
    <div className="w-full h-[2000px] md:py-20">
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel />
                
             
                </div>
                <div className="flex-[1] py-3">
                <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Genius MRF Bat
                        </div>

                        <div className="text-lg font-semibold mb-5">
                            Cricket Bat
                        </div>
                        <div className="text-lg font-semibold ">
                            $ 118.00
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            (Also includes all applicable duties)
                        </div>

                        <div className="mb-10 mt-[-30px]">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Handle Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        Short Handle
                                </div>
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        Long Handle
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <div className="text-md font-semibold">
                                    Bat Height Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        1.3 inch
                                </div>
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        1.6 inch
                                </div>
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        1.9 inch
                                </div>
                                <div  className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                        2.3 inch
                                </div>
                                <div  className=' border rounded-md text-center py-3 font-medium cursor-not-allowed  opacity-50'>
                                        2.6 inch
                                </div>
                                <div  className=' border rounded-md text-center py-3 font-medium cursor-not-allowed  opacity-50'>
                                        2.9 inch
                                </div>
                            </div>
                            <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>

                            
                        </div>

                        <Link href='/cart' className=" mx-12 mt-[100px] py-6 px-[100px] pl-[100px] pr-[100px] rounded-full bg-black text-white text-lg font-medium 
                        transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add To Cart
                            </Link>

                            <Link href="/Whishlist" className="w-[300px] py-4 mx-12 mt-10 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </Link>
                        <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className='text-md mb-5'>
                                Made of popular willow ,Light Weight Cricket Bat .The bat is meant for 
                                playing with light weight tennis ball only. Rounded Handle made of Sarawak 
                                Combination Cane. Perfect bat for the modern day batsmen looking to play all 
                                round the wicket.
                            </div>
                            <div className='text-md md-5'>
                            Zuurvi M-F Genius Grand Edition, Virat Endorsed, Full Size (SH) Natural Popular 
                            Willow Cricket Bat are engineered to maximise the size of the sweet spot, allowing
                             the middle of the bat to be spread further across the blade meaning that off centre 
                             strikes perform better. Designed to enhance the position of the hands by placing them 
                             ahead of the ball, which is essential for good stroke play. The handle is made from premium, 
                             imported cane covered with high-quality grip to deliver superior power and control. 
                             Handmade using reinforced wood for long-term strength, this is the perfect bat for home 
                             or club play. It features an excellent handle, reinforced with firmly wound string and 
                             a rubber sleeve for increased durability. This cricket bat is designed to be used with 
                             a Soft/Hard tennis cricket ball only (Not recommended for leather balls).
                            </div>

                </div>
            </div>

            <RelatedProducts /> 
       
        </Wrapper>
    </div>
  )
}

export default ProductDetails;