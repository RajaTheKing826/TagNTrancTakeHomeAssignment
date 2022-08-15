import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";
import { TAG_N_TRAC_LOGO } from "../../constants/ImageUrlConstants";
import { languageSelectorOptions } from "../../constants/LanguageConstants";
import CommonSelector from "../CommonSelectorComponent";
import { SelectOption } from "../CommonSelectorComponent/CommonSelectorComponent";

import {
  HeaderContainer,
  Logo,
  LogoutButton,
  LogoutButtonAndLanguageSelectorWrapper,
} from "./styledComponents";

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

  const onLanguageChange = (selectedOption: SelectOption | null) => {
    i18n.changeLanguage(selectedOption?.value);
  };

  return (
    <>
      <HeaderContainer>
        <Logo onClick={onLogoButtonClick} src={TAG_N_TRAC_LOGO} />
        <LogoutButtonAndLanguageSelectorWrapper>
          <CommonSelector
            onOptionChange={onLanguageChange}
            selectOptions={languageSelectorOptions}
            defaultValue={languageSelectorOptions[0]}
          />
          <LogoutButton onClick={onLogoutButtonClick}>
            {t("buttonTexts.logout")}
          </LogoutButton>
        </LogoutButtonAndLanguageSelectorWrapper>
      </HeaderContainer>
      {children}
    </>
  );
};
