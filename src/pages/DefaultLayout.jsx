
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CompanyProvider } from "../context/CompanyContext";

export default function DefaultLayout() {

return (
    <>
     <CompanyProvider>
     <Header />
    <main className='min-h-screen'>
    <Outlet />
    </main>
    <Footer />
     </CompanyProvider>
  
    </>
);
}