import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventItemWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
