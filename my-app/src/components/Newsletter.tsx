import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-black rounded-3xl flex justify-around flex-wrap gap-8 p-12">
      <div className="w-full md:flex-1">
        <p className="text-white font-bold text-3xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>

      <div className="w-full md:max-w-sm">
        <div className="mb-4 flex h-12 w-full items-center gap-2 rounded-3xl bg-white px-6 text-black">
          <Mail size={16} className="shrink-0" />
          <input
            className="min-w-0 flex-1 bg-transparent outline-none"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-3xl w-full h-12">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
