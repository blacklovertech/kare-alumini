import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  socialLinks: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
