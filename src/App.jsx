import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components";
import ForgetPage from "./components/ForgetPage";
import Home from "./components/Home";
import Reset from "./components/Reset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset/:id" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
