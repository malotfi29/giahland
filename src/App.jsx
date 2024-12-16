import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import FlowersProvider from "./context/FlowersProvider";
import SingleProduct from "./pages/SingleProduct";
import Products from "./features/Product/Products";

function App() {
  return (
    <FlowersProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<Products />}/>
          <Route path="products/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </FlowersProvider>
  );
}

export default App;
