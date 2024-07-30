export type Message = {
  createdAt: Date;
  id: string;
  receiverId: string | null;
  senderId: string | null;
  sentAt: Date | null;
  text: string | null;
  updatedAt: Date;
};
