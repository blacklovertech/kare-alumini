import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkingToolsServiceBase } from "./base/networkingTools.service.base";

@Injectable()
export class NetworkingToolsService extends NetworkingToolsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
