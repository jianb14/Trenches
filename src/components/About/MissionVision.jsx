import FadeUp from "../FadeUp.jsx";

export default function MissionVision() {
    return(
        <>

            <FadeUp>
                <section className="py-32 px-6 md:px-16 bg-neutral-50">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                    <div className="py-10 px-6 sm:px-10 border border-gray-400 rounded-xl bg-white">
                        <p className="uppercase tracking-widest text-xs mb-6">
                        Mission
                        </p>

                        <h3 className="text-4xl mb-4 font-light font-serif">
                        Create clothing people naturally come back to.
                        </h3>

                        <p className="text-text-secondary">
                        We aim to produce simple, high-quality pieces that become part of
                        everyday routines.
                        </p>
                    </div>

                    <div className="py-10 px-8 sm:px-10 border rounded-xl bg-white border-gray-400">
                        <p className="uppercase tracking-widest text-xs mb-6">
                        Vision
                        </p>

                        <h3 className="text-4xl mb-4 font-light font-serif">
                        Build a timeless local brand.
                        </h3>

                        <p className="text-text-secondary">
                        To become a trusted streetwear label known for authenticity,
                        simplicity, and consistency.
                        </p>
                    </div>

                    </div>

                </section>
            </FadeUp>

        </>
    )
}