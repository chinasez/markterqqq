import BenefitCard from "./BenefitCard";


const benefits = [
    {
        icon: '/images/homepage1/icons/fastDelivery.svg',
        title: 'Free Shipping',
        subtitle: 'Order above $200',
    },
    {
        icon: '/images/homepage1/icons/money.svg',
        title: 'Money-back',
        subtitle: '30 days guarantee',
    },
    {
        icon: '/images/homepage1/icons/lock01.svg',
        title: 'Secure Payments',
        subtitle: 'Secured by Stripe',
    },
    {
        icon: '/images/homepage1/icons/call.svg',
        title: '24/7 Support',
        subtitle: 'Phone and Email support',
    },
];

export default function BenefitsGrid() {
    return(
    <ul className="arrivals__bot-list grid grid-cols-4 gap-x-[24px]  mx-auto w-fit">
        {benefits.map((item, index) => (
            <BenefitCard key={index} {...item} />
        ))}
    </ul>
    )
}