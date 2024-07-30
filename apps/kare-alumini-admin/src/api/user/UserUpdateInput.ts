import { EventRegistrationUpdateManyWithoutUsersInput } from "./EventRegistrationUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  eventRegistrations?: EventRegistrationUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  username?: string;
};
