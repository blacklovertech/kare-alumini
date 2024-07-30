import { Event } from "../event/Event";
import { User } from "../user/User";

export type EventRegistration = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
