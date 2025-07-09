import ArrivalTitle from "./ArrivalTitle";
import ArrivalsSlider from "./ArrivalSlider";
import BenefitsGrid from "./BenefitsGrid";

export default function ArrivalsSection() {
    return(
    <section className="arrivals mb-12">
        <ArrivalTitle />
        <div className="arrivals__slider mb-12">
            <ArrivalsSlider />
        </div>
        <div className="arrivals__bot">
            <BenefitsGrid />
        </div>
    </section>
    )
}