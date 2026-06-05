import FadeUp from "../FadeUp.jsx";

export default function BestSeller(){
    return(
        <>
            <FadeUp>
                <section className='px-5 py-40 bg-background w-full min-h-screen md:px-8 lg:px-34'>
                    <div className="md:text-center">
                        <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Best Seller</p>
                        <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>Our most-loved pieces.</h2>
                    </div>

                    <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 grid-rows-2gap-5'>
                        <div className=''>
                            <div className='relative'>
                                <img 
                                    src='/src/assets/images/TrenchesTeeWhite.jpg' 
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-90 brightness-80 hover:brightness-100 transition duration-300" 
                                />
                                <div className='absolute top-2 left-2 bg-white text-black text-xs px-2 py-0.5'>
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
                                    src='/src/assets/images/TrenchesTeeBlack.jpg' 
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-90 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='absolute top-2 left-2 bg-white text-black text-xs px-2 py-0.5'>
                                    Best Seller
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
                                    src='/src/assets/images/JH13-GB.jpg' 
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-90 brightness-70 hover:brightness-90 transition duration-300" 
                                />
                                <div className='absolute top-2 left-2 bg-white text-black text-xs px-2 py-0.5 '>
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
                                    src='/src/assets/images/jordan-hydro-13-RB.jpg' 
                                    alt="Trenches Tee"
                                    className="w-full h-60 object-cover mb-2 sm:h-80 lg:h-90 brightness-80 hover:brightness-100 transition duration-300" 
                                />
                                <div className='absolute top-2 left-2 bg-white text-black text-xs px-2 py-0.5 '>
                                    Best Seller
                                </div>
                            </div>

                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs uppercase text-text-secondary'>Jersey</p>
                                    <p className='text-sm'>₱950</p>
                                </div>
                                <p className='text-sm'>Jordan Hydro 13 - Red Black</p>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeUp>

        </>
    )
}