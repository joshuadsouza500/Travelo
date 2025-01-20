import Hero from "./sections/Hero";
import Popular from "./sections/Popular";

export default function Home() {
  return (
    <div className="bg-white font-DM_sans">
      <Hero />
      <Popular />
    </div>
  );
}
