import styled from "styled-components";
import tw from "twin.macro";

export const CustomerShipmentCardContainer = styled.div`
    ${tw`flex p-3 rounded-xl mb-6 rounded-lg w-5/12 cursor-pointer mr-8`};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    
`

export const ItemImage = styled.img`
    ${tw`rounded-lg h-40 w-40`};
`
export const RightSideTextsContainer = styled.div`
    ${tw`flex flex-col ml-4`};
`
export const ItemTitleText = styled.span`
    ${tw`font-medium text-lg mb-1`}
`

export const SourceLocationText = styled.span`
    ${tw`font-bold text-gray-600 text-sm mb-1`}
`

export const DestinationLocation = styled(SourceLocationText)``

export const ItemSizeText = styled(SourceLocationText)``
