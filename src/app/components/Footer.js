import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer w-screen text-white bg-black">
      <div className="footer__wrap pt-[80px] px-4 md:px-12 lg:px-[160px] pb-[32px] flex flex-col gap-12">

        <div className="footer__header flex flex-col sm:flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left">

          <div className="footer__header-items flex flex-col items-center md:items-start gap-2">
            <div className="footer__logo logo flex items-center w-max h-[24px]">
              <Logo className="text-white" />
            </div>
            <div className="font-inter text-[14px] leading-[22px]">
              Gift & Decoration Store
            </div>
          </div>


          <ul className="footer__header-nav flex flex-col sm:flex-col md:flex-row gap-3 md:gap-10 font-inter text-sm">
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">Product</a>
            <a href="/">Blog</a>
            <a href="/">Contact Us</a>
          </ul>
        </div>

        <div className="footer__bottom border-t border-white/20 w-full pt-6 flex flex-col items-center gap-4 text-[14px] text-center">
          <div className="flex flex-col sm:flex-col md:flex-row gap-2 md:gap-7">
            <p>© 2023 3legant. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>

          <div className="flex gap-6">
            <a href="/">
              <img
                src="/images/homepage1/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="/">
              <img src="/images/homepage1/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="/">
              <img src="/images/homepage1/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
