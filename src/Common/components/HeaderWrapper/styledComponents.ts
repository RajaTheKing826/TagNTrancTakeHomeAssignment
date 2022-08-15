import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`flex py-6 px-24 h-24 bg-white  justify-between sticky`};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Logo = styled.img`
  ${tw`cursor-pointer w-24`}
`;

export const CommonStyledButton = styled.button`
  ${tw`py-2 px-5 rounded-lg bg-green-500 focus:outline-none border-white border border-solid border-white text-white cursor-pointer`};
  box-shadow: none;
`;

export const LogoutButton = styled(CommonStyledButton)`
  ${tw`ml-6`}
`;

export const LogoutButtonAndLanguageSelectorWrapper = styled.div`
  ${tw`flex items-center justify-center`}
`;