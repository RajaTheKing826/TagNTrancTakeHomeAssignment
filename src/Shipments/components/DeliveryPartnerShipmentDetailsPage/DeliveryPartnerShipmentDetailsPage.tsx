import React from "react";
import { useTranslation } from "react-i18next";
import { Rings } from "react-loader-spinner";

import HeaderWrapper from "../../../Common/components/HeaderWrapper";
import { DeliveryPartnerShipmentsMachineState } from "../../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import DeliveryPartnerShipmentsStatusBar from "../DeliveryPartnerShipmentsStatusBar";
import {
  PAGE_FAILURE_VIEW,
  PAGE_LOADING,
} from "../../machines/DeliveryPartnerShipmentsMachine/constants";
import DeliveryPartnerShipmentItemsListComponent from "../DeliveryPartnerShipmentItemsListComponent";

import { PageContainer, LoadingPageContainer } from "./styledComponents";

interface DeliveryPartnerShipmentPageProps {
  deliveryPartnerShipmentsMachineState: DeliveryPartnerShipmentsMachineState;
}

export const DeliveryPartnerShipmentDetailsPage = (
  props: DeliveryPartnerShipmentPageProps
) => {
  const { deliveryPartnerShipmentsMachineState } = props;
  const { t } = useTranslation();

  const shouldShowLoader =
    deliveryPartnerShipmentsMachineState.hasTag(PAGE_LOADING);

  const shouldShowFailureView =
    deliveryPartnerShipmentsMachineState.hasTag(PAGE_FAILURE_VIEW);

  const renderLoader = () => {
    return (
      <LoadingPageContainer>
        <Rings
          height="80"
          width="80"
          color="green"
          ariaLabel="three-dots-loading"
        />
      </LoadingPageContainer>
    );
  };

  const renderDeliveryPartnerShipments = () => {
    return (
      <PageContainer>
        <DeliveryPartnerShipmentsStatusBar
          itemsCount={
            deliveryPartnerShipmentsMachineState.context.shipments.length
          }
        />
        <DeliveryPartnerShipmentItemsListComponent
          deliveryPartnerShipmentsMachineState={
            deliveryPartnerShipmentsMachineState
          }
        />
      </PageContainer>
    );
  };

  const renderFailureView = () => {
    return (
      <LoadingPageContainer>
        <h1>Something wen wrong</h1>
      </LoadingPageContainer>
    );
  };

  const renderPageBasedOnMachineState = () => {
    switch (true) {
      case shouldShowLoader:
        return renderLoader();
      case shouldShowFailureView:
        return renderFailureView();
      default:
        return renderDeliveryPartnerShipments();
    }
  };

  return <HeaderWrapper>{renderPageBasedOnMachineState()}</HeaderWrapper>;
};
