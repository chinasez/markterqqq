'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
    const router = useRouter();
    const [form, setForm ] = useState({ 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev, [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

    if (form.password.length < 6) {
        setError('Пароль должен быть не менее 6 символов');
        setLoading(false);
        return;
    }
    
    if (!form.email || !form.password) {
        setError('Email и пароль обязательны');
        setLoading(false);
        return;
    }

    const res = await fetch('/api/auth/signUp', {
        method: 'POST',
        body: JSON.stringify({
            email: form.email,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json();
    console.log(data)
    router.push('/sign-in');
    }
    

    const [showPassword, setShowPassword] = useState(false);
    return(
        <main className="flex flex-col xl:flex-row items-center justify-center min-h-screen w-full px-6 sm:px-12 xl:px-[160px] gap-8">
            <div className="w-full max-w-[456px] relative">
                <a href="/"><Logo className="reg__logo absolute top-[5%] left-[37%] z-10 w-32"/></a>
                <img className="w-full h-auto max-h-[511px] object-cover rounded-md" src="/images/homepage1/coachReg.jpg" height={1080} width={736} alt="" />
            </div>
            <div className="w-full max-w-[456px] flex justify-center items-center">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="pb-12 ">
                        <h2 className="text-[32px] sm:text-[40px] leading-[44px] font-poppins font-medium pb-[24px]">Sign up</h2>
                        <p className="mt-1 text-sm text-gray-600">
                        Already have an account? <a href="/sign-in" className="text-[#38CB89] font-medium">Sign in</a>
                        </p>

                        <div className="mt-10 space-y-6"> 

                        <div className="border-b-1 border-gray-900/10">
                            <div className="mt-2">
                            <input onChange={handleChange} value={form.firstName} type="text" name="firstName" placeholder="First name" id="first-name" autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600" />
                            </div>
                        </div>

                        <div className="border-b-1 border-gray-900/10">
                            <div className="mt-2">
                            <input onChange={handleChange} value={form.lastName} type="text" name="lastName" placeholder="Last name" id="last-name" autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600" />
                            </div>
                        </div>

                        <div className="border-b-1 border-gray-900/10">
                            <div className="mt-2">
                                <input onChange={handleChange} value={form.email} type="email" name="email" placeholder="Email address" id="email" autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600" />
                            </div>
                        </div>

                        <div className="border-b-1 border-gray-900/10 mb-8">
                            <div className="mt-2 relative">
                                <input onChange={handleChange} value={form.password} type={showPassword ? 'text' : 'password'} placeholder="Password"  name="password" id="password"
                                className="block w-full rounded-md bg-white px-3 py-2 pr-12 text-base text-gray-900  border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} 
                                className="absolute right-3 top-1/2 -translate-y-1/2" tabIndex={-1}>
                                    <img src={showPassword ? "/images/homepage1/icons/eye-off.svg" : "/images/homepage1/icons/eye.svg"} 
                                    alt={showPassword ? "Hide password" : "Show password"} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-start mb-8 gap-2">
                            <input id="agree" name="agree" type="checkbox" className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                <label htmlFor="agree" className="text-sm text-gray-700 leading-6">
                                    I agree with &nbsp;
                                    <a href="/privacy-policy" className="text-indigo-600 hover:underline">
                                    Privacy Policy
                                    </a>
                                    &nbsp;and&nbsp;
                                    <a href="/terms-of-use" className="text-indigo-600  hover:underline">
                                    Terms of Use
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button type="submit"
                        className="mt-8 w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200 text-base font-medium">
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}