import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Tags, Landmark, ChartNoAxesCombined } from "lucide-react";

function SubFeatured() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-2">
      <div className="mt-8 border-4 border-black overflow-hidden max-w-4xl mx-auto p-1">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lotus Residence"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0  bg-[#38180c] p-4">
            <h3 className="text-lg font-bold text-left text-white">
              SOUTH C, NAIROBI
            </h3>
            <h2 className="text-2xl font-bold text-left text-white">
              LOTUS RESIDENCE
            </h2>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
            <div className="flex flex-col items-center gap-2 text-[#38180c]">
              <Building2 size={34}/>
              <p className="text-sm  font-normal">TYPE</p>
              <p className="font-bold ">APARTMENT</p>
            </div>
            <div className="flex flex-col text-[#38180c] items-center gap-2">
              <ChartNoAxesCombined size={34}/>
              <p className="text-sm  font-normal">STATUS</p>
              <p className="font-bold ">UNDER CONSTRUCTION</p>
            </div>
            <div className="flex flex-col text-[#38180c] items-center gap-2">
              <Landmark size={34}/>
              <p className="text-sm  font-normal">SIZE</p>
              <p className="font-bold ">FROM: 25 SQM</p>
            </div>
            <div className="flex flex-col text-[#38180c] items-center gap-2">
              <Tags size={34}/>
              <p className="text-sm  font-normal">PRICE</p>
              <p className="font-bold ">KSH. 3,000,000</p>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="mt-2 bg-[#b69a8f] rounded-none text-xl text-white py-8 w-fit"
        onPress={() => navigate("/buyer-insights")}
      >
        FULL DETAILS
      </Button>
    </div>
  );
}

export default SubFeatured;
