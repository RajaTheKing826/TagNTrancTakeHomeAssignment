import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import {
  CUSTOMER_SHIPMENTS,
  DELIVERY_PARTNER_SHIPMENTS,
} from "../constants/RouteConstants";

import CustomerShipmentsRoute from "../../Shipments/routes/CustomerShipmentsRoute";
import DeliveryShipmentsRoute from "../../Shipments/routes/DeliveryShipmentsRoute";

const CommonRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={CUSTOMER_SHIPMENTS} component={CustomerShipmentsRoute} />
        <Route
          path={DELIVERY_PARTNER_SHIPMENTS}
          component={DeliveryShipmentsRoute}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default CommonRoutes;
