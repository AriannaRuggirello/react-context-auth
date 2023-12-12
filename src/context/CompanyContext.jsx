import { createContext, useContext, useState } from "react";

// Creaiamo il contesto
const CompanyContext = createContext();
// Definiamo un custom Provider
function CompanyProvider({ children }) {
// Aggiungiamo le varibili di stato che vogliamo condividere

const [menu, setMenu] = useState([{
    label: "Home",
    url: "/",
  }, {
    label: "Blog",
    url: "/blog",
  },{
    label: "Login",
    url: "/login",
  }]);




    return (
        <CompanyContext.Provider value={{  menu,setMenu }} >
        {children}
        </CompanyContext.Provider>
    );
}
// Definiamo un hook per consumare il contesto
function useCompany() {
    const context = useContext(CompanyContext);
        return context;
    }
    
    export {CompanyProvider, useCompany}