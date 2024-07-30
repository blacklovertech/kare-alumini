import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsAnnouncementService } from "./newsAnnouncement.service";
import { NewsAnnouncementControllerBase } from "./base/newsAnnouncement.controller.base";

@swagger.ApiTags("newsAnnouncements")
@common.Controller("newsAnnouncements")
export class NewsAnnouncementController extends NewsAnnouncementControllerBase {
  constructor(protected readonly service: NewsAnnouncementService) {
    super(service);
  }
}
