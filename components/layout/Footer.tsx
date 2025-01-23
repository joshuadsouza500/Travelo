import { PersonStanding, SortAscIcon } from "lucide-react";
import Button from "../Shadui/Button";

const Footer = () => {
  return (
    <footer className="bg-Bg-green mx-1 rounded-xl text-white py-12 px-4 md:px-8">
      <div className=" max-w-7xl 2xl:max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Travelo</h2>
          <p className="text-gray-300 text-sm">
            Embark on limitless adventures with us. Your passport to
            unforgettable journeys and global exploration
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <SortAscIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <PersonStanding className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Privacy Terms Column */}
        <div>
          <h3 className="font-semibold mb-4">Privacy Terms</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Data Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition-colors">
                Third-Party Links
              </a>
            </li>
          </ul>
        </div>

        {/* Terms and Conditions Column */}
        <div>
          <h3 className="font-semibold mb-4">Terms and Conditions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Booking Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                User Agreement
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter for travel updates and exclusive offers.
          </p>
          <div className="space-y-2 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Travel Company. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
