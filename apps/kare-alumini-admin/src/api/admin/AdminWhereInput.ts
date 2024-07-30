import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AdminWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastLogin?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: "Option1";
};
