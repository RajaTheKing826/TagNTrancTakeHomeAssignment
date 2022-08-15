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
  ValueText,
  DeliveryDateText,
  DeliveryStatusText,
} from "./styledComponents";

interface DeliveryPartnerShipmentItemCardTypes {
  title: string;
  size: string;
  sourceLocation: string;
  destinationLocation: string;
  imageSource: string;
  deliveryDate: string;
  deliveryStatus: string;
}

export const DeliveryPartnerShipmentItemCard = (
  props: DeliveryPartnerShipmentItemCardTypes
) => {
  const {
    title,
    size,
    sourceLocation,
    destinationLocation,
    imageSource,
    deliveryDate,
    deliveryStatus,
  } = props;
  const { t } = useTranslation();
  return (
    <DeliveryParnterShipmentCardContainer>
      <ItemImage src={imageSource} />
      <RightSideTextsContainer>
        <ItemTitleText>{title}</ItemTitleText>
        <ItemSizeText>
          {t("subHeadings.size")} <ValueText>{size}</ValueText>
        </ItemSizeText>
        <SourceLocationText>
          {t("subHeadings.sourceLocation")}{" "}
          <ValueText>{sourceLocation}</ValueText>
        </SourceLocationText>
        <DestinationLocation>
          {t("subHeadings.destinationLocation")}{" "}
          <ValueText>{destinationLocation}</ValueText>
        </DestinationLocation>
        <DeliveryDateText>
          {t("subHeadings.expectedDeliveryDate")}{" "}
          <ValueText>{deliveryDate}</ValueText>
        </DeliveryDateText>
        <DeliveryStatusText>
          {t("subHeadings.deliveryStatus")}{" "}
          <ValueText>{deliveryStatus}</ValueText>
        </DeliveryStatusText>
      </RightSideTextsContainer>
    </DeliveryParnterShipmentCardContainer>
  );
};
