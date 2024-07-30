import { JobBoard as TJobBoard } from "../api/jobBoard/JobBoard";

export const JOBBOARD_TITLE_FIELD = "id";

export const JobBoardTitle = (record: TJobBoard): string => {
  return record.id?.toString() || String(record.id);
};
