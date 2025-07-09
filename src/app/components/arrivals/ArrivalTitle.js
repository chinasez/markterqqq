import ArrowIcon from "../ArrowIcon";

export default function ArrivalTitle() {
    return(
    <div className="arrivals__title flex justify-between w-full mb-12">
        <h3 className="max-w-[149px] tracking-[-0.4px] font-poppins font-medium text-[40px] leading-[44px]">
            New Arrivals
        </h3>
        <div className="hidden sm:block border-b-2 border-black w-max self-end ">
            <a href="/" className="flex items-center">
                More Products <ArrowIcon />
            </a>
        </div>
    </div>
    )
}