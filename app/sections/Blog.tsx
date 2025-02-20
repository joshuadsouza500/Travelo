import { Bounded } from "../components/layout/Bounded";
import Button from "../components/Shadui/Button";
import { Card } from "../components/ui/card";
import Image from "next/image";

interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "Nov 18, 2024",
    title: "A Journey Through Java: Exploring Indonesia's Cultural Heart",
    excerpt:
      "Java, the most populous island in Indonesia, is a vibrant tapestry of culture, history, and natural beauty, join us as we explore the breathtaking landscapes that make Java a must-visit destination for every traveler....",
    imageUrl: "/destination/Java.jpeg",
  },
  {
    id: 2,

    date: "Jan 14, 2025",
    title: "2025 Travel Trends – what you need to know",
    excerpt:
      "2024 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and sometimes the best memories come from unexpected places...",
    imageUrl: "/mountain.jpeg",
  },
];

const BlogSection = () => {
  return (
    <Bounded className="h-auto pt-16 pb-10  md:pt-20  space-y-6 md:space-y-10 xl:space-y-16 font-DM_sans">
      <div className="w-full flex justify-center md:justify-between items-end pb-4  ">
        <div className=" space-y-1 max-md:text-center ">
          <h6 className="md:text-lg text-Orange">Our Blog</h6>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
            Travel Inspirations & Tips
          </h2>
        </div>
        <p className="hidden md:block text-lg leading-snug text-Text w-[45%] lg:w-[35%] 2xl:w-[30%]  2xl:mr-4 ">
          Check out some of the latest travel tips, destination highlights, to
          fuel your wanderlust!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2 md:mx-6 xl:mx-10 ">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[250px] lg:h-[300px] 2xl:h-[350px] overflow-hidden">
              <Image
                width={500}
                height={500}
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover object-center  transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-Text mb-2">{post.date}</p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-Orange transition-colors">
                {post.title}
              </h3>
              <p className="text-Text mb-3 line-clamp-2">{post.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className=" flex justify-center py-6 xl:py-10">
        <Button color="black" className="px-6 xl:px-8">
          View More{" "}
        </Button>
      </div>
    </Bounded>
  );
};

export default BlogSection;
