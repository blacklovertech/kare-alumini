import { JobBoardWhereInput } from "./JobBoardWhereInput";
import { JobBoardOrderByInput } from "./JobBoardOrderByInput";

export type JobBoardFindManyArgs = {
  where?: JobBoardWhereInput;
  orderBy?: Array<JobBoardOrderByInput>;
  skip?: number;
  take?: number;
};
