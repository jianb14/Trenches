import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import FadeUp from "../FadeUp.jsx";
import category1 from "/src/assets/images/trenches-tee-white.jpg";
import category2 from "/src/assets/images/jordan-jersey-red-black.jpg";
import category3 from "/src/assets/images/jordan-hydro-13-gray-black.jpg";
import category4 from "/src/assets/images/shaka-cargo-short-blue.jpg";


export default function ShopByCategory() {
    return(
        <>

            <FadeUp>
                <section className='px-5 py-20 w-full md:px-8 lg:px-12 mt-20'>
                    <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Shop by Category</p>
                    <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>Find your fit.</h2>
                    <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 grid-rows-2gap-5'>
                        <div className='relative'>
                            <NavLink to="/products">
                                <img 
                                    src={category1} 
                                    alt="T-Shirts"
                                    className="w-full h-60 object-cover sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='flex items-center justify-between absolute bottom-5 left-2 right-2 px-3 py-0.75'>
                                    <p className='text-sm sm:text-md uppercase text-white'>T-Shirts</p>
                                    <ArrowRight 
                                        size={22}
                                        className="text-white hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </NavLink>
                        </div>
                        <div className='relative'>
                            <NavLink to="/products">
                                <img 
                                    src={category2} 
                                    alt="Jerseys"
                                    className="w-full h-60 object-cover sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='flex items-center justify-between absolute bottom-5 left-2 right-2 px-3 py-0.75'>
                                    <p className='sm:text-md text-sm uppercase text-white'>Jerseys</p>
                                    <ArrowRight 
                                        size={22}
                                        className="text-white hover:translate-x-1 transition-transform duration-300 sm:text-lg" />
                                </div>
                            </NavLink>
                        </div>
                        <div className='relative'>
                            <NavLink to="/products">
                                <img 
                                    src={category3}
                                    alt="Slippers"
                                    className="w-full h-60 object-cover sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='flex items-center justify-between absolute bottom-5 left-2 right-2 px-3 py-0.75'>
                                    <p className='text-sm uppercase text-white '>Slippers</p>
                                    <ArrowRight 
                                        size={22}
                                        className="text-white hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </NavLink>
                        </div>
                        <div className='relative'>
                            <NavLink to="/products">
                                <img 
                                    src={category4} 
                                    alt="Shorts"
                                    className="w-full h-60 object-cover sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='flex items-center justify-between absolute bottom-5 left-2 right-2 px-3 py-0.75'>
                                    <p className='text-sm uppercase text-white '>Shorts</p>
                                    <ArrowRight 
                                        size={22}
                                        className="text-white hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </FadeUp>

        </>
    )
}