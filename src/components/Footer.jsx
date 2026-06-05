import { NavLink } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <>

            <footer className="px-5 pt-20 w-full md:px-8 lg:px-12 border-t border-gray-300">
                <div className="lg:flex gap-40 mb-20">
                    <div className='lg:w-sm mb-10'>
                        <h2 className='text-4xl md:text-5xl font-serif'>Simple clothes, <span className="italic">for everyday wear.</span></h2>
                        <p className='text-md text-text-secondary mt-4 mb-6'>Well-made streetwear in small batches. Shipped from our studio worldwide.</p>
                        <div className='flex gap-1.5'>
                            <a href='https://www.facebook.com/share/1LG1Db5hJy/'>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="text-xl text-neutral-900 py-1.5 px-1 border rounded-[50%] border-neutral-200 hover:bg-neutral-100"
                                />
                            </a>
                            <a href='https://www.instagram.com/trenchesfromthagroundup'>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-xl text-neutral-900 py-1.5 px-1 border rounded-[50%] border-neutral-200 hover:bg-neutral-100"
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-30'>
                        <div className='flex flex-col gap-1.5'>
                            <p className='text-xs text-gray-500 uppercase mb-3'>Product</p>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                All Products
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                T-Shirts
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Slippers
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Underwears
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Shorts
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Jerseys
                            </NavLink>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <p className='text-xs text-gray-500 uppercase mb-3'>Quick Links</p>
                            <NavLink 
                                to="/" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Home
                            </NavLink>

                            <NavLink 
                                to="/products" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                Product
                            </NavLink>
                            
                            <NavLink 
                                to="/about" 
                                className='text-gray-600 text-md hover:text-gray-900'
                            >
                                About
                            </NavLink>
                            
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <p className='text-xs text-gray-500 uppercase mb-3'>Contact</p>
                            <div className='flex items-center gap-2'>
                                <Mail size={18}/>
                                <p className='text-sm'>ejnavorpolido54@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MapPin size={18}/>
                                <p className='text-sm'>Salawag, Dasmariñas City, Cavite</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Phone size={18}/>
                                <p className='text-sm'>+63-910-638-6395</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Clock size={18}/>
                                <p className='text-sm'>8AM - 10PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between border-t border-gray-500 border-dashed py-3'>
                    <p className='text-gray-500 sm:text-xs text-[10px]'>© 2026 Trenches. All rights reserved.</p>
                    <p className='text-gray-500 sm:text-xs text-[10px]'>Designed in Cavite · Made worldwide.</p>
                </div>
            </footer>

        </>
    )
}