import React, { useState } from "react";

const SignUpBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="SignUp bg-black flex justify-center relative items-center w-full">
      <p className=" text-white text-center text-sm ">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline cursor-pointer font-medium">
          Sign Up Now
        </span>
      </p>

      <button
        className="text-white absolute right-2 cursor-pointer"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        ✕
      </button>
    </div>
  );
};
export default SignUpBanner;
