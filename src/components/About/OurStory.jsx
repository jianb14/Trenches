import FadeUp from "../FadeUp.jsx";

export default function OurStory() {
    return(
        <>

            <FadeUp>
                <section className="px-5 py-16 lg:py-25 w-full h-[65vh] lg:h-[90vh] md:px-8 lg:px-30">
                    <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Our Story</p>
                    <h1 className="text-5xl font-serif sm:text-6xl font-md leading-none md:text-7xl lg:text-8xl">
                        Built in Cavite.
                        <br />
                        <span className="italic">Made for everyday wear.</span>
                    </h1>
                    <p className="text-md text-text-secondary mt-6 lg:text-lg leading-7">Trenches creates clothing that feels familiar, comfortable, and easy to come back to. Pieces designed for everyday life, not just for moments.</p>
                </section>
            </FadeUp>
        
        </>
    )
}