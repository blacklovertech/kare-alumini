import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  read?: SortOrder;
  recipientId?: SortOrder;
  updatedAt?: SortOrder;
};
