import { useState } from "react";

const SignUpBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <aside
      aria-label="Promotional Offer"
      className="bg-black flex justify-center relative items-center w-full"
    >
      <p className=" text-white text-center text-sm ">
        Sign up and get 20% off to your first order.{" "}
        <a
          href="#"
          className="underline cursor-pointer font-medium hover:text-gray-200 transition-colors"
        >
          Sign Up Now
        </a>
      </p>

      <button
        className="text-white absolute right-2 cursor-pointer hidden sm:block hover:opacity-75 transition-opacity"
        onClick={() => setIsVisible(false)}
        aria-label="Close promotion banner"
      >
        ✕
      </button>
    </aside>
  );
};
export default SignUpBanner;
