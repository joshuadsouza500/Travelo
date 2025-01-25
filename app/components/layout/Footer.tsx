import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-Bg-green m-1 rounded-xl text-white pt-12 px-4 md:px-6">
      <div className="  max-w-7xl 2xl:max-w-8xl mx-auto grid grid-cols-2 lg:grid-cols-3  gap-5 ">
        {/* Brand Column */}
        <div className=" space-y-2">
          <h2 className="text-2xl font-bold font-DM_serif tracking-wider">
            Travelo.
          </h2>
          <p className="text-gray-300 text-sm  xl:mr-10">
            Embark on limitless adventures with us.{" "}
            <span className="hidden md:block">
              Your passport to unforgettable journeys and global exploration
            </span>
          </p>
          <div className="flex gap-3 opacity-90 pt-1">
            <a href="#" className="text-gray-300 transition-colors">
              <Image
                width={20}
                height={20}
                alt={"social icon"}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
              />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Image
                width={20}
                height={20}
                alt={"social icon"}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
              />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Image
                width={20}
                height={20}
                alt={"social icon"}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              />
            </a>
          </div>
        </div>

        {/* Terms and Conditions Column */}
        <div className="mx-auto  ">
          <h3 className="font-semibold mb-3">Links</h3>
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
        <div className="hidden md:block max-md:pt-8 max-md:col-span-2">
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter for travel updates and exclusive offers.
          </p>
          <div className=" flex items-center bg-white/15 rounded-full border border-white/20 text-white w-[90%] ">
            <input
              type="email"
              placeholder="Enter your email"
              className=" placeholder:text-gray-400 bg-white/0 rounded-l-lg py-3 w-full pl-2 md:pl-4"
            />
            <button className="bg-text-black max-md:text-sm rounded-3xl py-1 px-2 mr-1 md:py-1.5 md:px-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-8xl mx-auto mt-12 pb-4 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Travel Company. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
