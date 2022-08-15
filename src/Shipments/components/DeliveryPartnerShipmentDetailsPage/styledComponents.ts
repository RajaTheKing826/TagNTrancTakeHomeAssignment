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

export const FiltersBar = styled.div`
  ${tw`flex items-center justify-end py-4 rounded-lg bg-gray-200 pr-10 mb-8`};
  width: -webkit-fill-available;
`;

export const FilterAndSortSelectsWrapper = styled.div`
  ${tw`flex items-center`}
`;

export const SotyByDateSelectContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const FilterByDeliveryStatusSelectContainer = styled.div`
  ${tw`ml-6 flex flex-col`}
`;

export const SelectLabelText = styled.span``;