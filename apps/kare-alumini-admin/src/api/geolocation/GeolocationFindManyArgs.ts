import { GeolocationWhereInput } from "./GeolocationWhereInput";
import { GeolocationOrderByInput } from "./GeolocationOrderByInput";

export type GeolocationFindManyArgs = {
  where?: GeolocationWhereInput;
  orderBy?: Array<GeolocationOrderByInput>;
  skip?: number;
  take?: number;
};
