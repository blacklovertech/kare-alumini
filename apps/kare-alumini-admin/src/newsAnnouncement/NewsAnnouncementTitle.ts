import { NewsAnnouncement as TNewsAnnouncement } from "../api/newsAnnouncement/NewsAnnouncement";

export const NEWSANNOUNCEMENT_TITLE_FIELD = "id";

export const NewsAnnouncementTitle = (record: TNewsAnnouncement): string => {
  return record.id?.toString() || String(record.id);
};
