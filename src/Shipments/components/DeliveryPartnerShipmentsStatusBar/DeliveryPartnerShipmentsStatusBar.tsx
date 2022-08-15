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

interface DeliveryPartnerShipmentsStatusBarProps {
  itemsCount: number;
}

export const DeliveryPartnerShipmentsStatusBar = (
  props: DeliveryPartnerShipmentsStatusBarProps
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
          {t("subHeadings.deliveryPartnerShipmentDetails")}
        </UpdateItemsAddressHeadingText>
        <ItemsCountText>
          {t("headings.itemsCount")}
          {itemsCount}
        </ItemsCountText>
      </HeadingAndSubHeadingWrapper>
    </StatusBarContainer>
  );
};
