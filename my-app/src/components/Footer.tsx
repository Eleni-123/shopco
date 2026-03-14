import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="logo font-bold text-3xl cursor-pointer ">SHOP.CO</div>
      <div>
        We have clothes that suits your style and which you’re proud to wear.
        From women to men.
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

      <div className="flex justify-evenly">
        <div className="flex space-x-3 justify-center items-center">
          <Facebook className="rounded-lg border-1 border-black place-self-center" />
          <Twitter className="rounded-lg border-1 border-black" />
          <Github className="rounded-lg border-1 border-black" />
          <Instagram className="rounded-lg border-1 border-black" />
        </div>

        <div className="flex space-x-3">
          <img src="/images/Visa.png" alt="Visa" />
          <img src="/images/Mastercard.png" alt="Mastercard" />
          <img src="/images/Paypal.png" alt="Paypal" />
          <img src="/images/Apple_Pay.png" alt="Apple Pay" />
          <img src="/images/G_Pay.png" alt="Google Pay" />
        </div>
      </div>

      <p>Shopco &copy; 2000-2023. All rights Reserved.</p>
    </footer>
  );
};
export default Footer;
