import { NavLink } from "react-router-dom";


function CustomNavLink({ children, to }) {
    const navLinkClass =
      "flex items-center gap-x-2 hover:bg-primary-100 hover:text-primary-900 px-1 py-1.5 rounded-lg text-secondary-600 transition-all duration-300";
    return (
      <li>
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100 text-primary-900 `
            : `${navLinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
      </li>
    );
  }

export default CustomNavLink
