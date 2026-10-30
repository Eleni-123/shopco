const Styles = () => {
  return (
    <div className="bg-gray-100 rounded-3xl pl-10 pr-10 pb-10 pt-10">
      <div className="w-full text-center font-bold text-4xl mb-20">
        <h2>BROWSE BY dress STYLE</h2>
      </div>

      <div className="flex grow w-full mb-4 gap-4">
        <div className="w-full h-[250px] relative">
          <div className="absolute -top-0 -left-0 font-bold text-3xl">
            <h3>Casual</h3>
          </div>
          <img
            src="/images/casual.png"
            alt="Casual Style"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        <div className="w-full h-[250px] relative ">
          <div className="absolute -top-0 -left-0 font-bold text-3xl">
            <h3>Formal</h3>
          </div>
          <img
            src="/images/formal.png"
            alt="Formal Style"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>

      <div className="flex grow gap-4">
        <div className="w-full h-[250px] relative">
          <div className="absolute -top-0 -left-0 font-bold text-3xl">
            <h3>Party</h3>
          </div>
          <img
            src="/images/party.png"
            alt="Party Style"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        <div className="w-full h-[250px] relative">
          <div className="absolute -top-0 -left-0 font-bold text-3xl">
            <h3>Gym</h3>
          </div>
          <img
            src="/images/gym.png"
            alt="Gym Style"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Styles;
