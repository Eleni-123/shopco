const NewArrivals = () => {
  return (
    <div>
      <h1
        className="font-bold text-5xl p-10 flex justify-center"
        style={{ fontFamily: "Integral CF" }}
      >
        New Arrivals
      </h1>
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-md px-2 py-4">Product 1</div>
        <div className="bg-gray-100 rounded-md px-2 py-4 r">Product 2</div>
        <div className="bg-gray-100 rounded-md px-2 py-4">Product 3</div>
      </div>
    </div>
  );
};
export default NewArrivals;
