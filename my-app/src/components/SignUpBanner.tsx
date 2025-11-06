import React, { useState } from "react";

const SignUpBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="SignUp bg-black w-[1440px] flex justify-center items-center w-full">
      <p className=" text-white text-center text-sm ">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline cursor-pointer font-medium">
          Sign Up Now
        </span>
      </p>
      <button
        className="absolute right-4 text-white"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        ✕
      </button>
    </div>
  );
};
export default SignUpBanner;
