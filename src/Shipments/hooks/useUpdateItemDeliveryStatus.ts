import { useMutation } from "react-query";
import { UpdateShipmentDeliveryStatus } from "../services/types";
import useShipmentService from "./services/useShipmentService";

const useUpdateItemDeliveryStatus = (): {
  updateItemDeliveryStatusApi: any;
  error: unknown;
  status: string;
} => {
  const { shipmentService } = useShipmentService();

  const updateDeliverStatus = (params: UpdateShipmentDeliveryStatus) => {
    return shipmentService.updateItemDeliveryPickupStatus(params);
  };

  const { mutateAsync, error, status } = useMutation(updateDeliverStatus);

  return {
    updateItemDeliveryStatusApi: mutateAsync,
    error,
    status,
  };
};

export default useUpdateItemDeliveryStatus;
