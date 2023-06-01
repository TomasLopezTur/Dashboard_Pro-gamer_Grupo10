import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./index.module.css"

export const SidebarLogo = ({ logo, brand }) => {
  return (
    <Link
      className="sidebar-brand d-flex align-items-center justify-content-center"
      to={"/"}
    >
      <div className="sidebar-brand-icon">
        <img className={styles.logo} src={logo} alt={brand} />
      </div>
    </Link>
  );
};

SidebarLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
