"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";

export default function signInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: ''})
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    const res = await fetch('/api/auth/signIn', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    
    if (!res.ok) return;
    localStorage.setItem('token', data.token);
    router.push("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex flex-col xl:flex-row items-center justify-center min-h-screen w-full px-6 sm:px-12 xl:px-[160px] gap-8">
      <div className="w-full max-w-[456px] relative">
        <a href="/"><Logo className="reg__logo absolute top-[5%] left-[37%] z-10 w-32"/></a>
        <img
          src="/images/homepage1/coachReg.jpg"
          alt=""
          className="w-full h-auto max-h-[511px] object-cover rounded-md"
        />
      </div>

      <div className="w-full max-w-[456px] flex justify-center items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="pb-12">
            <h2 className="text-[32px] sm:text-[40px] leading-[44px] font-poppins font-medium pb-[24px]">
              Sign in
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Don’t have an account yet?{" "}
              <a href="/sign-up" className="text-[#38CB89] font-medium">
                Sign Up
              </a>
            </p>

            <div className="mt-10 space-y-6">
              <div className="border-b border-gray-900/10">
                <div className="mt-2">
                  <input
                    type="text"
                    name="Email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="Your email"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div className="border-b border-gray-900/10 mb-8">
                <div className="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    placeholder="Password"
                    name="password"
                    className="block w-full rounded-md bg-white px-3 py-2 pr-12 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    tabIndex={-1}
                  >
                    <img
                      src={
                        showPassword
                          ? "/images/homepage1/icons/eye-off.svg"
                          : "/images/homepage1/icons/eye.svg"
                      }
                      alt={showPassword ? "Hide password" : "Show password"}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between w-full mb-8 gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 leading-6 cursor-pointer">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  Remember me
                </label>
                <a href="/sign-in" className="text-sm text-indigo-600">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200 text-base font-medium"
            >
              Sign in
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
    </main>
  );
}
