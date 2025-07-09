'use client'
import { useRef  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const singleSlide = [
    {
        src: '/images/homepage1/head-scroll.jpg',
        alt: 'Single slide image',
    },
    {
        src: '/images/homepage1/head-scroll.jpg',
        alt: 'Single slide image',
    },
    {
        src: '/images/homepage1/head-scroll.jpg',
        alt: 'Single slide image',
    },
];

const ArrowLeft = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66669 16H25.3334" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66669 16L14.6667 24" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66669 16L14.6667 8" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowRight = ()  => (
    <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M4.16669 10H15.8333" stroke="#141718" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.8333 15L15.8333 10" stroke="#141718" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.8333 5L15.8333 10" stroke="#141718" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const SingleImagesSlider = () => {

    const swiperRef = useRef(null);
    return(
        <div className="relative w-full mb-4 mx-auto max-w-[311px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1120px]">
            <Swiper
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                loop={true}
                navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
                }}
                pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
            }}
                className="overflow-hidden"
            >

                <button className="custom-prev hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-gray-100 transition">
                    <ArrowLeft />
                </button>
                <button className="custom-next hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-gray-100 transition">
                    <ArrowRight />
                </button>


                {singleSlide.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full aspect-[1120/536] relative">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="custom-pagination absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10"></div>
            </Swiper>
        </div>
    )
}

export default SingleImagesSlider;