import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import FlowersProvider from "./context/FlowersProvider";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <FlowersProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} >
        
          <Route path="/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </FlowersProvider>
  );
}

export default App;
