import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();
  const newsItems = [
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "INVESTMENT AT LOTUS RESIDENCE",
      link: "/developments",
    },
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "INFRASTRUCTURE AT LOTUS RESIDENCE",
      link: "#",
    },
    {
      date: "10-05-2023",
      author: "ADMIN",
      title: "EMBRACE A VIBRANT LIFESTYLE IN SOUTH C",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 text-center flex flex-col w-full items-center max-w-4xl">
      <h2 className="text-lg md:text-2xl font-semibold text-[#38180c]">
        LATEST NEWS & INSIGHTS
      </h2>
      <div className="mt-6 w-full">
        {newsItems.map((item, index) => (
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
