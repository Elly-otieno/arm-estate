// import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="w-full mx-auto  flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
