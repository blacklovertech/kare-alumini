export type UserProfile = {
  createdAt: Date;
  currentCompany: string | null;
  currentRole: string | null;
  deptOfStudy: string | null;
  email: string | null;
  githubUrl: string | null;
  id: string;
  instagramUrl: string | null;
  linkedInUrl: string | null;
  moreAboutUser: string | null;
  name: string | null;
  notifications: boolean | null;
  passesOutYear: number | null;
  phoneNumber: string | null;
  postEvents: boolean | null;
  postNews: boolean | null;
  updatedAt: Date;
};
