import Reac from "react";
import { useTranslation } from "react-i18next";

import { DELIVERY_SHIPMENT_ICON_URL } from "../../../Common/constants/ImageUrlConstants";

import {
  HeadingAndSubHeadingWrapper,
  StatusBarContainer,
  ShipmentTravelImage,
  UpdateItemsAddressHeadingText,
  ItemsCountText,
} from "./styledComponents";

interface CustomerShipmentsStatusBarProps {
  itemsCount: number;
}

export const CustomerShipmentsStatusBar = (
  props: CustomerShipmentsStatusBarProps
) => {
  const { itemsCount } = props;
  const { t } = useTranslation();

  return (
    <StatusBarContainer>
      <ShipmentTravelImage
        src={DELIVERY_SHIPMENT_ICON_URL}
        alt={t("imageAltTexts.shipmentTravelImage")}
      />
      <HeadingAndSubHeadingWrapper>
        <UpdateItemsAddressHeadingText>
          {t("headings.yourShipmentDetails")}
        </UpdateItemsAddressHeadingText>
        <ItemsCountText>
          {t("headings.itemsCount")}
          {itemsCount}
        </ItemsCountText>
      </HeadingAndSubHeadingWrapper>
    </StatusBarContainer>
  );
};
