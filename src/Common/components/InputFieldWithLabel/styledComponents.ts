import styled from "styled-components";
import tw from "twin.macro";

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
  ${tw` pl-4 pt-2 pb-2 box-border outline-none`};
  width: 360px;
  height: 40px;
  ${tw`border-0 rounded-none bg-gray-200 mt-2`}

  @media (max-width: 768px) {
    width: 312px;
  }
`;

export const ErrorMsg = styled.p`
  ${tw`text-sm h-6 m-0 text-red-500`}
`;
