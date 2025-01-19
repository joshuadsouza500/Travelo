import Hero from "./sections/Hero";
import Popular from "./sections/Popular";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Popular />
    </div>
  );
}
