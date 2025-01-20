import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

//import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  {
    /**  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const is2xl = useMediaQuery({ query: "(min-width: 1536px)" });
  const Width = useTransform(
    scrollY,
    [0, 100],
    ["100%", is2xl ? "40%" : "70%"]
  );
 */
  }
  return (
    <nav className=" md:px-6 flex    py-2 px-2 mx-auto  z-20  sticky top-0.5 mb-1 rounded-full md:py-3 2xl:py-4 backdrop-blur-lg bg-white/25 items-center lg:px-10  2xl:px-20 ">
      {/**      MobileNav
  <div className="absolute right-2 md:hidden  ">
        <div
          className="dropdown dropdown-end dropdown-bottom
  "
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="dropdown-content ">
            <ul
              tabIndex={0}
              className=" text-xl   z-[1] menu p-2  shadow bg-background text-background2 font-medium rounded-box w-44 "
            >
              <li className="">
                <Link href="#Home">Home</Link>
              </li>
              <li>
                <Link href="#About">About</Link>
              </li>
              <li>
                <Link href="#Services"> Services</Link>
              </li>

              <li>
                <Link href="#Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-center w-full">
        <div className="flex   gap-x-1  items-center ">
          <Image alt="logo" height={20} width={20} src="/Logo.svg" />
          <Link
            href="/"
            className=" text-background2 text-xl md:text-2xl     font-medium font-DM_serif tracking-tight"
          >
            Travelo<span className="text-primary ">.</span>
          </Link>
        </div>

        <nav className=" hidden md:flex justify-between items-center  ">
          <ul className="flex flex-row justify-around gap-4  mr-2  text-lg font-medium text-background2 ">
            <li>
              <Link
                href="#Home"
                className="hover:border-b font-medium hover:border-black transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="hover:border-b font-medium hover:border-black transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Services"
                className="hover:border-b font-medium hover:border-black transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block group  border-zinc-800 text-sm text-background rounded-full  px-3 py-2  bg-gradient-to-br shadow-sm from-zinc-900 to-zinc-600 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
