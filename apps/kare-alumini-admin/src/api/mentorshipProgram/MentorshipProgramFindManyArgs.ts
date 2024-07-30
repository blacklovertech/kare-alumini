import { MentorshipProgramWhereInput } from "./MentorshipProgramWhereInput";
import { MentorshipProgramOrderByInput } from "./MentorshipProgramOrderByInput";

export type MentorshipProgramFindManyArgs = {
  where?: MentorshipProgramWhereInput;
  orderBy?: Array<MentorshipProgramOrderByInput>;
  skip?: number;
  take?: number;
};
