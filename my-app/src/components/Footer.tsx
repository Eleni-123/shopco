import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex justify-between border-b-2 border-gray-200 px-12 py-8 items-stretch">
        <div className="flex-col flex wrap items-stretch">
          <div className="logo font-bold text-3xl cursor-pointer ">SHOP.CO</div>

          <div>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>

          <div className="flex space-x-3 justify-start">
            <Facebook className="rounded-lg border-1 border-black place-self-center" />
            <Twitter className="rounded-lg border-1 border-black" />
            <Github className="rounded-lg border-1 border-black" />
            <Instagram className="rounded-lg border-1 border-black" />
          </div>
        </div>

        <ul>
          <li>COMPANY</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
        <ul>
          <li>HELP</li>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditons</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>FAQ</li>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
        <ul>
          <li>RESOURCES</li>
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li>How to - Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>

      <div className="flex justify-between px-12  pt-6 pb-10">
        <p>Shopco &copy; 2000-2023. All rights Reserved.</p>
        <div className="flex flex-wrap space-x-3">
          <button className="bg-white">
            <img src="/images/Visa.png" alt="Visa" />
          </button>
          <button className="bg-white">
            <img src="/images/Mastercard.png" alt="Mastercard" />
          </button>
          <button className="bg-white">
            <img src="/images/Paypal.png" alt="Paypal" />
          </button>
          <button className="bg-white">
            <img src="/images/Apple_Pay.png" alt="Apple Pay" />
          </button>
          <button className="bg-white">
            <img src="/images/G_Pay.png" alt="Google Pay" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
