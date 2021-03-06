import "./App.css";
import { Navbar, Footer } from "./components";
import {
  Home,
  Profile,
  Item,
  Create,
  Login,
  SuuplierRegister,
  Supplier
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":item/:id" element={<Item />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supplier/register" element={<SuuplierRegister />} />
        <Route path="/supplier/dashboard" element={<Supplier />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
