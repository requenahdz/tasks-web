import PropTypes from "prop-types";
import Menu from "./Menu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className="container">{children}</div>
      <ToastContainer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
