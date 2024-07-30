export type AdminUpdateInput = {
  email?: string | null;
  isActive?: boolean | null;
  lastLogin?: Date | null;
  name?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  role?: "Option1" | null;
};
