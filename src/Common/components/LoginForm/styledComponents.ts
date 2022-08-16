import styled from "styled-components";
import tw from "twin.macro";

export const LoginPageContainer = styled.div`
  ${tw`flex justify-center items-center h-screen `};
`;

export const LoginHeadingText = styled.p`
  ${tw`text-2xl text-green-500 self-center m-0 mb-2`}
`;

export const InstaImageContainer = styled.div`
  margin-right: 82px;
  @media (max-width: 768px) {
    ${tw`hidden mr-0`}
  }
`;

export const RenderInstaImage = styled.img`
  width: 300px;
`;

export const LoginFormContainer = styled.form`
  width: 456px;
  ${tw`p-12 flex flex-col justify-center box-border border border-solid border-gray-200 rounded-lg`}

  @media (max-width: 768px) {
    ${tw`shadow-none items-center p-7 m-auto`}
  }
`;

export const InstaLogoContainer = styled.div`
  ${tw`text-center`}
`;

export const RenderInstaLogo = styled.img`
  ${tw` mt-3`};
  width: 82px;
  height: 42px;
`;

export const InstaShareTitle = styled.h1`
  ${tw` font-medium m-0 mt-3 mb-6`};
  font-size: 24px;

  @media (max-width: 768px) {
    ${tw`mb-3`}
  }
`;

export const InputFieldContainer = styled.div`
  ${tw`mt-3`};
  width: 360px;

  @media (max-width: 768px) {
    width: 312px;
  }
`;

export const LabelElement = styled.label`
  font-size: 12px;
`;

export const InputElement = styled.input`
  width: 360px;
  height: 40px;
  ${tw` pl-4 pt-2 pb-2 box-border outline-none`}
  ${tw`border-0 rounded-none bg-gray-200 mt-2`}

    @media (max-width: 768px) {
    width: 312px;
  }
`;

export const ButtonErrorMsgContainer = styled.div`
  width: 360px;
  ${tw`mt-2`}
  @media (max-width: 768px) {
    ${tw`m-auto`};
    width: 312px;
  }
`;

export const RedirectingText = styled.a`
  ${tw`text-sm text-blue-600 mt-2 block`}
`;

export const ErrorMsg = styled.p`
  ${tw`text-sm h-6 m-0`}
`;

export const LoginButton = styled.button`
  ${tw`bg-blue-400 rounded-lg text-white border-none flex items-center justify-center cursor-pointer outline-none mt-3`}
  width:360px;
  height: 40px;
  @media (max-width: 768px) {
    widgth: 312px;
  }
`;

export const LoaderContainer = styled.div``;