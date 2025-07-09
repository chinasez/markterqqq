
export default function BenefitCard( { icon, title, subtitle }) {
    return(
    <li className="max-h-[220px] max-w-[262px] bg-[#F3F5F7] px-[28px] py-[40px] xl:px-[32px] xl:py-[48px]">
        <img className="mb-[22px]" src={icon} width={48} height={48} alt="" />
        <p className="font-poppins font-medium text-[14px] lg:text-[18px] xl:leading-[28px] xl:text-[20px] mb-1 xl:mb-2">{title}</p>
        <p className="text-[#6C7275] font-poppins text-[14px]  xl:leading-[24px] font-[400]">{subtitle}</p>
    </li>
    )
} 