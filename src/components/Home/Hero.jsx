import Button from '../Button.jsx';
import FadeUp from "../FadeUp.jsx";
import { ArrowRight } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Truck } from "lucide-react";

function Hero() {
    return (
        <>
            <FadeUp>
            <section className="w-full px-5 py-2 flex-row gap-10 lg:gap-25 items-center md:min-h-[87vh] md:flex md:px-8 lg:px-12">
                <div className="mt-10 md:mt-0">
                    <p className="text-sm text-gray-600 font-light mb-5">Fresh Drops Available</p>
                    <h1 className="text-5xl font-serif sm:text-6xl font-md leading-none md:text-7xl lg:w-100">Simple clothes, <span className="italic">made to last.</span></h1>
                    <p className="text-md text-text-secondary mt-6 leading-7">From bold graphic tees to everyday essentials, every piece is made for comfort, confidence, and everyday streetwear style.</p>

                    <div className="flex items-center gap-3">
                        <Button 
                            to="/products"
                            label="View Products" 
                            icon={<ArrowRight 
                            size={18}/>} 
                            variant="primary" 
                            className="mt-6 flex items-center gap-2 pr-4 pl-5 py-2"
                        />

                        <Button 
                            to="/about"
                            label="Our Story" 
                            variant="secondary" 
                            className="mt-6" 
                        />
                    </div>

                    <div className='mt-5 mb-8 md:mt-10'>
                        <div className="flex align-items-center relative">
                            <div className="flex items-center relative">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                                    <img 
                                        src="/src/assets/images/avatar2.jpg" 
                                        alt="Trenches Logo" 
                                        className="w-9 h-9 rounded-full" 
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center absolute left-8 bg-white">
                                    <img 
                                        src="/src/assets/images/avatar1.jpg" 
                                        alt="Trenches Logo" 
                                        className="w-9 h-9 rounded-full" 
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center absolute left-16 bg-white">
                                    <img 
                                        src="/src/assets/images/avatar3.jpg" 
                                        alt="Trenches Logo" 
                                        className="w-9 h-9 rounded-full" 
                                    />
                                </div>
                            </div>

                            <div className='ml-4 mt-0.5 absolute left-24'>
                                <p className="text-sm">100+</p>
                                <p className="text-xs text-gray-600 font-light">satisfied customers</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <img 
                            src="/src/assets/images/hero-bg.jpg" 
                            alt="Hero Image" 
                            className="h-100 sm:h-120 md:h-130 w-full md:w-180 object-cover rounded-xl md:rounded-none" 
                        />

                        <div className="bg-white shadow p-3 rounded-xl flex items-center absolute top-8 -right-2 w-55">
                            <div className="bg-red-100 h-10 w-10 p-2.5 rounded-xl flex items-center justify-center">
                                <RotateCcw className='h-5 w-5 text-accent'/>
                            </div>

                            <div className="ml-3">
                                <p className="text-sm font-medium">3 Days Refund</p>
                                <p className="text-xs text-gray-600 font-light">Money back guarantee</p>
                            </div>
                        </div>

                        <div className="bg-white shadow shadow-gray-500 p-3 rounded-xl flex items-center absolute bottom-5 -left-2 w-50">
                            <div className="bg-red-100 h-10.5 w-10.5 p-2.5 rounded-xl flex items-center justify-center">
                                <Truck className='h-5.5 w-5.5 text-accent'/>
                            </div>

                            <div className="ml-3">
                                <p className="text-sm font-medium">Order delivered</p>
                                <p className="text-xs text-gray-600 font-light">in 30 minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </FadeUp>

        </>
    )
}
export default Hero