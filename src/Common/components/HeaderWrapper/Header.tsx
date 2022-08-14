import React from "react";
import { useTranslation } from "react-i18next";

import { TAG_N_TRAC_LOGO } from "../../constants/ImageUrlConstants";
import { HeaderContainer, Logo, LogoutButton } from "./styledComponents";

interface HeaderComponentsProps {
  children: React.ReactNode;
  history?: any; //TODO:need to update
}

export const Header = (props: HeaderComponentsProps) => {
  const { children, history } = props;

  const { t } = useTranslation();

  const onLogoButtonClick = () => {
    window.location.href = "https://www.tagntrac.com/";
  };

  const onLogoutButtonClick = () => {};

  return (
    <>
      <HeaderContainer>
        <Logo onClick={onLogoButtonClick} src={TAG_N_TRAC_LOGO} />
        <LogoutButton onClick={onLogoutButtonClick}>
          {t("buttonTexts.logout")}
        </LogoutButton>
      </HeaderContainer>
      {children}
    </>
  );
};
