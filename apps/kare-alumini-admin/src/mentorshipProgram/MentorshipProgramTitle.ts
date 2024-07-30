import { MentorshipProgram as TMentorshipProgram } from "../api/mentorshipProgram/MentorshipProgram";

export const MENTORSHIPPROGRAM_TITLE_FIELD = "id";

export const MentorshipProgramTitle = (record: TMentorshipProgram): string => {
  return record.id?.toString() || String(record.id);
};
