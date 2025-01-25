import { ArrowRight } from "lucide-react";
import Button from "../Shadui/Button";
import Image from "next/image";

const TravelHighlights = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Wildlife Adventures",
      description:
        "Experience nature's finest moments in their natural habitat",
    },
    {
      url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      title: "Mountain Expeditions",
      description: "Scale new heights and discover breathtaking views",
    },
    {
      url: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      title: "Jungle Safaris",
      description: "Explore the untamed wilderness with expert guides",
    },
    {
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      title: "Desert Adventures",
      description: "Journey through golden dunes and ancient landscapes",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Discover Your Next Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From wildlife encounters to mountain expeditions, we offer
            unforgettable experiences across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={item.url}
                width={400}
                height={400}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="group">
            Explore All Destinations
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelHighlights;
