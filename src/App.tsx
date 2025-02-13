import { Route, Routes } from "react-router-dom";

import Home from "@/pages/home";
import Story from "@/pages/story";
import Developments from "@/pages/developments";
import Insights from "@/pages/insights";
import Chat from "@/pages/chat";

function App() {
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
