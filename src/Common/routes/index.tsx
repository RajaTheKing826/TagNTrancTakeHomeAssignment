import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import {
  CUSTOMER_SHIPMENTS,
  DELIVERY_PARTNER_SHIPMENTS,
  LOGIN_ROUTE_PATH,
  SIGNUP_ROUTE_PATH,
} from "../constants/RouteConstants";
import i18n from "../i18n";
import CustomerShipmentsRoute from "../../Shipments/routes/CustomerShipmentsRoute";
import DeliveryShipmentsRoute from "../../Shipments/routes/DeliveryShipmentsRoute";
import LoginRoute from "./LoginRoute";
import SignupRoute from "./SignUpRoute";

const CommonRoutes = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            <Route
              path={CUSTOMER_SHIPMENTS}
              component={CustomerShipmentsRoute}
            />
            <Route
              path={DELIVERY_PARTNER_SHIPMENTS}
              component={DeliveryShipmentsRoute}
            />
            <Route path={LOGIN_ROUTE_PATH} component={LoginRoute} />
            <Route path={SIGNUP_ROUTE_PATH} component={SignupRoute} />
            <Route path={"*"} key={"home-route"} component={LoginRoute} />
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default CommonRoutes;
