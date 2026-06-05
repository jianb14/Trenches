import FadeUp from "../FadeUp.jsx";
import featured1 from "/src/assets/images/trenches-tee-white.jpg";
import featured2 from "/src/assets/images/trenches-tee-black.jpg";
import featured3 from "/src/assets/images/jordan-hydro-13-gray-black.jpg";
import featured4 from "/src/assets/images/jordan-jersey-red-black.jpg";

export default function Featured() {
    return(
        <>
            <FadeUp>
                <section className='px-5 py-20 w-full min-h-screen mt-10 md:px-8 lg:px-12'>
                    <div>
                        <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Featured</p>
                        <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>The basics, done right.</h2>
                    </div>

                    <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 grid-rows-2gap-5'>
                        <div className=''>
                            <div className='relative'>
                                <img 
                                    src={featured1}
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-100 brightness-80 hover:brightness-100 transition duration-300" 
                                />
                                <div className='absolute md:text-sm md:px-3 md:py-0.75 top-2 left-2 bg-white text-black text-xs px-2 py-0.5'>
                                    Best Seller
                                </div>
                            </div>

                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs uppercase text-text-secondary'>T-Shirt</p>
                                    <p className='text-sm'>₱550</p>
                                </div>
                                <p className='text-sm'>Trenches Tee - White Pink</p>
                            </div>
                        </div>

                        <div className='g'>
                            <div className='relative'>
                                <img 
                                    src={featured2} 
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='absolute md:text-sm md:px-3 md:py-0.75 top-2 left-2 bg-white text-black text-xs px-2 py-0.5'>
                                    New
                                </div>
                            </div>

                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs uppercase text-text-secondary'>T-Shirt</p>
                                    <p className='text-sm'>₱550</p>
                                </div>
                                <p className='text-sm'>Trenches Tee - Black Pink</p>
                            </div>
                        </div>

                        <div className='g'>
                            <div className='relative'>
                                <img 
                                    src={featured3} 
                                    alt="Trenches Slipper"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-100 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='absolute md:text-sm md:px-3 md:py-0.75 top-2 left-2 bg-white text-black text-xs px-2 py-0.5 '>
                                    Best Seller
                                </div>
                            </div>

                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs uppercase text-text-secondary'>Slipper</p>
                                    <p className='text-sm'>₱950</p>
                                </div>
                                <p className='text-sm'>Jordan Hydro 13 - Gray Black</p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='relative'>
                                <img 
                                    src={featured4} 
                                    alt="Trenches Jersey"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-100 brightness-80 hover:brightness-100 transition duration-300" 
                                />
                            </div>

                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs uppercase text-text-secondary'>Jersey</p>
                                    <p className='text-sm'>₱1000</p>
                                </div>
                                <p className='text-sm'>Jordan Jersey - Red Black</p>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeUp>

        </>
    )

}