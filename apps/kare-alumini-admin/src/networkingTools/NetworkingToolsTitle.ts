import { NetworkingTools as TNetworkingTools } from "../api/networkingTools/NetworkingTools";

export const NETWORKINGTOOLS_TITLE_FIELD = "id";

export const NetworkingToolsTitle = (record: TNetworkingTools): string => {
  return record.id?.toString() || String(record.id);
};
