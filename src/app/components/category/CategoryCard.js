import ArrowIcon from "../ArrowIcon";

export default function CategoryCard({ title, image, position = 'top', link = '/'}) {
    const isTop = position === 'top';

    const wrapperClass = `categories__item ${isTop ? 'block mr-[24px] w-full  max-w-[548px] max-h-[664px] ' : 
        'flex flex-col w-[548px] h-[319px]'} bg-cover bg-center relative`

    const textPosition = isTop ? 'categories__item-text-1 left-[48px] top-[48px]' : 'categories__item-text-2 left-[48px] bottom-1/2 xl:bottom-[80px]';
    const contentPosition = isTop  ? 'categories__item-content-1 left-[48px] top-[98px]' : 'categories__item-content-2 left-[48px] bottom-1/3 xl:bottom-[40px]';
    return(
        <a href={link}
            className={`categories__item relative overflow-hidden w-full max-w-[548px] ${isTop ? 'aspect-[548/664]' : 'aspect-[548/319]'}`}
            style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <p className={`absolute ${textPosition} font-poppins text-[34px] font-medium leading-[38px]`}>
                {title}
            </p>
            <div className={` absolute ${contentPosition} flex items-center border-b-2 border-black`}>
                <p className="font-inter text-[16px] font-medium leading-[28px] mr-1">Shop now</p>
                <ArrowIcon />
            </div>
        </a>
    )
}