import styled from "styled-components";
import tw from "twin.macro";

export const DeliveryParnterShipmentCardContainer = styled.div`
  ${tw`flex flex-col rounded-xl mb-6 rounded-lg w-8/12 cursor-pointer mr-8 border border-solid border-gray-300`};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const ItemImage = styled.img`
  ${tw`rounded-lg h-32 w-32`};
`;
export const ShipemntFooterContainer = styled.div`
  ${tw`flex flex-col ml-4 py-3`};
`;
export const ItemTitleText = styled.span`
  ${tw`font-medium text-lg font-medium mb-1 block ml-3 text-blue-400`}
`;

export const SourceLocationText = styled.span`
  ${tw`font-bold text-gray-600 text-sm mb-1`}
`;

export const DestinationLocation = styled(SourceLocationText)``;

export const ItemSizeText = styled(SourceLocationText)`
  ${tw`ml-2`}
`;

export const DeliveryDateText = styled(SourceLocationText)`
  ${tw`text-green-700 mb-1 block`}
`;

export const DeliveryStatusText = styled(SourceLocationText)``;

export const ValueText = styled.span`
  ${tw`text-sm text-base font-normal text-gray-600`}
`;

export const StyledCardHeader = styled.div`
  ${tw`p-3 bg-gray-100 flex items-center justify-between`}
`;

export const ImageAndSelectContainer = styled(StyledCardHeader)`
  ${tw`bg-white border border-solid border-gray-300`}
`;

export const ImageAndTitleWrapper = styled.div`
  ${tw`flex`}
`;

export const DeliveryTextAndImageWrapper = styled.div`
  ${tw``}
`;

export const HeaderLeftContainer = styled.div`
  ${tw`flex`}
`;

export const HeaderRightContainer = styled.div`
  ${tw`flex`}
`;

export const UpdateDeliveryStatusSelectContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const LoaderContainer = styled.div``;