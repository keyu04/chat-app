import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Drawer from "./components/Drawer";
import Login from "./components/Login";
import Registration from "./components/registration";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/chat" element={<Drawer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
