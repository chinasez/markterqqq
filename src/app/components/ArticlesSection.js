import ArrowIcon from './ArrowIcon';


export default function ArticlesSection({ articles }) {
  return (
    <section className="articles mb-20 px-4">

      <div className="articles__title flex flex-col gap-4 sm:flex-row sm:justify-between w-full mb-12">
        <h3 className="max-w-[149px] tracking-[-0.4px] font-poppins font-medium text-[32px] sm:text-[40px] leading-[44px]">
          Articles
        </h3>
        <div className="border-b-2 border-black w-max self-start sm:self-end">
          <a href="/" className="flex items-center gap-2">
            More Articles <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="articles__content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {articles.map((item, i) => (
          <div key={i} className="w-[90%] max-w-[357px] h-[413px]">
            <img className="mb-6 w-full h-auto" src={item.img} alt={item.name} />
            <h4 className="font-poppins mb-2 font-medium text-[20px] leading-[28px]">{item.name}</h4>
            <a href="/" className="flex font-inter items-center border-b-2 w-max gap-2">
              Read more <ArrowIcon />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}