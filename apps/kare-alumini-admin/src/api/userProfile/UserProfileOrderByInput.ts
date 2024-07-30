import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  currentCompany?: SortOrder;
  currentRole?: SortOrder;
  deptOfStudy?: SortOrder;
  email?: SortOrder;
  githubUrl?: SortOrder;
  id?: SortOrder;
  instagramUrl?: SortOrder;
  linkedInUrl?: SortOrder;
  moreAboutUser?: SortOrder;
  name?: SortOrder;
  notifications?: SortOrder;
  passesOutYear?: SortOrder;
  phoneNumber?: SortOrder;
  postEvents?: SortOrder;
  postNews?: SortOrder;
  updatedAt?: SortOrder;
};
