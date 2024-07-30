import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  receiverId?: StringNullableFilter;
  senderId?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  text?: StringNullableFilter;
};
