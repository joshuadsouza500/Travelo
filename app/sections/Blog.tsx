import { Bounded } from "@/components/layout/Bounded";
import Button from "@/components/Shadui/Button";
import { Card } from "@/components/ui/card";
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
    date: "Nov 14, 2023",
    title: "2023 Travel Trends – what you need to know",
    excerpt:
      "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and sometimes the best memories come from unexpected places...",
    imageUrl: "/amazon.jpeg",
  },
  {
    id: 2,
    date: "Nov 18, 2023",
    title: "Jeep Adventure is a new attraction for tourists visiting Garut",
    excerpt:
      "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation of exploring nature with a classic vehicle brings its own excitement...",
    imageUrl: "/Rome.avif",
  },
];

const BlogSection = () => {
  return (
    <Bounded className="h-auto  py-16 md:py-20 xl:py-28 space-y-6 md:space-y-10 xl:space-y-16">
      <div className="w-full flex justify-center md:justify-between items-end pb-4 ">
        <div className=" space-y-1 max-md:text-center ">
          <h6 className="md:text-lg text-Orange">Our Blog</h6>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
            Travel Inspirations & Tips
          </h2>
        </div>
        <p className="hidden md:block text-lg leading-snug text-Text w-[45%] lg:w-[35%] 2xl:w-[30%] md:mr-2 2xl:mr-6 ">
          Check out some of the latest travel tips, destination highlights, to
          fuel your wanderlust!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2 md:mx-4 xl:mx-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[300px] overflow-hidden">
              <Image
                width={500}
                height={500}
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button color="black" className="px-8  ">
          View more
        </Button>
      </div>
    </Bounded>
  );
};

export default BlogSection;
