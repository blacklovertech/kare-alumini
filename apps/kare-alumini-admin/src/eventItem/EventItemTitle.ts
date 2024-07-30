import { EventItem as TEventItem } from "../api/eventItem/EventItem";

export const EVENTITEM_TITLE_FIELD = "name";

export const EventItemTitle = (record: TEventItem): string => {
  return record.name?.toString() || String(record.id);
};
