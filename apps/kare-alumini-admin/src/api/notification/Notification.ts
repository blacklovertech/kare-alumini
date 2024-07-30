export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  read: boolean | null;
  recipientId: string | null;
  updatedAt: Date;
};
