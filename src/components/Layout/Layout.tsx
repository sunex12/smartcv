import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { FaArrowLeft } from "react-icons/fa6";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <header className="flex items-center justify-between mt-10 px-5">
        {location.pathname === "https://sunex12.github.io/pleaseeeeeee/" ? (
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
