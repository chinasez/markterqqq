import Image from "next/image";
import ArrivalsSlider from "./arrivals/ArrivalSlider";
import ArrowIcon from "./ArrowIcon";
import CategoriesSection from "./category/CategoriesSection";
import ArrivalsSection from "./arrivals/ArrivalsSection";
import PricesSection from "./prices/PricesSection";
import ArticlesSection from "./ArticlesSection";
import SignUpSection from "./SignUpSection";

const articles = [
    {
        img: '/images/homepage1/Article1.jpg',
        name: '7 ways to decor your home',
    },
    {
        img: '/images/homepage1/Article2.jpg',
        name: 'Kitchen organization',
    },
    {
        img: '/images/homepage1/Article3.jpg',
        name: 'Decor your bedroom',
    },
]


export default function Main() {
    return (
        <main className="w-full ">
            <div className="container w-full mx-auto max-w-[1440px] px-4 md:px-20 lg:px-40  relative overflow-visible">
                <CategoriesSection />
                <ArrivalsSection />
                <PricesSection />
                <ArticlesSection articles={articles}/>
                <SignUpSection />
            </div>
        </main>
    )
}

