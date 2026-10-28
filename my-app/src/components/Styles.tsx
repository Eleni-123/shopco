const Styles = () => {
  return (
    <div className="bg-gray-100 rounded-3xl pl-10 pr-10 pb-10 pt-10">
      <div className="w-full text-center font-bold text-4xl">
        <h2>BROWSE BY dress STYLE</h2>
      </div>

      <div className="flex grow w-full mb-4">
        <div className="w-full">
          <div>Casual</div>
          <img
            src="/images/casual.png"
            alt="Casual Style"
            className="w-full rounded-3xl "
          />
        </div>

        <div className="w-full">
          <div>Formal</div>
          <img
            src="/images/formal.png"
            alt="Formal Style"
            className="w-full rounded-3xl"
          />
        </div>
      </div>

      <div className="flex grow">
        <div className="w-full">
          <div>Party</div>
          <img
            src="/images/party.png"
            alt="Party Style"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="w-full">
          <div>Gym</div>
          <img
            src="/images/gym.png"
            alt="Gym Style"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Styles;
