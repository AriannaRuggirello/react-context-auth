import { NavLink } from "react-router-dom";

function NavbarLink({ href, children }) {
  return (<NavLink to={href} className="block py-3 px-4 min-w-[80px] text-center rounded-md transition-all duration-300 hover:bg-gray-100 hover:text-black">
    {children}
  </NavLink>);
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50bg-gray-900 text-white backdrop-blur-sm shadow-lg ">
      <nav className="py-4">
        <div className="container px-4 mx-auto flex items-center justify-between">
         <h1><i class="fa-brands fa-react"></i></h1>

          <div>
            <ul className="flex">
              <li><NavbarLink href="/">Home</NavbarLink></li>
              <li><NavbarLink href="/blog">Blog</NavbarLink></li>
              {/* <li><NavbarLink href="/contatti">Contatti</NavbarLink></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header >
  );
}