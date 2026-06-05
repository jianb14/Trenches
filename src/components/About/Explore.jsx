import Button from '../Button.jsx';
import FadeUp from "../FadeUp.jsx";

export default function Explore() {
    return(
        <>

            <FadeUp>
                <section className="bg-black text-white py-40 px-6">
                    <div className="max-w-4xl mx-auto">
                        <p className="uppercase tracking-[0.3em] text-xs mb-6 text-neutral-400 text-center">
                            Explore
                        </p>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl mb-8 font-serif text-center">
                            Ready to wear
                            <br />
                            what feels familiar?
                        </h2>
                        <Button 
                            to="/products"
                            label="Browse the Collection" 
                            size={18}
                            variant="accent" 
                            className="mt-6 flex items-center gap-2 pr-1 pl-5 py-2 w-46 sm:w-51 mx-auto"
                        />
                    </div>
                </section>
            </FadeUp>
        
        </>
    )
}