import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MentorshipProgramServiceBase } from "./base/mentorshipProgram.service.base";

@Injectable()
export class MentorshipProgramService extends MentorshipProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
