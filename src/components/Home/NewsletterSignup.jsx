import FadeUp from "../FadeUp.jsx";

export default function NewsletterSignup() {
    return(
        <>

            <FadeUp>
                <section className="px-5 pt-50 pb-70 md:px-8 lg:px-12">
                    <div className="text-center mb-30">
                        <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Stay in the loop</p>
                        <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>New drops, straight to your inbox.</h2>
                        <p className="text-md text-text-secondary mt-6 leading-7">One email a month. New releases, restocks, and the occasional discount — that's it.</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-xs sm:w-sm md:w-md">
                            <input 
                                type="email"
                                placeholder="example@gmail.com"
                                className="border-b py-3 pl-5 pr-26 sm:w-sm md:w-md w-xs placeholder:text-sm sm:placeholder:text-md mx-auto my-0 focus:outline-none focus:border-b-2"
                            />
                            <button className="uppercase text-xs absolute top-4.5 right-5 hover:font-bold cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </section>
            </FadeUp>
        
        </>
    )
}