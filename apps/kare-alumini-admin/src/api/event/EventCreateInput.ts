import { EventRegistrationCreateNestedManyWithoutEventsInput } from "./EventRegistrationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutEventsInput;
};
