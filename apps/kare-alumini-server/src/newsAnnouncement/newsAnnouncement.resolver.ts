import * as graphql from "@nestjs/graphql";
import { NewsAnnouncementResolverBase } from "./base/newsAnnouncement.resolver.base";
import { NewsAnnouncement } from "./base/NewsAnnouncement";
import { NewsAnnouncementService } from "./newsAnnouncement.service";

@graphql.Resolver(() => NewsAnnouncement)
export class NewsAnnouncementResolver extends NewsAnnouncementResolverBase {
  constructor(protected readonly service: NewsAnnouncementService) {
    super(service);
  }
}
