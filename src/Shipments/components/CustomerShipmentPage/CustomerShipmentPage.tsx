import React from "react";
import { useTranslation } from "react-i18next";
import { Rings } from "react-loader-spinner";

import HeaderWrapper from "../../../Common/components/HeaderWrapper";
import i18n from "../../../Common/i18n";
import { CustomerShipmentsMachineState } from "../../machines/CustomerShipmentsMachine/CustomerShipmentsMachine";
import CustomerShipmentsStatusBar from "../CustomerShipmentsStatusBar";
import {
  PAGE_FAILURE_VIEW,
  PAGE_LOADING,
} from "../../machines/CustomerShipmentsMachine/constants";
import CustomerShipmentItemsListComponent from "../CustomerShipmentItemsListComponent";

import { PageContainer, LoadingPageContainer } from "./styledComponents";

interface CustomerShipmentPageProps {
  customerShipmentsMachineState: CustomerShipmentsMachineState;
}

export const CustomerShipmentPage = (props: CustomerShipmentPageProps) => {
  const { customerShipmentsMachineState } = props;
  const { t } = useTranslation();

  const shouldShowLoader = customerShipmentsMachineState.hasTag(PAGE_LOADING);

  const shouldShowFailureView =
    customerShipmentsMachineState.hasTag(PAGE_FAILURE_VIEW);

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

  const renderCustomerShipments = () => {
    return (
      <PageContainer>
        <CustomerShipmentsStatusBar
          itemsCount={customerShipmentsMachineState.context.shipments.length}
        />
        <CustomerShipmentItemsListComponent
          customerShipmentsMachineState={customerShipmentsMachineState}
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
        return renderCustomerShipments();
    }
  };

  return <HeaderWrapper>{renderPageBasedOnMachineState()}</HeaderWrapper>;
};
