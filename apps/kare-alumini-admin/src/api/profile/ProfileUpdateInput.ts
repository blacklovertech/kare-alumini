import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  socialLinks?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
