import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "@/pages/demo/demo.tsx";
import HomePage from "@/pages/home/home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
