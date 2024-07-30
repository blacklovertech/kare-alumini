import { Module } from "@nestjs/common";
import { NewsAnnouncementModuleBase } from "./base/newsAnnouncement.module.base";
import { NewsAnnouncementService } from "./newsAnnouncement.service";
import { NewsAnnouncementController } from "./newsAnnouncement.controller";
import { NewsAnnouncementResolver } from "./newsAnnouncement.resolver";

@Module({
  imports: [NewsAnnouncementModuleBase],
  controllers: [NewsAnnouncementController],
  providers: [NewsAnnouncementService, NewsAnnouncementResolver],
  exports: [NewsAnnouncementService],
})
export class NewsAnnouncementModule {}
