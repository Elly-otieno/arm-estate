import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

export const ThankYou = () => {
    const navigate = useNavigate();
    return (
      <section className="pb-12 pt-24 px-4 text-center max-w-5xl mx-auto text-[#38180c]">
        <h2 className="text-lg md:text-2xl font-semibold">THANK YOU FOR CHOOSING US</h2>
        <p className="italic mt-2">“Your dream home is waiting to be discovered”</p>
        <Button
          className="mt-4 bg-transparent text-[#38180c] border-4 rounded-none border-[#38180c]"
          onPress={() => navigate("/developments")}
        >
          DISCOVER DEVELOPMENTS
        </Button>
      </section>
    );
  };