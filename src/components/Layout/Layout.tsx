import { Outlet, useLocation, useNavigate, Link, useMatch } from "react-router-dom";
import { Container } from "../Container/Container";
import { FaArrowLeft } from "react-icons/fa6";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = useMatch("/pleaseeeeeee")

  return (
    <Container>
      <header className="flex items-center justify-between mt-10 px-5">
        {isHome ? (
          <Link to="/archive">
            <span className="font-medium text-lg">archive</span>
          </Link>
        ) : (
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-lg cursor-pointer z-50"
          />
        )}
        {location.pathname !== "/upload-resume-payment" &&
        location.pathname !== "/analysis-resume-payment" ? (
          <p className="font-semibold text-lg">RU</p>
        ) : null}
      </header>
      <Outlet />
    </Container>
  );
};

// "/pleaseeeeeee"
