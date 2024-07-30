import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  roleName?: string | null;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
