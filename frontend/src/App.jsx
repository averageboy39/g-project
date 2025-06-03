import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhyAwesome from "./pages/WhyAwesome";
import PersonalMessage from "./pages/PersonalMesaage";
import SecretPage from "./pages/SecretPage";
import Adventures from "./pages/Adventures";
import ChillZone from "./pages/ChillZone";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-awesome" element={<WhyAwesome />} />
        <Route path="/personal-message" element={<PersonalMessage />} />
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/chill" element={<ChillZone />} />
        {/* Add other routes */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App