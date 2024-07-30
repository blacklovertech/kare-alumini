import { EventRegistrationListRelationFilter } from "../eventRegistration/EventRegistrationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  eventRegistrations?: EventRegistrationListRelationFilter;
  id?: StringFilter;
};
