import { NetworkingToolsWhereInput } from "./NetworkingToolsWhereInput";
import { NetworkingToolsOrderByInput } from "./NetworkingToolsOrderByInput";

export type NetworkingToolsFindManyArgs = {
  where?: NetworkingToolsWhereInput;
  orderBy?: Array<NetworkingToolsOrderByInput>;
  skip?: number;
  take?: number;
};
