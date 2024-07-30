import { EventRegistration } from "../eventRegistration/EventRegistration";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type User = {
  createdAt: Date;
  email: string | null;
  eventRegistrations?: Array<EventRegistration>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  userRoles?: Array<UserRole>;
  username: string;
};
