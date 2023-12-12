import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// Poniamo una condizione su isLoggedIn, e se è falsa
// restituiamo il componente Navigate di React
// Router, che ci permette di effettuare un redirect.
// Altrimenti restituiamo children.
export default function PrivatePages({ children }) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) return <Navigate to="/login" />;
        return children;
}