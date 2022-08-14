import React from "react";
import { useTranslation } from "react-i18next";

import HeaderWrapper from "../../../Common/components/HeaderWrapper";
import CustomerShipmentsStatusBar from "../CustomerShipmentsStatusBar";
import i18n from "../../../Common/i18n";

import { PageContainer } from "./styledComponents";
import CustomerShipmentItemsListComponent from "../CustomerShipmentItemsListComponent";

export const CustomerShipmentPage = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <PageContainer>
        <CustomerShipmentsStatusBar itemsCount={20} />
        <CustomerShipmentItemsListComponent />
      </PageContainer>
    </HeaderWrapper>
  );
};
