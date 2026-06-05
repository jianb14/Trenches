import { Shirt, Sparkles, Package, SportShoe } from "lucide-react";
import FadeUp from "../FadeUp.jsx";

export default function BrandValue() {
    return(
        <>

            <FadeUp>
                <section className="px-5 py-20 mt-20 bg-white md:px-8 lg:px-12 w-full border border-gray-300">
                    <div className="grid grid-cols-1 grid-rows-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                        <div className="col-span-2 md:col-span-1 text-center">
                            <div className="text-3xl font-bold text-accent mb-5 h-12 w-12 bg-red-100 flex justify-center items-center rounded-[50%] mx-auto hover:bg-red-200">
                                <Shirt />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-black mb-4">Everyday comfort</h2>
                            <p className="text-text-secondary leading-7">Clean oversized fit</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-center">
                            <div className="text-3xl font-bold text-accent mb-5 h-12 w-12 bg-red-100 flex justify-center items-center rounded-[50%] mx-auto hover:bg-red-200">
                                <Sparkles />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-black mb-4">Bold graphics</h2>
                            <p className="text-text-secondary leading-7">Made to stand out</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-center">
                            <div className="text-3xl font-bold text-accent mb-5 h-12 w-12 bg-red-100 flex justify-center items-center rounded-[50%] mx-auto hover:bg-red-200">
                                <Package />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-black mb-4">Limited drops</h2>
                            <p className="text-text-secondary leading-7">Exclusive releases</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-center">
                            <div className="text-3xl font-bold text-accent mb-5 h-12 w-12 bg-red-100 flex justify-center items-center rounded-[50%] mx-auto hover:bg-red-200">
                                <SportShoe />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-black mb-4">Street ready</h2>
                            <p className="text-text-secondary leading-7">Built for daily wear</p>
                        </div>
                    </div>
                    
                </section>
            </FadeUp>

        </>
    )
}