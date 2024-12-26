import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import FlowersProvider from "./context/FlowersProvider";
import SingleProduct from "./pages/SingleProduct";
import Products from "./features/Product/Products";
import CardPage from "./pages/CardPage";
import CardProvider from "./context/CardReducer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./features/authentication/userProvider";
import CompleteProfilePage from "./pages/CompleteProfilePage"

const queryClient = new QueryClient();

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
    <UserProvider>
    <FlowersProvider>
        <CardProvider>
      <Toaster />
      <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="profile" element={<CompleteProfilePage/>} />
        <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<Products />}/>
          <Route path="products/:id" element={<SingleProduct />} />
        </Route>
        <Route path="card" element={<CardPage/>}/>
      </Routes>
    </CardProvider>
    </FlowersProvider>
    </UserProvider>
    </QueryClientProvider>
    
  );
}

export default App;
