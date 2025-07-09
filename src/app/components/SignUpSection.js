'use client'
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function SignUpSection() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter your email address');
            return;
        }

        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
            !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
            !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            setMessage('Email service is not configured properly');
            return;
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                to_email: email,
                unsubscribe_link: isMounted ? `${window.location.origin}/unsubscribe?email=${encodeURIComponent(email)}` : ''
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
            setMessage('Thank you! Check your email for confirmation.');
            setEmail('');
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            setMessage('Subscription failed. Please try again later.');
        });
    }

    return (
        <section className="SignUp relative z-10 h-[500px] flex flex-col justify-center items-center text-center my-auto">
            <div className="relative z-10 max-w-[600px] w-full mb-[32px]">
                <h2 className="font-poppins text-[28px] sm:text-[40px] leading-[44px] font-medium mb-2">Join Our Newsletter</h2>
                <p className="font-inter font-normal leading-[30px] text-[14px] sm:text-[18px]">
                    Sign up for deals, new products and promotions
                </p>
            </div>
        
            <div className="relative">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="sm:w-[488px] w-[300px] border-b-1 border-[#6C7275] px-4 py-3 pr-[100px] text-black"
                        required
                    />
                    <button 
                            type="submit"
                            className={`absolute right-3 top-1/2 -translate-y-1/2 text-black font-medium px-4 py-2 cursor-pointer transition ${
                                message ? '-translate-y-[83%]' : ''
                            }`}
                        >
                            Sign Up
                        </button>
                </form>
                {message && <p className="mt-2 text-sm">{message}</p>}
            </div>
        
            <div
                className="SignUp-bg absolute left-1/2 top-0 -translate-x-1/2 w-screen h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/homepage1/FooterNew.jpg')" }}
            ></div>
        </section>
    );
}