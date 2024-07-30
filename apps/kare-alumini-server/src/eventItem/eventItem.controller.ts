import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventItemService } from "./eventItem.service";
import { EventItemControllerBase } from "./base/eventItem.controller.base";

@swagger.ApiTags("eventItems")
@common.Controller("eventItems")
export class EventItemController extends EventItemControllerBase {
  constructor(
    protected readonly service: EventItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
