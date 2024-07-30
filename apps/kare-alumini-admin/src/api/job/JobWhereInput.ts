import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  applicationUrl?: StringNullableFilter;
  company?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
