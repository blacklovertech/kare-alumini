import { EventRegistrationCreateNestedManyWithoutUsersInput } from "./EventRegistrationCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  username: string;
};
