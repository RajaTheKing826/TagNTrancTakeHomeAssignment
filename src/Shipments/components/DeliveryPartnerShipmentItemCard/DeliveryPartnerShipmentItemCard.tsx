import React from "react";
import { useTranslation } from "react-i18next";

import {
  DeliveryParnterShipmentCardContainer,
  DestinationLocation,
  ItemImage,
  ItemSizeText,
  ItemTitleText,
  RightSideTextsContainer,
  SourceLocationText,
} from "./styledComponents";

interface DeliveryPartnerShipmentItemCardTypes {
  title: string;
  size: string;
  sourceLocation: string;
  destinationLocation: string;
  imageSource: string;
}

export const DeliveryPartnerShipmentItemCard = (
  props: DeliveryPartnerShipmentItemCardTypes
) => {
  const { title, size, sourceLocation, destinationLocation, imageSource } =
    props;
  const { t } = useTranslation();
  return (
    <DeliveryParnterShipmentCardContainer>
      <ItemImage src={imageSource} />
      <RightSideTextsContainer>
        <ItemTitleText>{title}</ItemTitleText>
        <ItemSizeText>
          {t("subHeadings.size")} {size}
        </ItemSizeText>
        <SourceLocationText>
          {t("subHeadings.sourceLocation")} {sourceLocation}
        </SourceLocationText>
        <DestinationLocation>
          {t("subHeadings.destinationLocation")} {destinationLocation}
        </DestinationLocation>
      </RightSideTextsContainer>
    </DeliveryParnterShipmentCardContainer>
  );
};
