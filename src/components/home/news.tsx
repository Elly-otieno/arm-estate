import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

interface newsProps{
  isImage?: boolean
}

export const News: React.FC<newsProps> = ({isImage}) => {
  const navigate = useNavigate();
  const newsItems = [
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "INVESTMENT AT LOTUS RESIDENCE",
      link: "/developments",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "INFRASTRUCTURE AT LOTUS RESIDENCE",
      link: "#",
      image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "EMBRACE A VIBRANT LIFESTYLE IN SOUTH C",
      link: "#",
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <section className="py-12 px-4 text-center flex flex-col w-full items-center max-w-4xl">
      <h2 className="text-lg md:text-2xl font-semibold text-[#38180c]">
        LATEST NEWS & INSIGHTS
      </h2>
      <div className="mt-6 w-full">
        {newsItems.map((item, index) => (
          <div className="flex items-start mb-4">
            {isImage && 
            <div className="w-24 relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover aspect-square"/>
            </div>}
          <Link
            key={index}
            href={item.link}
            className="bg-[#38180c] text-white p-4 mb-4 text-left flex justify-between items-center w-full"
          >
            <div>
              <p className="text-xs opacity-75">
                ON {item.date}, BY {item.author}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <span className="text-xl">›</span>
          </Link>
          </div>
        ))}
      </div>
      <div className="mt-2 w-full flex justify-start">
        <Button
          className="border-3 border-[#38180c] text-[#38180c] font-bold rounded-none bg-transparent w-fit"
          onPress={() => navigate("/buyer-insights")}
        >
          VIEW ALL INSIGHTS
        </Button>
      </div>
    </section>
  );
};
