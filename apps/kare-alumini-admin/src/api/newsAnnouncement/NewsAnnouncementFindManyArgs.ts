import { NewsAnnouncementWhereInput } from "./NewsAnnouncementWhereInput";
import { NewsAnnouncementOrderByInput } from "./NewsAnnouncementOrderByInput";

export type NewsAnnouncementFindManyArgs = {
  where?: NewsAnnouncementWhereInput;
  orderBy?: Array<NewsAnnouncementOrderByInput>;
  skip?: number;
  take?: number;
};
