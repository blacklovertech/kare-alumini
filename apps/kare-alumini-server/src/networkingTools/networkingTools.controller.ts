import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkingToolsService } from "./networkingTools.service";
import { NetworkingToolsControllerBase } from "./base/networkingTools.controller.base";

@swagger.ApiTags("networkingTools")
@common.Controller("networkingTools")
export class NetworkingToolsController extends NetworkingToolsControllerBase {
  constructor(protected readonly service: NetworkingToolsService) {
    super(service);
  }
}
