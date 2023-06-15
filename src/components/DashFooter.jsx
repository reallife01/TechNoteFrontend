import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const DashFooter = () => {
  const {username, status} = useAuth()
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate('/dash');

  let goHomeBtn = null;
  
  if (pathname !== "/dash") {
    goHomeBtn = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHome} />
      </button>
    );
  }

  return (
    <footer className="dash-footer">
      {goHomeBtn}
      <p>Current user: {username}</p>
      <p>Status: {status}</p>
    </footer>
  );
};

export default DashFooter;
