import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

interface heroProps {
  title?: string;
  subtitle?: string;
  label?: string;
  isButton: boolean;
  position?: 'bottom' | 'lower';
  // positionSyles: any;
}

export const Hero: React.FC<heroProps> = ({
  title,
  subtitle,
  label,
  isButton,
  position ='bottom'
}) => {
  const navigate = useNavigate();

  const positionStyles = {
    bottom: "-bottom-14", 
    lower: "-bottom-28",
  };
  return (
    <section
      className="relative w-full h-[300px] flex flex-col justify-center bg-cover bg-center text-center px-4 mb-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className={`bg-[#38180c] py-8 px-14 absolute ${positionStyles[position]}`}>
        <h1 className="text-white text-2xl md:text-3xl font-bold">{title}</h1>
        <h2 className="text-white text-md md:text-lg font-medium max-w-md">
          {subtitle}
        </h2>
        {isButton && (
          <Button
            className="mt-4 bg-transparent text-white border-4 rounded-none border-[#c79786]"
            onPress={() => navigate("/developments")}
          >
            {label}
          </Button>
        )}
      </div>
    </section>
  );
};
