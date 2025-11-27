const MainSection = () => {
  return (
    <section>
      <div className="relative aspect-[3/2]">
        <img
          src="/images/fashionCouple.jpg"
          alt="Fashion Couple"
          className="object-cover object-left"
        />

        <div className="absolute inset-0 text-left px-6 py-10">
          <div>
            <p className="font-bold text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <p className="text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white rounded-2xl py-2 px-2.5 cursor-pointer">
              Shop Now
            </button>
          </div>

          <div className="flex">
            <div className="border-r-2 border-gray-300 p-2">
              <h1 className="font-bold text-4xl">200+</h1>
              <p>International Brands</p>
            </div>
            <div className="border-r-2 border-gray-300 p-2">
              <h1 className="font-bold text-4xl">2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div className="p-2">
              <h1 className="font-bold text-4xl">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainSection;
