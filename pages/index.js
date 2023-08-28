import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import ProductCard2 from "@/components/ProductCard2";
import Wrapper from "@/components/Wrapper";

export default function Home(){

    return(
        <main className="h-[1600px]">
            <HeroBanner />
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        About for our Store
                    </div>
                    <div className="text-md md:text-xl">
                    Crick Bat Store - India's most preferred Cricket Bat Store is 
                    based out of Chennai, South India. Crick Bat Store houses top 
                    Indian and International Cricket Bat brands like Genius Mrf, Ceat,
                    Sparten Seven, NB Millets, SS Magnum to name a few.
                    </div>
                    <div url='./' className="font-semibold  text-4xl mt-12 hover:scale-105 ">  Running products </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                           
                            <ProductCard />
                            <ProductCard2 />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                         
                           
                    </div>
                </div>

            </Wrapper>
        </main>
    )
}