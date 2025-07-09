import CategoryCard from "./CategoryCard"

export default function CategoriesSection() {
    return(
        <section className="categories flex gap-[16px] xl:gap-0 flex-col w-full max-w-[1120px] mx-auto items-center xl:flex-row mb-12">
            <CategoryCard  title="Living Room" image="/images/homepage1/coachSimply.jpg" position="top"/>
            <div className="categories__list flex  gap-4 flex-col xl:gap-[24px] xl:ml-6 grow w-full max-w-[548px]">
                <CategoryCard title="Bedroom" image="/images/homepage1/shelfSimply.jpg" position="bottom"/>
                <CategoryCard title="Kitchen" image="/images/homepage1/ToasterSimply.jpg" position="bottom"/>
            </div>
        </section>
    )
}