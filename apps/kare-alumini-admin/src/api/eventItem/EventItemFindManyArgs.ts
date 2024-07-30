import { EventItemWhereInput } from "./EventItemWhereInput";
import { EventItemOrderByInput } from "./EventItemOrderByInput";

export type EventItemFindManyArgs = {
  where?: EventItemWhereInput;
  orderBy?: Array<EventItemOrderByInput>;
  skip?: number;
  take?: number;
};
