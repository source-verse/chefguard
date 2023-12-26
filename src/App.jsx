import "./App.css";
import {
  Home,
  Products,
  ProductDetails,
  ErrorPage,
  Employee,
} from "./pages/index";
import { Header, Footer } from "./component/index";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home setter={setCategory} />} />
          <Route path="/product" element={<Products categoryFilter={category}/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/employee/:id" element={<Employee />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
