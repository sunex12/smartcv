import {
  Outlet,
  useLocation,
  useNavigate,
  Link,
  useMatch,
} from "react-router-dom";
import { Container } from "../Container/Container";
import { FaArrowLeft } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = useMatch("/pleaseeeeeee");

  const { t, i18n } = useTranslation();
  const [color, setColor] = useState("en");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setColor(lng);
  };

  return (
    <Container>
      <header className="flex items-center justify-between mt-10 px-5">
        {isHome ? (
          <Link to="/archive">
            <span className="font-semibold text-lg">{t("header.archive")}</span>
          </Link>
        ) : (
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-lg cursor-pointer z-50"
          />
        )}
        {location.pathname !== "/upload-resume-payment" &&
        location.pathname !== "/analysis-resume-payment" ? (
          <div className="flex items-center justify-between w-16">
            <p
              onClick={() => changeLanguage("ru")}
              className="font-semibold text-lg"
              style={{ color: color === "ru" ? "#5BA8D7" : "inherit" }}
            >
              RU
            </p>
            <span>|</span>
            <p
              onClick={() => changeLanguage("en")}
              className="font-semibold text-lg"
              style={{ color: color === "en" ? "#5BA8D7" : "inherit" }}
            >
              EN
            </p>
          </div>
        ) : null}
      </header>
      <Outlet />
    </Container>
  );
};

// "/pleaseeeeeee"
