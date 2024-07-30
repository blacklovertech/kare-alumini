import * as graphql from "@nestjs/graphql";
import { NetworkingToolsResolverBase } from "./base/networkingTools.resolver.base";
import { NetworkingTools } from "./base/NetworkingTools";
import { NetworkingToolsService } from "./networkingTools.service";

@graphql.Resolver(() => NetworkingTools)
export class NetworkingToolsResolver extends NetworkingToolsResolverBase {
  constructor(protected readonly service: NetworkingToolsService) {
    super(service);
  }
}
