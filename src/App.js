import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Products } from "./Components/Products";
import { About } from "./Components/About";
import { Settings } from "./Components/Settings";
import { Services } from "./Components/Services";
import { Blog } from "./Components/Blog";
import { Cart } from "./Components/Cart";
import { Admin } from "./Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/auth" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/config" element={<Settings />}></Route>
    </Routes>
  );
}

export default App;
