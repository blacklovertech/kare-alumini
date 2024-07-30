import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventItemServiceBase } from "./base/eventItem.service.base";

@Injectable()
export class EventItemService extends EventItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
