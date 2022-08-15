import styled from "styled-components";
import tw from "twin.macro";

export const PageContainer = styled.div`
  ${tw`flex flex-col items-center bg-white`};
`;

export const LoadingPageContainer = styled.div`
  ${tw`flex items-center justify-center`};
  width: -webkit-fill-available;
  height: calc(100vh - 100px);
`;