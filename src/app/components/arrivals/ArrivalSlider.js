"use client";
import ArrowIcon from "../ArrowIcon";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {

      stars.push(
        <FaStar key={i} className="w-4 h-4 mr-1 fill-black stroke-black" />
      );
    } else if (rating >= i - 0.5) {

      stars.push(
        <FaStarHalfAlt
          key={i}
          className="w-4 h-4 mr-1 fill-black stroke-black"
        />
      );
    } else {

      stars.push(
        <FaRegStar key={i} className="w-4 h-4 mr-1 fill-white stroke-black" />
      );
    }
  }

  return <div className="flex">{stars}</div>;
};



const ArrivalsSlider = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data.sort((a,b) => a.id - b.id));
        } catch (error) {
            console.error("Ошибка загрузка товаров::", error);
        }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/signIn');
        return;
      }
      const response = await fetch('/api/cart/add', {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({productId})
      });

      if (!response.ok) {
        throw new Error('Ошибка при добавлении в корзину');
      }

      toast.success('Товар добавлен в корзину')

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  const onSlideChange = (swiper) => {
    const total = swiper.slides.length;
    const visible =
      swiper.params.slidesPerView === "auto"
        ? Math.floor(
            swiper.wrapperEl.offsetWidth / swiper.slides[0].offsetWidth
          )
        : swiper.params.slidesPerView;
    const maxIndex = total - visible;
    const ratio = swiper.activeIndex / maxIndex;
    setProgress(Math.min(100, ratio * 100));
  };
  return (
    <section className="arrivals">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Pagination, Navigation]}
        slidesPerView="auto"
        spaceBetween={24}
        breakpoints={{
          1400: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1140: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={onSlideChange}
        className="arrivals__slider w-full mb-[48px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="!w-[262px] flex justify-center">
            <div className="w-full w-max-[262px] group">
              <div
                style={{ backgroundImage: `url(${product.image})` }}
                className="w-full max-w-[262px] h-[349px] bg-cover bg-center relative"
              >
                <button
                onClick={() => handleAddToCart(product.id)}
                  className="absolute w-[230px] bottom-4 left-1/2 -translate-x-1/2 cursor-pointer
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 text-sm rounded"
                >
                  Add to cart
                </button>
              </div>
              <div className="absolute left-[16px] top-[16px] ">
                <p className="mb-[8px] rounded-xl font-inter font-bold py-[1px] px-3 bg-white">
                  NEW
                </p>
                <p className="mb-[8px] text-white font-inter font-bold rounded-lg py-[1px] px-3 bg-[#38CB89]">
                  -50%
                </p>
              </div>
            </div>
            <div className="mt-2 text-start">
              <StarRating rating={product.rating || 0} />
              <p className="text-base">{product.title}</p>
              <p className="text-sm">{product.price.toFixed(2)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 mb-10 sm:mb-0 w-full h-[4px] bg-neutral-200 relative overflow-hidden rounded">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <div className="border-b-2 sm:hidden border-black w-max self-end ">
        <a href="/" className="flex items-center">
          More Products <ArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default ArrivalsSlider;
