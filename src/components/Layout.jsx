import PropTypes from "prop-types";
import Menu from "./Menu";
const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className="container">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
