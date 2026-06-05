import { Palette, Puzzle, Rocket } from "lucide-react"
import FadeUp from "../FadeUp.jsx";
import mockup from "/src/assets/images/trenches-mockup.png";

export default function OurStudio() {
    return(
        <>

            <FadeUp>
                <section className="py-32 px-6 md:px-16">

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid- gap-16 items-center">
                        <img 
                            className="order-2 lg:order-1 w-full h-auto md:h-120" 
                            src={mockup} 
                            alt="Trenches Mockup"
                        />

                        <div className="flex flex-col justify-center order-1 lg:order-2">
                            <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>Our Studio</p>
                            <h2 className="text-5xl font-serif font-medium sm:text-6xl mb-6">
                                Small space.
                                <br />
                                Big ideas.
                            </h2>
                            <p className="text-text-secondary mb-8">
                                This is where every piece begins. A space for
                                ideas, sketches, and late nights. Driven by
                                passion and purpose, built to create
                                something real.
                            </p>
                            
                            <div className="flex gap-10 flex-col sm:flex-row">
                                <div>
                                    <Palette 
                                        size={30}
                                        className="mb-2 text-accent"
                                    />
                                    <p className="font-bold mb-2">Design</p>
                                    <p className="text-sm text-text-secondary">Conceptualizing <br/> every detail.</p>
                                </div>
                                <div>
                                    <Puzzle
                                        size={30}
                                        className="mb-2 text-accent"
                                    />
                                    <p className="font-bold mb-2">Create</p>
                                    <p className="text-sm text-text-secondary">Turning ideas into <br/> quality garments.</p>
                                </div>
                                <div>
                                    <Rocket 
                                        size={30}
                                        className="mb-2 text-accent"
                                    />
                                    <p className="font-bold mb-2">Deliver</p>
                                    <p className="text-sm text-text-secondary">Bringing our pieces <br/> to the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeUp>
            
        </>
    )
}