// import { increment } from "@/store/reducers/counterSlice";
// import { store, type RootState } from "@/store/store";
import { Sparkles } from "lucide-react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

const MainSection = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // console.log("Rendered MainSection with count:", count);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(increment());
  //   console.log("Current count value:", count, store.getState().counter.value);
  // }, [dispatch, count]);
  return (
    <section>
      <div className="relative overflow-visible">
        <div
          className="max-w-7xl mx-auto px-6  flex items-center"
          style={{
            backgroundColor: "rgba(242, 240, 241, 1)",
            // maxHeight: "780px",
          }}
        >
          {/* Left column - content */}
          <div className="w-1/2 flex justify-start">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <p className="font-bold text-4xl md:text-6xl leading-tight">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </p>
              </div>

              <div className="flex items-start justify-between">
                <p className="text-base text-gray-600 max-w-xl">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <Sparkles
                  className="text-black fill-black w-7 h-7"
                  stroke="black"
                />
              </div>

              <div>
                <button className="bg-black text-white rounded-2xl py-2 px-6 cursor-pointer">
                  Shop Now
                </button>
              </div>

              <div className="flex space-x-6 mt-8">
                <div className="border-r-2 border-gray-300 pr-6">
                  <h1 className="font-bold text-4xl">200+</h1>
                  <p>International Brands</p>
                </div>
                <div className="border-r-2 border-gray-300 pr-6">
                  <h1 className="font-bold text-4xl">2,000+</h1>
                  <p>High-Quality Products</p>
                </div>
                <div>
                  <h1 className="font-bold text-4xl">30,000+</h1>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className=" w-1/2 flex justify-center">
            <div className="w-3/4 ">
              <Sparkles
                className="absolute end-50 top-50 text-black fill-black w-7 h-7"
                stroke="black"
              />
              <img
                src="/images/fashionCouple.jpg"
                alt="Fashion Couple"
                className="object-cover aspect-auto "
                // style={{ height: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8">
        <div className="text-white flex justify-evenly">
          <img src="/images/versace.png" alt="versace logo" />
          <img src="/images/zara.png" alt="zara logo" />
          <img src="/images/gucci.png" alt="gucci logo" />
          <img src="/images/prada.png" alt="prada logo" />
          <img src="/images/calvin_klein.png" alt="calvin klein logo" />
        </div>
      </div>
    </section>
  );
};
export default MainSection;
