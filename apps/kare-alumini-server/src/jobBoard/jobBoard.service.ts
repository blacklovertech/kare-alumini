import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobBoardServiceBase } from "./base/jobBoard.service.base";

@Injectable()
export class JobBoardService extends JobBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
