import styled from "styled-components";
import tw from "twin.macro";

export const StatusBarContainer = styled.div`
    ${tw`bg-green-50 flex  items-center px-24 py-8 mb-10`};
    width:-webkit-fill-available;

`

export const ShipmentTravelImage = styled.img`
    ${tw`h-20 w-20`}
`

export const UpdateItemsAddressHeadingText = styled.span`
    ${tw`text-xl font-bold mb-1`}
`

export const ItemsCountText = styled.span`
    ${tw`text-lg font-bold text-gray-500`}
`

export const HeadingAndSubHeadingWrapper = styled.div`
    ${tw`flex flex-col ml-4`}
`