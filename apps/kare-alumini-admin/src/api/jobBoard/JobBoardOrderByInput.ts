import { SortOrder } from "../../util/SortOrder";

export type JobBoardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
