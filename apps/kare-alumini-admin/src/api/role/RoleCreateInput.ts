import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  roleName?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
