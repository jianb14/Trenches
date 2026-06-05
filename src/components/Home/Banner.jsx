import Button from '../Button.jsx';
import { ArrowRight } from "lucide-react";
import FadeUp from "../FadeUp.jsx";

export default function Banner() {
    return(
        <>
            <FadeUp>
                <section className='px-12 md:px-16 lg:px-20 py-20 w-full bg-black mt-30 gap-20 md:flex'>
                    <h1 className='text-4xl md:text-5xl font-serif lg:text-6xl italic text-white'>Daily Essentials. Handpicked for comfort.</h1>
                    <div className='mt-10 md:mt-0'>
                        <p className='text-md text-gray-300 mt-4 mb-6'>Discover our core collection of premium footwear and home goods. Every item is curated for quality and timeless style. No codes, just quality you can count on.</p>
                        <Button 
                            to="/products"
                            label="Browse the Collection" 
                            icon={<ArrowRight 
                            size={18}/>} 
                            variant="accent" 
                            className="mt-6 flex items-center gap-2 pr-1 pl-5 py-2 w-51 sm:w-56"
                        />

                    </div>
                </section>
            </FadeUp>

        </>
    )
}