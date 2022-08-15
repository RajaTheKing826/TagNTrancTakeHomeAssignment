import React from "react";
import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";
import CommonSelectorComponent from "../../../Common/components/CommonSelectorComponent";
import { SelectOption } from "../../../Common/components/CommonSelectorComponent/CommonSelectorComponent";
import { deliverPickedStatusOption } from "../../constants/shipmentFilterOptionConstants";
import {
  ON_UPDATE_STATUS,
  UPDATE_STATUS_LOADING,
} from "../../machines/DeliveryPartnerShipmentsMachine/constants";
import { DeliveryPartnerShipmentsMachineState } from "../../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import { SelectLabelText } from "../DeliveryPartnerShipmentDetailsPage/styledComponents";

import {
  DeliveryParnterShipmentCardContainer,
  DestinationLocation,
  ItemImage,
  ItemSizeText,
  ItemTitleText,
  ShipemntFooterContainer,
  SourceLocationText,
  ValueText,
  DeliveryDateText,
  DeliveryStatusText,
  StyledCardHeader,
  ImageAndSelectContainer,
  ImageAndTitleWrapper,
  DeliveryTextAndImageWrapper,
  HeaderLeftContainer,
  HeaderRightContainer,
  UpdateDeliveryStatusSelectContainer,
  LoaderContainer,
} from "./styledComponents";

interface DeliveryPartnerShipmentItemCardTypes {
  id: string;
  title: string;
  size: string;
  sourceLocation: string;
  destinationLocation: string;
  imageSource: string;
  deliveryDate: string;
  deliveryStatus: string;
  deliveryPartnerShipmentsMachineSend: any;
  deliveryPartnerShipmentsMachineState: DeliveryPartnerShipmentsMachineState;
}

export const DeliveryPartnerShipmentItemCard = (
  props: DeliveryPartnerShipmentItemCardTypes
) => {
  const {
    id,
    title,
    size,
    sourceLocation,
    destinationLocation,
    imageSource,
    deliveryDate,
    deliveryStatus,
    deliveryPartnerShipmentsMachineSend,
    deliveryPartnerShipmentsMachineState,
  } = props;

  const { t } = useTranslation();

  const onDeliveryStatusChange = (option: SelectOption | null) => {
    deliveryPartnerShipmentsMachineSend({
      type: ON_UPDATE_STATUS,
      data: { id, updatedStatus: option?.value },
    });
  };

  const getOptionFromValue = (value: string) => {
    const label = deliverPickedStatusOption.find(
      (option) => option.value === value
    );
    return label;
  };

  const renderLoader = () => {
    return (
      <LoaderContainer>
        <Oval
          height="30"
          width="30"
          color="green"
          ariaLabel="three-dots-loading"
        />
      </LoaderContainer>
    );
  };

  const isStatusUpdating =
    deliveryPartnerShipmentsMachineState.context.statusUpdatingShipmentId ===
      id && deliveryPartnerShipmentsMachineState.hasTag(UPDATE_STATUS_LOADING);

  return (
    <DeliveryParnterShipmentCardContainer>
      <StyledCardHeader>
        <HeaderLeftContainer>
          <SourceLocationText>
            {t("subHeadings.sourceLocation")}{" "}
            <ValueText>{sourceLocation}</ValueText>
          </SourceLocationText>
          <ItemSizeText>
            {t("subHeadings.size")} <ValueText>{size}</ValueText>
          </ItemSizeText>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <DestinationLocation>
            {t("subHeadings.destinationLocation")}{" "}
            <ValueText>{destinationLocation}</ValueText>
          </DestinationLocation>
        </HeaderRightContainer>
      </StyledCardHeader>
      <ImageAndSelectContainer>
        <DeliveryTextAndImageWrapper>
          <DeliveryDateText>
            {t("subHeadings.expectedDeliveryDate")}{" "}
            <ValueText>{deliveryDate}</ValueText>
          </DeliveryDateText>
          <ImageAndTitleWrapper>
            <ItemImage src={imageSource} />
            <ItemTitleText>{title}</ItemTitleText>
          </ImageAndTitleWrapper>
        </DeliveryTextAndImageWrapper>
        <UpdateDeliveryStatusSelectContainer>
          <SelectLabelText>
            {t("subHeadings.updateDeliveryStatus")}
          </SelectLabelText>

          {isStatusUpdating ? (
            renderLoader()
          ) : (
            <CommonSelectorComponent
              selectOptions={deliverPickedStatusOption}
              onOptionChange={onDeliveryStatusChange}
              defaultValue={getOptionFromValue(deliveryStatus)}
              isDisabled={
                deliveryStatus === "DELIVERED" || deliveryStatus === "PICKED"
              }
            />
          )}
        </UpdateDeliveryStatusSelectContainer>
      </ImageAndSelectContainer>
      <ShipemntFooterContainer>
        <DeliveryStatusText>
          {t("subHeadings.deliveryStatus")}{" "}
          <ValueText>{deliveryStatus}</ValueText>
        </DeliveryStatusText>
      </ShipemntFooterContainer>
    </DeliveryParnterShipmentCardContainer>
  );
};
