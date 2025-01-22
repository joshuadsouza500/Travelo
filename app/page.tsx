import Hero from "./sections/Hero";
import Popular from "./sections/Popular";
import Steps from "./sections/Steps";

export default function Home() {
  return (
    <div className="bg-white font-DM_sans">
      {/** <Hero />
      <div className="w-full h-32 md:h-10 "></div>
      <Popular />*/}
      <Steps />
    </div>
  );
}
