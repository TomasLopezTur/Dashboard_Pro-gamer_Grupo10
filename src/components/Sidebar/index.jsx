import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo-ecomerce.jpg";
import { NavItem } from "./components/NavItem";
import styles from "./index.module.css"

const TITLE = "Dashboard ProGamer";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className={`navbar-nav accordion ${styles.fondo}`}
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="Artistica Dalí" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>{TITLE}</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Administrar</div>

        {/* <!-- Nav Items --> */}
       
        <NavItem href="/products" icon="fa-box" name="Lista de Productos"/>
        <NavItem href="/users" icon="fa-users" name="Lista de Usuarios"/>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
