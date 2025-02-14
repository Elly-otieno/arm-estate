import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "@/pages/home";
import Story from "@/pages/story";
import Developments from "@/pages/developments";
import Insights from "@/pages/insights";
import Chat from "@/pages/chat";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Story />} path="/story" />
      <Route element={<Developments />} path="/developments" />
      <Route element={<Insights />} path="/buyer-insights" />
      <Route element={<Chat />} path="/lets-talk" />
    </Routes>
  );
}

export default App;
