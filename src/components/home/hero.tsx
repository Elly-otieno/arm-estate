import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

export const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-[#38180c] py-10 px-14 -bottom-28 absolute">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          YOUR DREAM HOME IS{" "}
          <span className="block"> WAITING TO BE DISCOVERED </span>
        </h1>
        <Button
          className="mt-4 bg-transparent text-white border-4 rounded-none border-[#c79786]"
          onPress={() => navigate("/developments")}
        >
          DISCOVER DEVELOPMENTS
        </Button>
      </div>
    </section>
  );
};
