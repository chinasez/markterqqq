import ArrowIcon from "../ArrowIcon";

export default function PricesSection() {
    return (
        <section className="prices grid lg:grid-cols-2 grid-cols-1 relative mb-20">
            <div
                className="prices__img h-[300px] lg:h-[532px] bg-cover bg-center w-full"
                style={{ backgroundImage: "url('/images/homepage1/roomLower.jpg')" }}
            ></div>

            <div className="prices__content bg-[#F3F5F7] w-full flex flex-col justify-center px-6 py-10 lg:px-[72px] lg:pt-[140px]">
                <div className="prices__content-text max-w-[452px] mx-auto lg:mx-0">
                    <p className="mb-4 font-inter font-bold text-[#377DFF] leading-[16px]">
                    SALE UP TO 35% OFF
                    </p>
                    <h2 className="mb-4 font-poppins font-medium leading-[44px] text-[32px] lg:text-[40px]">
                    HUNDREDS of New lower prices!
                    </h2>
                    <p className="mb-6 font-inter font-normal text-[18px] lg:text-[20px] leading-[28px] lg:leading-[32px]">
                    It’s more affordable than ever to give every room in your home a stylish makeover
                    </p>
                    <a
                    className="flex items-center font-inter text-[16px] leading-[28px] border-b-2 w-max"
                    href="/"
                    >
                    Shop Now
                    <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}