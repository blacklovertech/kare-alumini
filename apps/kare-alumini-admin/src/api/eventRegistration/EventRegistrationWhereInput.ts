import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
