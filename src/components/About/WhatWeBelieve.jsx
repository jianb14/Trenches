import FadeUp from "../FadeUp.jsx";
import aboutBG from "/src/assets/images/about-bg-1.jpg";

export default function WhatWeBelieve() {
    return(
        <>  

            <FadeUp>
                <section className="px-5 py-5 w-full min-h-screen mt-20 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-16 mb-10">
                        <div>
                            <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>What We Believe</p>
                            <h2 className='text-5xl font-serif font-medium sm:text-6xl'>We make the kind of pieces we'd wear ourselves.</h2>
                        </div>

                        <div className="flex items-center">
                            <p className="text-neutral-600 leading-relaxed lg:text-lg text-md mt-6">
                            We don't chase trends. We focus on creating clothing that feels
                            simple, familiar, and timeless. Every piece is made to fit
                            naturally into everyday life.
                            </p>
                        </div>
                    </div>

                    <img 
                        src={aboutBG}
                        alt="Trenches Background"
                        className="h-auto w-full object-cover sm:h-150 brightness-70 hover:brightness-90 transition duration-300"
                    />

                </section>
            </FadeUp>
            
        </>
    )
}