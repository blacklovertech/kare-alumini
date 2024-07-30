import { EventRegistration } from "../eventRegistration/EventRegistration";

export type Event = {
  createdAt: Date;
  eventRegistrations?: Array<EventRegistration>;
  id: string;
  updatedAt: Date;
};
