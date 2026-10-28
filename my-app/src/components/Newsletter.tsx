import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-black rounded-3xl flex justify-around flex-wrap p-12">
      <div>
        <p className="text-white font-bold text-3xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>

      <div>
        <div className="flex bg-white text-black px-6 py-2 rounded-3xl mb-4">
          <Mail />
          <input type="email" placeholder="Enter your email address" />
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-3xl">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
