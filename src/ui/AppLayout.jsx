import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function AppLayout({children}) {
  return (
    <div className="flex flex-col h-screen">
        <div className="container max-w-[1024px] flex-1">
        <Header />
        
        {children}
        
        <Outlet/>
        </div>
      <Footer />

    </div>
  );
}

export default AppLayout;
