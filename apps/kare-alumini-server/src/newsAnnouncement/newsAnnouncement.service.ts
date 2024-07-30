import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsAnnouncementServiceBase } from "./base/newsAnnouncement.service.base";

@Injectable()
export class NewsAnnouncementService extends NewsAnnouncementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
