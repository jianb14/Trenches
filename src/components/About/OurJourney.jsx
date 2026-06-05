import FadeUp from "../FadeUp.jsx";

export default function OurJourney() {
    return(
        <>

            <FadeUp>
                <section className="py-32 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto">
                    <p className='text-xs sm:text-sm text-text-secondary uppercase mb-8'>Our Journey</p>
                        <div className="space-y-16">
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="text-3xl font-light">Today</h3>
                                <p className="text-text-secondary">
                                    We're continuing to create pieces that feel authentic,
                                    comfortable, and built to last.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="text-3xl font-light">2024</h3>
                                <p className="text-text-secondary">
                                    We released our first collection and began building a local
                                    community around simple, everyday essentials.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="text-3xl font-light">2023</h3>
                                <p className="text-text-secondary">
                                    Trenches started as a small idea between friends with one goal:
                                    create clothing we'd genuinely want to wear every day.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeUp>
        </>
    )
}