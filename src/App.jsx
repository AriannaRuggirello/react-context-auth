import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PostShow from "./pages/post/show"
import DefaultLayout from "./pages/DefaultLayout";
import DashboardLayout from "./pages/DashboardLayout";
import PrivatePages from "./middlewares/PrivatePages";

import { AuthProvider } from "./context/AuthContext";

function App() {

return (
  <BrowserRouter>
  <AuthProvider>
  <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/posts/:slug" element={<PostShow />}></Route>
        <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

        {/* Utilizziamo il middleware come elemento della rotta che incapsula tutte le rotte dell'area privata. Al suo interno, passiamo il componente DashboardLayout come prop children. */}
        <Route path="/dashboard" element={<PrivatePages><DashboardLayout /></PrivatePages>}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        
        </Route>

       

        
      
      </Route>
    </Routes>
  </AuthProvider>
   
  </BrowserRouter>
);
}

export default App;