import React from "react";
import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";

import HeaderWrapper from "../../../Common/components/HeaderWrapper";
import { DeliveryPartnerShipmentsMachineState } from "../../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import DeliveryPartnerShipmentsStatusBar from "../DeliveryPartnerShipmentsStatusBar";
import {
  PAGE_FAILURE_VIEW,
  PAGE_LOADING,
} from "../../machines/DeliveryPartnerShipmentsMachine/constants";
import DeliveryPartnerShipmentItemsListComponent from "../DeliveryPartnerShipmentItemsListComponent";
import {
  deliverPickedStatusOption,
  deliveryDateSortOptions,
} from "../../constants/shipmentFilterOptionConstants";

import {
  PageContainer,
  LoadingPageContainer,
  FiltersBar,
  FilterAndSortSelectsWrapper,
  SotyByDateSelectContainer,
  FilterByDeliveryStatusSelectContainer,
  SelectLabelText,
} from "./styledComponents";
import CommonSelectorComponent from "../../../Common/components/CommonSelectorComponent";
import { SelectOption } from "../../../Common/components/CommonSelectorComponent/CommonSelectorComponent";

interface DeliveryPartnerShipmentPageProps {
  deliveryPartnerShipmentsMachineState: DeliveryPartnerShipmentsMachineState;
  setSelectedFilter: (value: SelectOption | null) => void;
  setSelectedSort: (value: SelectOption | null) => void;
  defaultFilterValue: SelectOption;
  defaultSortValue: SelectOption;
}

export const DeliveryPartnerShipmentDetailsPage = (
  props: DeliveryPartnerShipmentPageProps
) => {
  const {
    deliveryPartnerShipmentsMachineState,
    setSelectedSort,
    setSelectedFilter,
    defaultFilterValue,
    defaultSortValue,
  } = props;
  const { t } = useTranslation();

  const shouldShowLoader =
    deliveryPartnerShipmentsMachineState.hasTag(PAGE_LOADING);

  const shouldShowFailureView =
    deliveryPartnerShipmentsMachineState.hasTag(PAGE_FAILURE_VIEW);

  const onChangeSort = (option: SelectOption | null) => {
    setSelectedSort(option);
  };

  const onChangeFilter = (option: SelectOption | null) => {
    setSelectedFilter(option);
  };

  const renderLoader = () => {
    return (
      <LoadingPageContainer>
        <Oval
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
        <FiltersBar>
          <FilterAndSortSelectsWrapper>
            <SotyByDateSelectContainer>
              <SelectLabelText>
                {t("subHeadings.sortByDeliveryDate")}
              </SelectLabelText>
              <CommonSelectorComponent
                selectOptions={deliveryDateSortOptions}
                onOptionChange={onChangeSort}
                defaultValue={defaultSortValue}
              />
            </SotyByDateSelectContainer>
            <FilterByDeliveryStatusSelectContainer>
              <SelectLabelText>
                {t("subHeadings.filterByDeliveryStatus")}
              </SelectLabelText>
              <CommonSelectorComponent
                selectOptions={deliverPickedStatusOption}
                onOptionChange={onChangeFilter}
                defaultValue={defaultFilterValue}
              />
            </FilterByDeliveryStatusSelectContainer>
          </FilterAndSortSelectsWrapper>
        </FiltersBar>
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
