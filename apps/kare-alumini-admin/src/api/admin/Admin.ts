export type Admin = {
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  lastLogin: Date | null;
  name: string | null;
  password: string | null;
  phoneNumber: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
