import FadeUp from "../FadeUp.jsx";
import model1 from "/src/assets/images/model-1.jpg";
import model2 from "/src/assets/images/model-2.jpg";

export default function TheTeam() {
    return(
        <>

            <FadeUp>
                <section className='px-5 pt-20 pb-40 w-full md:px-8 lg:px-12'>
                    <p className='text-xs sm:text-sm text-text-secondary uppercase mb-3'>The Team</p>
                    <h2 className='text-4xl font-serif font-medium sm:text-5xl md:text-6xl'>The people behind it.</h2>

                    <div className='mt-8 flex gap-8 flex-col sm:flex-row'>
                        <div>
                            <img 
                                src={model1} 
                                alt="Model 1"
                                className="w-full h-80 object-cover mb-2 sm:h-100 brightness-80 hover:brightness-100 transition duration-300" 
                            />

                            <div className=''>
                                <p className='text-md font-medium mb-1'>Emmanuel James Polido</p>
                                <p className='text-xs uppercase text-text-secondary'>FOUNDER & CREATIVE DIRECTOR</p>
                            </div>
                        </div>

                        <div>
                            <img 
                                src={model2}  
                                alt="Model 2"
                                className="w-full h-80 object-cover mb-2 sm:h-100 brightness-80 hover:brightness-100 transition duration-300" 
                            />

                            <div className=''>
                                <p className='text-md font-medium mb-1'>Jezreel Sullano</p>
                                <p className='text-xs uppercase text-text-secondary'>PARTNER</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeUp>
            
        </>
    )
}