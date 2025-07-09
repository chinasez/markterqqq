"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";
import SingleImagesSlider from "./SingleSlide";


export default function Header() {
  const [hasToken, setHasToken] = useState(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, [])

  async function handleLogout() {
    localStorage.removeItem('token');
    router.push('/sign-in');
  };
  

  return (
    <>
      <header className="">
        <div className="wrapper max-w-[1440px] mx-auto sm:px-6 md:px-[80px]  xl:px-[160px] py-[18px] px-8 w-full">
          <div className="header-top flex items-center h-[60px] justify-between mb-[18px]">
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden -translate-y-[2px] mr-2 cursor-pointer"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <a
                href="/"
                aria-label="Go to homepage"
                className="logo header-top_logo"
              >
                <Logo className="text-black" />
              </a>
        <div className="flex flex-col text-sm">
          {hasToken ? ( <button
            onClick={handleLogout}
            className="text-blue-600 hover:underline text-xs mt-1 cursor-pointer -translate-y-1 ml-2"
          >
            sign out
          </button>) : (
            <a href="/sign-in"className="text-blue-600 hover:underline text-xs mt-1 cursor-pointer -translate-y-1 ml-2" >sign in</a>
          )}
        </div>
            </div>
            <nav className="header-top__nav hidden md:block">
              <ul className="header-top__nav-list flex items-center gap-[24px] lg:gap-[40px] text-sm sm:text-base font-spaceGrotesk ">
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Product</a>
                <a href="/">Contact Us</a>
              </ul>
            </nav>
            <div className="header-top__btns flex items-center gap-[12px] sm:gap-[16px]">
              <button type="button" className="cursor-pointer">
                <Image
                  className="header-top__btns-item"
                  src="/images/homepage1/icons/search02.svg"
                  alt=""
                  width={24}
                  height={24}
                ></Image>
              </button>
              <button type="button" className="cursor-pointer">
                <Image
                  className="header-top__btns-item"
                  src="/images/homepage1/icons/user-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                ></Image>
              </button>
              <button type="button" className="cursor-pointer" onClick={() => router.push("/cart")}>
                <Image
                  className="header-top__btns-item"
                  src="/images/homepage1/icons/shoppingbag.svg"
                  alt=""
                  width={24}
                  height={24}
                ></Image>
              </button>
            </div>
          </div>
          <div className="header-bot mb-[40px]">
            <SingleImagesSlider />
            <div className="header-bot__content justify-center flex flex-col lg:flex-row items-center lg:items-center mt-6 lg:mt-0">
              <div className="header-bot__content-title leading-tight w-auto lg:leading-[76px] mr-[24px]  font-poppins tracking-[-1px] lg:tracking-[-2px] font-semibold mb-4 lg:mb-0 lg:mr-[24px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] max-w-[650px]">
                  Simply Unique<span className="text-[#6C7275]">/</span>
                  <br />
                  Simply Better<span className="text-[#6C7275]">.</span>
                </h1>
              </div>
              <div className="text-[#6C7275] max-w-[313px] md:max-w-full lg:max-w-[424px] text-sm sm:text-base lg:mr-[25px]">
                <span className="text-[#343839] inline-block">3legant</span> is
                a gift & decorations store based in HCMC, Vietnam. Est since
                2019.{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 backdrop-blur-sm bg-black/30 transition-opacity duration-300 bg-opacity-50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-[320px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <Logo />
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md text-sm"
          />

          <nav className="flex flex-col gap-4">
            <a href="/" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="/shop" className="text-gray-700 hover:text-black">
              Shop
            </a>
          </nav>

          <hr />

          <a href="/cart" className="text-gray-700 hover:text-black">
            Cart
          </a>

          <a
            href="/sign-in"
            className="block w-full text-center bg-black text-white py-2 rounded-md"
          >
            Sign In
          </a>

          <div className="flex gap-4 pt-4">
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="#">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-6" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
