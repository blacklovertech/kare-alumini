import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "recipientId";

export const NotificationTitle = (record: TNotification): string => {
  return record.recipientId?.toString() || String(record.id);
};
