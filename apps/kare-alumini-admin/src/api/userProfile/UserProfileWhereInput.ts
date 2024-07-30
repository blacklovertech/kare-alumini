import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserProfileWhereInput = {
  address?: StringNullableFilter;
  bloodGroup?: "Option1";
  currentCompany?: StringNullableFilter;
  currentRole?: StringNullableFilter;
  deptOfStudy?: StringNullableFilter;
  email?: StringNullableFilter;
  githubUrl?: StringNullableFilter;
  id?: StringFilter;
  instagramUrl?: StringNullableFilter;
  linkedInUrl?: StringNullableFilter;
  moreAboutUser?: StringNullableFilter;
  name?: StringNullableFilter;
  notifications?: BooleanNullableFilter;
  passesOutYear?: IntNullableFilter;
  phoneNumber?: StringNullableFilter;
  postEvents?: BooleanNullableFilter;
  postNews?: BooleanNullableFilter;
  regNo?: StringNullableFilter;
};
