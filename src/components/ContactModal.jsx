import { useState } from "react";
import { Send } from "lucide-react"
import Button from "./Button.jsx";

export default function ContactModal() {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const openModal = () => {
        setOpen(true);
        setTimeout(() => setIsVisible(true), 10); // slight delay para mag-trigger ang transition
    };

    const closeModal = () => {
        setIsVisible(false);
        setTimeout(() => setOpen(false), 300);
    };

    return (
        <>
            <button
                onClick={openModal}
                className="bg-black text-white py-1.75 px-3.5 rounded-md sm:text-sm text-xs  hover:bg-neutral-800 transition-colors"
            >
                Contact Us
            </button>

            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 z-45 transition-all duration-300
                            ${isVisible ? 'bg-black/50' : 'bg-black/0'}`}
                        onClick={closeModal}
                    />

                    {/* Modal Panel */}
                    <div
                        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-999 flex flex-col justify-center px-10 py-14 shadow-2xl
                            transform transition-transform duration-300 ease-in-out
                            ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <button
                            className="absolute top-3 right-5 text-neutral-600 hover:text-black text-2xl hover:bg-neutral-100 rounded-full py-1 px-2.5"
                            onClick={closeModal}
                        >✕</button>

                        <h2 className="font-serif text-4xl text-neutral-900 mb-3 font-medium">
                            Send Us a Message
                        </h2>
                        <p className="text-neutral-500 text-sm mb-8">
                            Do you have any questions or concerns? Just fill out the form
                            below and we'll get back to you soon.
                        </p>

                        <div className="flex flex-col gap-5">
                            {[
                                { label: "Full Name", name: "name", placeholder: "Juan Dela Cruz", type: "text" },
                                { label: "Email", name: "email", placeholder: "example@gmail.com", type: "email" },
                            ].map(({ label, name, placeholder, type }) => (
                                <div key={name} className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-neutral-700">{label}</label>
                                    <input
                                        name={name}
                                        value={form[name]}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        type={type}
                                        className="border border-neutral-300 rounded-md px-4 py-3 text-sm placeholder-neutral-400 focus:outline-none focus:border-black"
                                    />
                                </div>
                            ))}

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-700">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows={5}
                                    className="border border-neutral-300 rounded-md px-4 py-3 text-sm placeholder-neutral-400 focus:outline-none focus:border-black resize-none"
                                />
                            </div>

                            <Button 
                                icon={<Send 
                                size={18}/>} 
                                label="Send Message" 
                                variant="submit">
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}