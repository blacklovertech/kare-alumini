import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  roleName?: StringNullableFilter;
  userRoles?: UserRoleListRelationFilter;
};
