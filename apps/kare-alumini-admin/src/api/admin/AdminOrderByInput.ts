import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastLogin?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
