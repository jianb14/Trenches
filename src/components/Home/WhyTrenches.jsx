import FadeUp from "../FadeUp.jsx";
import whyTrenchesBG from "/src/assets/images/trenches-bg-2.jpg";

export default function WhyTrenches() {
    return(
        <>

            <FadeUp>
                <section className='w-full px-5 py-20 md:px-8 bg-background lg:px-12 lg:flex md:items-center mt-20 gap-10 md:gap-20'>
                    <div>
                        <div>
                            <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Why Trenches</p>
                            <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>We keep it simple, with purpose.</h2>
                            <p className="text-md text-text-secondary mt-6 leading-7">Trenches creates everyday streetwear pieces built around comfort, confidence, and self-expression through bold graphics and clean styling.</p>
                        </div>
                        <div className='mt-10 grid gap-5 sm:grid-cols-2 grid-cols-1 grid-rows-2 '>
                            <div>
                                <h4 className="font-bold text-sm">Inspired by street culture</h4>
                                <p className="text-sm text-text-secondary mt-2">Designed with influences from everyday streetwear, youth culture, and modern graphic aesthetics.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Made to stand out</h4>
                                <p className="text-sm text-text-secondary mt-2">Every release focuses on bold visuals and statement designs without overcomplicating the fit.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Easy to wear daily</h4>
                                <p className="text-sm text-text-secondary mt-2">Simple silhouettes and comfortable pieces that work for everyday styling and casual wear.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Limited by design</h4>
                                <p className="text-sm text-text-secondary mt-2">Small quantity releases that keep every drop feeling more personal and exclusive.</p>
                            </div>
                        </div>
                    </div>

                    <img src={whyTrenchesBG} alt="Why Trenches Background" className='w-full h-80 object-cover mt-10 sm:h-120 lg:h-125 lg:mt-0 brightness-90 hover:brightness-100 transition duration-300'/>
                
                </section>
            </FadeUp>
        
        </>
    )
}

