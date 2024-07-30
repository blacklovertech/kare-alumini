import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  applicationUrl?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
