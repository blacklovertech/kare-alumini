import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventRegistrationListRelationFilter } from "../eventRegistration/EventRegistrationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  eventRegistrations?: EventRegistrationListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  userRoles?: UserRoleListRelationFilter;
  username?: StringFilter;
};
