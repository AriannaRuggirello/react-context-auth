
import { Outlet } from "react-router-dom";


export default function DashboardLayout() {

return (
    <>
    
    <main className='min-h-screen'>
    <Outlet />
    </main>
  
  
    </>
);
}