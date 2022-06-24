import { SiteContext, AuthContex } from "./context/index";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";


function App() {
  return (
    <SiteContext>
      <AuthContex>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </AuthContex>
    </SiteContext>
  );
}

export default App;
